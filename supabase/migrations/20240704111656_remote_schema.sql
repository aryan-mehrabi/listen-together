set check_function_bodies = off;

CREATE OR REPLACE FUNCTION storage.extension(name text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
_parts text[];
_filename text;
BEGIN
    select string_to_array(name, '/') into _parts;
    select _parts[array_length(_parts,1)] into _filename;
    -- @todo return the last part instead of 2
    return split_part(_filename, '.', 2);
END
$function$
;

CREATE OR REPLACE FUNCTION storage.filename(name text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
_parts text[];
BEGIN
    select string_to_array(name, '/') into _parts;
    return _parts[array_length(_parts,1)];
END
$function$
;

CREATE OR REPLACE FUNCTION storage.foldername(name text)
 RETURNS text[]
 LANGUAGE plpgsql
AS $function$
DECLARE
_parts text[];
BEGIN
    select string_to_array(name, '/') into _parts;
    return _parts[1:array_length(_parts,1)-1];
END
$function$
;

create policy "channels member can insert and select 1ffg0oo_0"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (((bucket_id = 'images'::text) AND (EXISTS ( SELECT members.channel_id,
    members.user_id
   FROM members
  WHERE ((members.channel_id = ((storage.foldername(objects.name))[1])::bigint) AND (members.user_id = auth.uid()))))));


create policy "channels member can insert and select 1ffg0oo_1"
on "storage"."objects"
as permissive
for select
to authenticated
using (((bucket_id = 'images'::text) AND (EXISTS ( SELECT members.channel_id,
    members.user_id
   FROM members
  WHERE ((members.channel_id = ((storage.foldername(objects.name))[1])::bigint) AND (members.user_id = auth.uid()))))));



