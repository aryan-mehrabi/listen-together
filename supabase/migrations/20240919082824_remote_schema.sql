drop policy "allow authenticated users to select all users" on "public"."users";

alter table "public"."users" add column "username" text;

CREATE UNIQUE INDEX users_username_key ON public.users USING btree (username);

alter table "public"."users" add constraint "users_username_key" UNIQUE using index "users_username_key";

create policy "allow authenticated users to select all users"
on "public"."users"
as permissive
for select
to authenticated
using ((EXISTS ( SELECT mc1.user_id AS user1_id,
    mc2.user_id AS user2_id,
    mc1.channel_id
   FROM (members mc1
     JOIN members mc2 ON ((mc1.channel_id = mc2.channel_id)))
  WHERE ((mc1.user_id = auth.uid()) AND (mc2.user_id = users.id) AND (mc1.user_id <> mc2.user_id)))));



