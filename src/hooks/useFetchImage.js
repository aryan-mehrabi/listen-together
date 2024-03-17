import { fetchImage } from "apis/supabase";
import { useQuery } from "react-query";

export default function useFetchImage(url) {
  const query = useQuery(["image", url], fetchImage, {
    enabled: false,
  });
  return query;
}
