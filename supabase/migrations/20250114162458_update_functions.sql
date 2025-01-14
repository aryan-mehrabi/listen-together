drop function if exists "public"."add_member"(user_email text, target_channel_id bigint);

drop function if exists "public"."play_next_track"(_id bigint, _channel_id bigint);

alter table "public"."playlists" enable row level security;

alter table "public"."tracks" enable row level security;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.add_member(_username text, target_channel_id bigint)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$declare
  user_record public.users%rowtype;
begin
  perform * from public.members where user_id = auth.uid() and channel_id = target_channel_id and (role = 'creator'::public.member_roles 
or role = 'admin'::public.member_roles);
  if found then
    select * into user_record from public.users where users.username = _username;
    if found then
      insert into public.members(user_id, channel_id, role)
      values(user_record.id, target_channel_id, 'admin'::public.member_roles);      return 'Member added successfully';
      else
      RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'User Not Found';
    end if;
    else
    RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'Not Authorized';
  end if;
end;$function$
;

CREATE OR REPLACE FUNCTION public.play_next_track(_channel_id bigint)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE
  _id bigint;
  _playlist_id bigint;
  _position bigint;
BEGIN
  -- Check if the user is a member of the channel
  PERFORM *
  FROM public.members
  WHERE members.user_id = auth.uid() AND members.channel_id = _channel_id;

  IF FOUND THEN
    -- Fetch required values into variables
    SELECT channels.track_id, tracks.position, tracks.playlist_id
    INTO _id, _position, _playlist_id
    FROM public.channels
    JOIN public.tracks
    ON channels.track_id = tracks.id
    WHERE channels.id = _channel_id;

    -- Mark the current track as played
    UPDATE public.tracks
    SET is_played = true
    WHERE id = _id;

    -- Update the channel to play the next track
    UPDATE public.channels
    SET track_id = tracks.id, position = 0, is_playing = true
    FROM public.tracks
    WHERE channels.id = _channel_id
      AND tracks.playlist_id = _playlist_id
      AND tracks.position = _position + 1;
  END IF;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.add_member_with_invite(link text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$declare
  all_channel public.channels;
  all_invites public.channel_invites;
begin
  select * into all_invites
  from public.channel_invites
  where channel_invites.url = link;
  if all_invites.channel_id is not null AND auth.uid() is not null then    insert into public.members(user_id, channel_id, role)
    values(auth.uid(), all_invites.channel_id, 'admin'::public.member_roles);

    select * into all_channel
    from public.channels
    where channels.id = all_invites.channel_id;

    return json_build_object(
      'channels',
      all_channel,
      'channel_invites',
      all_invites
    );
  end if;
  RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'my own error';
end;$function$
;

CREATE OR REPLACE FUNCTION public.create_channel(name text, url text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$declare
  new_channel public.channels;
  new_channel_invite public.channel_invites;
  new_playlist public.playlists;
  new_track public.tracks;
  result json;
begin
  insert into public.channels (name)
  values (name)
  returning * into new_channel;

  insert into public.members (channel_id, user_id, role)
  values (new_channel.id, auth.uid(), 'creator');

  insert into public.channel_invites (channel_id, url)
  values (new_channel.id, url)
  returning * into new_channel_invite;

  insert into public.playlists (name, type, channel_id)
  values ('queue', 'queue', new_channel.id)
  returning * into new_playlist;

  insert into public.tracks (playlist_id, user_id)
  values (new_playlist.id, auth.uid())
  returning * into new_track;

  update public.channels
  set playlist_id = new_playlist.id,
  track_id = new_track.id
  where id = new_channel.id;

  select json_build_object('channels', new_channel, 'channel_invites', new_channel_invite) into result;

  return result;
end;$function$
;

CREATE OR REPLACE FUNCTION public.create_user(user_name text, user_avatar text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$DECLARE
  new_row_number INT;
BEGIN
  -- Fetch the last row number based on creation date using a subquery
  SELECT COALESCE(MAX(row_value), 0) + 1001
  INTO new_row_number
  FROM (
    SELECT ROW_NUMBER() OVER (ORDER BY created_at) AS row_value
    FROM public.users
  ) AS numbered_users;

  -- Insert the new user into the table
  INSERT INTO public.users (id, name, username, avatar)
  VALUES (auth.uid(), user_name, LOWER(CONCAT(REPLACE(user_name, ' ', '-'), '-', new_row_number)), user_avatar);

  -- Return a JSON object with success status and username
  RETURN json_build_object('status', 'success', 'username', LOWER(CONCAT(REPLACE(user_name, ' ', '-'), '-', new_row_number)));

END;$function$
;

CREATE OR REPLACE FUNCTION public.delete_track_from_queue(_id bigint, _playlist_id bigint)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
  _deleted_position INT;
BEGIN
  -- Step 1: Find the position of the track to be deleted
  SELECT position INTO _deleted_position
  FROM public.tracks
  WHERE id = _id;

  -- Step 2: Delete the track
  DELETE FROM public.tracks
  WHERE id = _id;

  -- Step 3: Shift positions of remaining tracks
  UPDATE public.tracks
  SET position = position - 1
  WHERE playlist_id = _playlist_id
    AND position > _deleted_position;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.is_member_of(_user_id uuid)
 RETURNS boolean
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
SELECT EXISTS (
SELECT * FROM public.members WHERE channel_id IN ( SELECT Channel_id FROM public.members WHERE user_id = _user_id )
);
$function$
;

CREATE OR REPLACE FUNCTION public.move_track(_id integer, _new_position integer)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
    current_position INT;
    _playlist_id INT;
BEGIN
    -- Get the current position and playlist_id of the track
    SELECT t.position, t.playlist_id
    INTO current_position, _playlist_id
    FROM tracks t
    WHERE t.id = _id;

    -- If the track is not found, raise an exception
    IF current_position IS NULL THEN
        RAISE EXCEPTION 'Track with ID % not found in the queue', _id;
    END IF;

    -- If the new position is the same as the current position, do nothing
    IF current_position = _new_position THEN
        RETURN;
    END IF;

    -- If the track is moving up (to a lower position number)
    IF current_position > _new_position THEN
        UPDATE tracks
        SET position = position + 1
        WHERE position >= _new_position
          AND position < current_position
          AND playlist_id = _playlist_id;

    -- If the track is moving down (to a higher position number)
    ELSE
        UPDATE tracks
        SET position = position - 1
        WHERE position <= _new_position
          AND position > current_position
          AND playlist_id = _playlist_id;
    END IF;

    -- Update the track's position
    UPDATE tracks
    SET position = _new_position
    WHERE id = _id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.play_track(_track_id text, _metadata json, _playlist_id bigint, _position bigint, _channel_id bigint)  
 RETURNS void
 LANGUAGE plpgsql
AS $function$DECLARE
  new_track_id BIGINT; -- Variable to store the ID of the newly inserted track
BEGIN
  IF _position < 0 THEN
    RAISE EXCEPTION 'Position must be greater than or equal to 0';
  END IF;


  -- Shift all tracks with positions greater than or equal to (_position + 1)
  UPDATE tracks
  SET position = position + 1
  WHERE playlist_id = _playlist_id
    AND position >= _position + 1;

  -- Insert the new track at (_position + 1) and capture its ID
  INSERT INTO tracks (track_id, metadata, playlist_id, user_id, position, is_played)
  VALUES (
    _track_id,
    _metadata,
    _playlist_id,
    auth.uid(),
    _position + 1,
    true
  )
  RETURNING id INTO new_track_id;

  -- Update the corresponding channel's track_id with the new track_id
  UPDATE channels
  SET track_id = new_track_id, playlist_id = _playlist_id
  WHERE id = _channel_id;  -- Adjust the condition as per your logic
END;$function$
;

CREATE OR REPLACE FUNCTION public.queue_track(_track_id text, _metadata json, _playlist_id bigint)
 RETURNS SETOF tracks
 LANGUAGE plpgsql
AS $function$
BEGIN
  -- Insert the track and return the inserted row
  RETURN QUERY
  WITH max_position AS (
    SELECT COALESCE(MAX(position), 0) AS current_max
    FROM tracks
    WHERE playlist_id = _playlist_id
  )
  INSERT INTO tracks (track_id, metadata, playlist_id, user_id, position)
  VALUES (
    _track_id,
    _metadata,
    _playlist_id,
    auth.uid(),
    (SELECT current_max + 1 FROM max_position)
  )
  RETURNING *;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.update_start_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    -- Check if either "position" or "is_playing" was updated
    IF NEW.position IS DISTINCT FROM OLD.position OR
       NEW.is_playing IS DISTINCT FROM OLD.is_playing THEN

        NEW.start_at = now();

        -- You can add additional logic here if needed
    END IF;

    RETURN NEW;
END;
$function$
;

create policy "channel members can read playlists"
on "public"."playlists"
as permissive
for select
to authenticated
using ((EXISTS ( SELECT members.user_id,
    members.channel_id
   FROM members
  WHERE ((members.channel_id = playlists.channel_id) AND (members.user_id = auth.uid())))));


create policy "admin and owner can delete tracks"
on "public"."tracks"
as permissive
for delete
to authenticated
using ((EXISTS ( SELECT members.user_id,
    members.channel_id,
    members.role,
    playlists.id,
    playlists.channel_id
   FROM (members
     JOIN playlists ON ((members.channel_id = playlists.channel_id)))
  WHERE ((playlists.id = tracks.playlist_id) AND (members.user_id = auth.uid()) AND (members.role <> 'member'::member_roles)))));        


create policy "admin and owner can insert into tracks"
on "public"."tracks"
as permissive
for insert
to public
with check ((EXISTS ( SELECT members.user_id,
    members.channel_id,
    members.role,
    playlists.id,
    playlists.channel_id
   FROM (members
     JOIN playlists ON ((members.channel_id = playlists.channel_id)))
  WHERE ((playlists.id = tracks.playlist_id) AND (members.user_id = auth.uid()) AND (members.role <> 'member'::member_roles)))));        


create policy "admin and owner can update tracks"
on "public"."tracks"
as permissive
for update
to public
using ((EXISTS ( SELECT members.user_id,
    members.channel_id,
    members.role,
    playlists.id,
    playlists.channel_id
   FROM (members
     JOIN playlists ON ((members.channel_id = playlists.channel_id)))
  WHERE ((playlists.id = tracks.playlist_id) AND (members.user_id = auth.uid()) AND (members.role <> 'member'::member_roles)))));        


create policy "channel members can read tracks"
on "public"."tracks"
as permissive
for select
to authenticated
using ((EXISTS ( SELECT members.user_id,
    members.channel_id,
    playlists.id,
    playlists.channel_id
   FROM (members
     JOIN playlists ON ((members.channel_id = playlists.channel_id)))
  WHERE ((playlists.id = tracks.playlist_id) AND (members.user_id = auth.uid())))));