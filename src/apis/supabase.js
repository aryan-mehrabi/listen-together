import supabase from "auth/supabase";

export const fetchImage = async ({ queryKey: [, url] }) => {
  const { data } = await supabase.auth.getSession();
  const res = await fetch(url, {
    headers: {
      apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
      Authorization: `Bearer ${data.session.access_token}`,
    },
  });
  const response = new Response(res.body);
  const blob = await response.blob();
  return blob;
};
