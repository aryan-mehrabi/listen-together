drop function if exists "public"."add_member_with_invite"(link uuid);

drop function if exists "public"."create_channel"(name text);

alter table "public"."channel_invites" alter column "url" drop default;

alter table "public"."channel_invites" alter column "url" set data type text using "url"::text;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.add_member_with_invite(link text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
declare
  all_channel channels;
  all_invites channel_invites;
begin
  select * into all_invites
  from channel_invites
  where channel_invites.url = link;
  if all_invites.channel_id is not null AND auth.uid() is not null then
    insert into members(user_id, channel_id, role)
    values(auth.uid(), all_invites.channel_id, 'member'::member_roles);
    
    select * into all_channel
    from channels
    where channels.id = all_invites.channel_id;
    
    return json_build_object(
      'channels',
      all_channel,
      'channel_invites',
      all_invites
    );
  end if;
  RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'my own error';
end;
$function$
;

CREATE OR REPLACE FUNCTION public.create_channel(name text, url text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
declare
  all_channel channels;
  all_channel_invite channel_invites;
  result json;
begin
  insert into channels (name, position, is_playing)
  values (name, 0, false)
  returning * into all_channel;

  insert into members (channel_id, user_id, role)
  values (all_channel.id, auth.uid(), 'creator');

  insert into channel_invites (channel_id, url)
  values (all_channel.id, url)
  returning * into all_channel_invite;

  select json_build_object('channels', all_channel, 'channel_invites', all_channel_invite) into result;

  return result;
end;
$function$
;


