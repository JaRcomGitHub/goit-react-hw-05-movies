import axios from "axios";

const API_KEY = "952628f2e449efc757df6f6ed1cc0d2c";// API (v3 auth) <<api_key>>

const baseThemoviedbURL = "https://api.themoviedb.org/3/trending/movie/day";
const baseTmdbMovieURL = "https://api.themoviedb.org/3/movie/";

export const baseImageTmdbURL_l = "https://image.tmdb.org/t/p/w200";
export const baseImageTmdbURL_m = "https://image.tmdb.org/t/p/w300";
export const baseImageTmdbURL_h = "https://image.tmdb.org/t/p/w500";
//"https://image.tmdb.org/t/p/original"

const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en',
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
