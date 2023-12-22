import axios from "axios";

export const fetchTracks = async ({ queryKey, pageParam = "" }) => {
  try {
    const result = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: queryKey[1],
          maxResults: 10,
          type: "video",
          videoEmbeddable: "true",
          pageToken: pageParam,
          videoCategoryId: 10,
        },
      }
    );
    return await result.data;
  } catch (error) {
    throw error;
  }
};
