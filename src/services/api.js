import axios from "axios";

const API_KEY = "952628f2e449efc757df6f6ed1cc0d2c";

const baseThemoviedbURL = "https://api.themoviedb.org/3/trending/all/day";
const baseTmdbGenreURL = "https://api.themoviedb.org/3/genre/movie/list";
const baseTmdbMovieURL = "https://api.themoviedb.org/3/movie/";


const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'uk',
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

export async function getTmdbGenres() {
    const url = `${baseTmdbGenreURL}?${searchParams}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getTmdbMovieId(movieId) {
    const url = `${baseTmdbMovieURL}${movieId}?${searchParams}`;
    console.log(url);
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}
