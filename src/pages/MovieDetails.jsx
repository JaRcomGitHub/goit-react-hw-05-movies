import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { getTmdbMovieId, baseImageTmdbURL_m } from "services/api";
import { Loader } from "components/Loader/Loader";
import { GenresList, MovieCard, LinkGoBack } from "components/App.styled";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState();
    const [backLinkHref] = useState(useLocation().state?.from ?? "/");
    
    useEffect(() => {
        setLoading(true);

        getTmdbMovieId(movieId)
            .then(data => {
                const movies = data.data;
                //console.log('Movie', movies);
                setMovieDetails(movies);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [movieId]);

    return (
        <div>
            <LinkGoBack to={backLinkHref}>← Go back</LinkGoBack>
            {loading && <Loader />}
            {loading === false && !movieDetails && <p>sorry, this movie ID not found</p>}
            {movieDetails &&
            <>
                <MovieCard>
                    <img
                        src={baseImageTmdbURL_m + movieDetails.poster_path}
                        alt={"poster " + movieDetails.title}
                        loading="lazy"
                        width="300"
                    />
                    <div>
                        <h2>{movieDetails.title} ({movieDetails.release_date.substr(0, 4)})</h2>
                        <p>User score: {Math.round(movieDetails.vote_average*10)}%</p>
                        <h3>Overview</h3>
                        <p>{movieDetails.overview}</p>
                        <h4>Genres</h4>
                        <GenresList>
                            {(movieDetails.genres).map(({ id, name }) => (
                                <li key={id}>
                                    {name}
                                </li>
                            ))}
                        </GenresList>
                    </div>
                </MovieCard>
                
                <div>
                    <hr/>
                    <p>Additional information</p>
                    <ul>
                        <li><Link to="cast">Cast</Link></li>
                        <li><Link to="reviews">Reviews</Link></li>
                    </ul>
                    <hr/>
                </div>

                <Outlet />
            </>
            }
        </div>
    );
};