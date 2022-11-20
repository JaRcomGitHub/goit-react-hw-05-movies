import axios from "axios";

const API_KEY = "952628f2e449efc757df6f6ed1cc0d2c";// API (v3 auth) <<api_key>>
const API_LANGUAGE = 'en'

const baseThemoviedbURL = "https://api.themoviedb.org/3/trending/movie/day";
const baseTmdbMovieURL = "https://api.themoviedb.org/3/movie/";
const baseTmdbMovieSearchURL = "https://api.themoviedb.org/3/search/";

export const baseImageTmdbURL_l = "https://image.tmdb.org/t/p/w200";
export const baseImageTmdbURL_m = "https://image.tmdb.org/t/p/w300";
export const baseImageTmdbURL_h = "https://image.tmdb.org/t/p/w500";
//"https://image.tmdb.org/t/p/original"

const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: API_LANGUAGE,
});

export async function getTmdbTrendingMovies() {
    const url = `${baseThemoviedbURL}?${searchParams}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getTmdbMovieId(movieId) {
    const url = `${baseTmdbMovieURL}${movieId}?${searchParams}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getTmdbMovieIdCredits(movieId) {
    const url = `${baseTmdbMovieURL}${movieId}/credits?${searchParams}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getTmdbMovieIdReviews(movieId) {
    const url = `${baseTmdbMovieURL}${movieId}/reviews?${searchParams}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getTmdbMovieSearch(searchValue) {
    const url = `${baseTmdbMovieSearchURL}/movie?${searchParams}&query=${searchValue}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
