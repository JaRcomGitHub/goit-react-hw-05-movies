import { Link } from "react-router-dom";

const baseImageTmdbURL = "https://image.tmdb.org/t/p/w300";
//"https://image.tmdb.org/t/p/original"
//"https://image.tmdb.org/t/p/w500"
//"https://image.tmdb.org/t/p/w300"

export const Home = ({ movies }) => {
    return (
        <main>
            <h1>Trending today</h1>
            <ul className="Movies">
                {movies.map(({ id, title, name, poster_path }) => (
                    <li className="MovieItem" key={id}>
                        <Link to={`/movies/${id}`}>
                            <img src={ baseImageTmdbURL + poster_path} alt="" />
                            
                            <p>{title ? title : name}</p>
                        </Link>
                        {/* <img //backdrop_path or poster_path
                            src={ baseImageTmdbURL + poster_path}
                            alt={"poster"}
                            className="MovieItem-image"
                            loading="lazy" 
                        /> */}
                        {/* <a href={ "/movies/" + id }>
                            <p>{title ? title : name}</p>
                        </a> */}
                    </li>
                ))}
            </ul>
        </main>
    );
};

//у картинок такой базовый url:
//https://image.tmdb.org/t/p/w300