import axios from "axios";

let apiIndex = 0;

const apiKeys = [
  process.env.REACT_APP_YOUTUBE_API_KEY,
  process.env.REACT_APP_LISTEN_TOGETHER_YOUTUBE_API_KEY,
  process.env.REACT_APP_MY_PROJECT_API_KEY,
];

export const fetchTracks = async ({ queryKey, pageParam = "" }) => {
  try {
    const result = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          key: apiKeys[apiIndex],
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
    if (error.response.status === 403) {
      apiIndex++;
    }
    if (error) throw error;
  }
};
