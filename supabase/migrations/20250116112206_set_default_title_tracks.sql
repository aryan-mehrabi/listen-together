alter table "public"."tracks" alter column "metadata" set default '{"title": "Michael Kiwanuka - Cold Little Heart (Official Video)"}'::jsonb;

alter table "public"."votes" enable row level security;