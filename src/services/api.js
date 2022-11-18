import axios from "axios";

const API_KEY = "952628f2e449efc757df6f6ed1cc0d2c";
//https://api.themoviedb.org/3/trending/all/day?api_key=

function getThemoviedbURL() {
    const baseThemoviedbURL = "https://api.themoviedb.org/3/trending/all/day";
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    });
    return `${baseThemoviedbURL}?${searchParams}`;
}

export default async function axiosGetTrendingMovies() {
    const url = getThemoviedbURL();
    //console.log(url);
    try {
        const response = await axios.get(url);
        //console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
    // return url;
}
