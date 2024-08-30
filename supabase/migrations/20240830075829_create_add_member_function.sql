set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.add_member(user_email text, target_channel_id bigint)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
declare
  user_record users%rowtype; 
begin
  perform * from members where user_id = auth.uid() and channel_id = target_channel_id and (role = 'creator'::member_roles or role = 'admin'::member_roles);
  if found then
    select * into user_record from users where email = user_email;     
    if found then
      insert into members(user_id, channel_id, role) 
      values(user_record.id, target_channel_id, 'admin'::member_roles);      return 'Member added successfully'; 
      else
      RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'User Not Found';
    end if;
    else
    RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'Not Authorized'; 
  end if;
end;
$function$
;