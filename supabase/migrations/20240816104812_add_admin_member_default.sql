set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.add_member_with_invite(link text)    
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$declare
  all_channel channels;
  all_invites channel_invites;
begin
  select * into all_invites
  from channel_invites
  where channel_invites.url = link;
  if all_invites.channel_id is not null AND auth.uid() is not null then    insert into members(user_id, channel_id, role)
    values(auth.uid(), all_invites.channel_id, 'admin'::member_roles); 

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
end;$function$
;