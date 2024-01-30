import axios from "axios";
import ErrorPage from "../components/ErrorPage";

// const API_KEY = 'AIzaSyBf6oTuWGtQDM2brhb74mn4wmsrli1Y9C4';
const API_KEY = "AIzaSyBf6oTuWGtQDM2brhb74mn4wmsrli1Y9C4"; //JSM

// BASE
export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 50,
    key: API_KEY,
  },
});

// API
export const getByQuery = async (query) => {
  const response = await youtube.get("/search", {
    params: {
      q: query,
    },
  });
  isOK(response.error);
  return response;
};

export const getChannel = async (id) => {
  try {
    const response = await youtube.get(`/channels?id=${id}`, {
      params: {
        part: "snippet, statistics",
      },
    });
    isOK(response.error);
    const data = response.data;
    console.log(data);

    return data.items[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getPlaylist = async (channelId) => {
  try {
    const response = await youtube.get(`/playlists?channelId=${channelId}`);
    isOK(response.error);
    const data = await response.data;

    return data.items;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getPlaylistItems = async (playlistId) => {
  try {
    const response = await youtube.get(
      `/playlistItems?playlistId=${playlistId}`
    );
    isOK(response.error);
    const data = response.data;

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getVideosByChannel = async (channelId) => {
  try {
    const response = await youtube.get(
      `search?channelId=${channelId}&channelType=channelTypeUnspecified&order=viewCount`
    );
    isOK(response.error);

    const data = await response.data;

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getVideo = async (videoId) => {
  try {
    const response = await youtube.get(`videos?id=${videoId}`, {
      params: {
        part: "snippet,statistics",
      },
    });
    isOK(response.error);

    const data = response.data;

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getRelatedVideos = async (videoCId) => {
  try {
    const response = await youtube.get(`search`, {
      params: {
        part: "snippet",
        videoCategoryId: videoCId,
        type: "video",
      },
    });

    isOK(response.error);

    return response.data;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
};

// export async function fetchAPI(options) {
//     authenticate().then(loadClient);

//     execute({ q: options.q })
// }

function isOK(isResponseOK) {
  if (!isResponseOK) {
    console.log("err");
    return <ErrorPage />;
  }
  // throw new Error("API Requests Exceeded!"); // just one case
}
