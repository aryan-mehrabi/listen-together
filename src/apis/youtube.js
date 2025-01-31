let apiIndex = 0;

const apiKeys = [
  process.env.REACT_APP_YOUTUBE_API_KEY,
  process.env.REACT_APP_LISTEN_TOGETHER_YOUTUBE_API_KEY,
  process.env.REACT_APP_MY_PROJECT_API_KEY,
  process.env.REACT_APP_TWITCH_API_KEY,
  process.env.REACT_APP_MUMATE_API_KEY,
];

const videos = new Map();

export const searchVideos = async ({ queryKey, pageParam = "" }) => {
  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    const params = {
      part: "snippet",
      key: apiKeys[apiIndex],
      q: queryKey[1],
      maxResults: 15,
      type: "video",
      videoEmbeddable: "true",
      pageToken: pageParam,
      videoCategoryId: 10,
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url.toString());

    if (!response.ok) {
      if (response.status === 403) {
        apiIndex++;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};

export const getVideos = async (videoId) => {
  try {
    const res = videos.get(videoId);

    if (res) return res;

    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    const params = {
      key: apiKeys[apiKeys.length - 1],
      part: "snippet,contentDetails",
      id: videoId,
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    videos.set(videoId, data);

    return data;
  } catch (error) {
    console.error("Error fetching video details:", error);
    throw error;
  }
};
