import axios from "axios";
import ErrorPage from "../components/ErrorPage";

// const API_KEY = 'AIzaSyBf6oTuWGtQDM2brhb74mn4wmsrli1Y9C4';
const API_KEY = 'AIzaSyBf6oTuWGtQDM2brhb74mn4wmsrli1Y9C4'; //JSM
const YOUR_CLIENT_ID = '829369578279-v3f6ukgt8pcchtjk60b6s8t18i06av4q.apps.googleusercontent.com'

// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
//         .then(function () { console.log("Sign-in successful"); },
//             function (err) { console.error("Error signing in", err); });
// }

// function loadClient() {
//     gapi.client.setApiKey(API_KEY);
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function () { console.log("GAPI client loaded for API"); },
//             function (err) { console.error("Error loading GAPI client for API", err); });
// }

// function execute(options) {
//     return gapi.client.youtube.search.list({
//         "part": [
//             "snippet"
//         ],
//         "maxResults": 50,
//         "q": options.q
//     })
//         .then(
//             (response) => {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//                 return response.json()
//             },
//             (err) => { console.error("Execute error", err); });
// }

// gapi.load("client:auth2", function () {
//     gapi.auth2.init({ client_id: YOUR_CLIENT_ID });
// });


// BASE
export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: API_KEY
    }
})

// API
export const getByQuery = async (query) => {
    const response = await youtube.get('/search', {
        params: {
            q: query,
        }
    })
    isOK(response.error);
    return response;
}

export const getChannel = async (id) => {
    try {
        const response = await youtube.get(`/channels?id=${id}`, {
            params: {
                part: 'snippet, statistics',
            }
        });
        isOK(response.error);
        const data = response.data;
        console.log(data);

        return data.items[0];

    } catch (err) {
        throw new Error(err.message)
    }
}

export const getPlaylist = async (channelId) => {
    try {
        const response = await youtube.get(`/playlists?channelId=${channelId}`)
        isOK(response.error);
        const data = await response.data;


        return data.items;
    } catch (err) {
        throw new Error(err.message)
    }
}

export const getPlaylistItems = async (playlistId) => {
    try {
        const response = await youtube.get(`/playlistItems?playlistId=${playlistId}`)
        isOK(response.error);
        const data = response.data;

        return data;
    } catch (err) {
        throw new Error(err.message)
    }
}

export const getVideosByChannel = async (channelId) => {
    try {
        const response = await youtube.get(`search?channelId=${channelId}&channelType=channelTypeUnspecified&order=viewCount`)
        isOK(response.error);

        const data = await response.data;

        return data;
    } catch (err) {
        throw new Error(err.message)
    }
}

export const getVideo = async (videoId) => {
    try {
        const response = await youtube.get(`videos?id=${videoId}`, {
            params: {
                part: "snippet,statistics",
            }
        });
        isOK(response.error);

        const data = response.data;

        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getRelatedVideos = async (videoId) => {
    try {
        const response = await youtube.get(`search?relatedToVideoId=${videoId}&type=video`, {
            params: {
                part: "snippet",
            }
        });
        isOK(response.error);

        return response.data;
    } catch (err) {
        throw new Error(err.message)
    }
}

// export async function fetchAPI(options) {
//     authenticate().then(loadClient);

//     execute({ q: options.q })
// }

function isOK(isResponseOK) {
    if (!isResponseOK) {
        console.log('err')
        return <ErrorPage />
    }
    // throw new Error("API Requests Exceeded!"); // just one case
}