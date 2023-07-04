import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        part: 'snippet',
        regionCode: 'US',
        maxResults: '50',
        order: 'date'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export async function fetchAPI(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(response)
    return response.data;
}
