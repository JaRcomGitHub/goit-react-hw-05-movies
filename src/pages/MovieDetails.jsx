import { useParams } from "react-router-dom";
import { getTmdbMovieId } from "services/api";

export const MovieDetails = () => {
    const { movieId } = useParams();
    console.log('movieId', movieId);
    
    getTmdbMovieId(movieId)
      .then(data => {
        const movies = data.data;
        console.log('Movies', movies);
        // setMovies([...movies]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
      });

    return (
        <div>
            <h1>MovieDetails</h1>
            <p>Go back</p>
            {/* <img //backdrop_path or poster_path
                src={ baseImageTmdbURL + poster_path}
                alt={"poster"}
                className="MovieItem-image"
                loading="lazy" 
            /> */}
        
        </div>
    );
};