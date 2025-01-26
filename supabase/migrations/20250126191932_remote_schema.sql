set check_function_bodies = off;

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
  SET track_id = new_track_id, playlist_id = _playlist_id, position = 0
  WHERE id = _channel_id;  -- Adjust the condition as per your logic
END;$function$
;


