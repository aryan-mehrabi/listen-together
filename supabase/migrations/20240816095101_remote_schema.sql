drop policy "enable auth users to read other users data except their email" on "public"."users";

drop function if exists "public"."add_member_with_invite2"(link uuid);

create policy "allow authenticated users to select all users"
on "public"."users"
as permissive
for select
to authenticated
using (true);



