create table public.users (
  id uuid references auth.users on delete cascade not null primary key,
  created_at timestamp with time zone default now() not null,
  name VARCHAR(255) not null,
  email VARCHAR(255) not null,
  avatar VARCHAR(255) not null
);

create table public.channels (
  id SERIAL not null primary key,
  created_at timestamp with time zone default now() not null,
  track VARCHAR(255) not null,
  position float4 not null,
  name VARCHAR(255) not null,
  is_playing boolean not null
)

create table public.members (
  id SERIAL not null primary key,
  created_at timestamp with time zone default now() not null,
  user_id uuid references public.users on delete cascade not null,
  channel_id int8 references public.channels on delete cascade not null,
  role VARCHAR(255) not null,
  CONSTRAINT unique_user_channel
  UNIQUE (user_id, channel_id)
)

create table public.messages (
  id SERIAL not null primary key,
  created_at timestamp with time zone default now() not null,
  user_id uuid references public.users on delete set null default auth.uid(),
  channel_id int8 references public.channels on delete cascade not null,
  client_id uuid,
  reply_id int8 references public.messages on delete set null,
  content jsonb not null
)