import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { MovieList, MovieListItem } from "components/App.styled";
import { getTmdbTrendingMovies } from "services/api"

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        setLoading(true);

        getTmdbTrendingMovies()
            .then(data => {
                const movies = data.data.results;
                //console.log('Movies', movies);
                setMovies([...movies]);
            })
                .catch(error => {
                console.log(error);
            })
                .finally(() => {
                setLoading(false);
            });
    }, []);
    
    return (
        <main>
            <h1>Trending today</h1>
            <MovieList>
                {movies.map(({ id, title }) => (
                    <MovieListItem key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </MovieListItem>
                ))}
            </MovieList>
            {loading && <Loader />}
        </main>
    );
};

export default Home;
