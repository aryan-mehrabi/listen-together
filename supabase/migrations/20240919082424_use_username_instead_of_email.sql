alter table "public"."users" alter column "email" drop not null; 

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_user(user_name text, user_avatar text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$DECLARE
  new_row_number INT;
BEGIN
  -- Fetch the last row number based on creation date using a subquery 
  SELECT COALESCE(MAX(row_value), 0) + 1001
  INTO new_row_number
  FROM (
    SELECT ROW_NUMBER() OVER (ORDER BY created_at) AS row_value        
    FROM users
  ) AS numbered_users;

  -- Insert the new user into the table
  INSERT INTO users (id, name, username, avatar)
  VALUES (auth.uid(), user_name, LOWER(CONCAT(REPLACE(user_name, ' ', '-'), '-', new_row_number)), user_avatar);

  -- Return a JSON object with success status and username
  RETURN json_build_object('status', 'success', 'username', CONCAT(REPLACE(user_name, ' ', '-'), '-', new_row_number));

END;$function$
;

CREATE OR REPLACE FUNCTION public.add_member(user_email text, target_channel_id bigint)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$declare
  user_record users%rowtype;
begin
  perform * from members where user_id = auth.uid() and channel_id = target_channel_id and (role = 'creator'::member_roles or role = 'admin'::member_roles);
  if found then
    select * into user_record from users where username = user_email;  
    if found then
      insert into members(user_id, channel_id, role)
      values(user_record.id, target_channel_id, 'admin'::member_roles);      return 'Member added successfully';
      else
      RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'User Not Found';
    end if;
    else
    RAISE EXCEPTION SQLSTATE '90001' USING MESSAGE = 'Not Authorized'; 
  end if;
end;$function$
;