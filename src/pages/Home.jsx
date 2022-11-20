import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { getTmdbTrendingMovies } from "services/api"

export const Home = () => {
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
            <ul className="Movies">
                {movies.map(({ id, title }) => (
                    <li className="MovieItem" key={id}>
                        <Link to={`/movies/${id}`}>
                            <p>{title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            {loading && <Loader />}
        </main>
    );
};
