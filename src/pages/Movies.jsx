import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { SearchFormInput, SearchFormButton } from "components/App.styled";
import { getTmdbTrendingMovies } from "services/api";

//{ onSubmit }
export const Movies = () => {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const handleInputChange = event => {
        setSearchValue(event.currentTarget.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (searchValue.trim() !== '') {
            //onSubmit(searchValue);
            console.log('searchValue', searchValue);

            setLoading(true);
            getTmdbTrendingMovies()
                .then(data => {
                    const movies = data.data.results;
                    console.log('Search', movies);
                    setMovies([...movies]);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return (
        <main>
            <form className="SearchForm" onSubmit={handleSubmit}>
                <SearchFormInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    name="searchValue"
                    value={searchValue}
                    onChange={handleInputChange}
                />
                <SearchFormButton type="submit">
                    Search
                </SearchFormButton>
            </form>
            {loading && <Loader />}
            {movies.length > 0 &&
                <ul>
                    {movies.map(({ id, title }) => (
                        <li key={id}>
                            <Link to={`/movies/${id}`}>
                                <p>{title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </main>
    );
};