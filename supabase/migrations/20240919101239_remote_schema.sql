alter table "public"."users" drop column "email";

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
  RETURN json_build_object('status', 'success', 'username', LOWER(CONCAT(REPLACE(user_name, ' ', '-'), '-', new_row_number)));

END;$function$
;


