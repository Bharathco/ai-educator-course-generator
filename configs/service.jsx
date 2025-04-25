const { default: axios } = require("axios");

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";

const getVideos = async (query) => {
  const params = {
    part: "snippet",
    q: query,
    maxResults: 1,
    type: "video",
    order: "relevance", // Get relevant results
    videoDuration: "any", // Include all video lengths
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };

  try {
    const resp = await axios.get(YOUTUBE_BASE_URL + "/search", { params });
    return resp.data.items;
  } catch (error) {
    console.error("Error fetching videos: ", error);
    return []; // Return empty array on error
  }
};

export default {
  getVideos,
};
