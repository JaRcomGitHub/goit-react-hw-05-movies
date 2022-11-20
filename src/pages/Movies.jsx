import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { SearchFormInput, SearchFormButton, MovieList, MovieListItem } from "components/App.styled";
import { getTmdbMovieSearch } from "services/api";

export const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const handleInputChange = event => {
        setSearchValue(event.currentTarget.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (searchValue.trim() !== '') {
            //console.log('searchValue', searchValue);
            setSearchParams({ query: searchValue });
            // const form = event.currentTarget;
            // setSearchParams({ query: form.elements.searchValue.value });
            // form.reset();
        }
    }

    useEffect(() => {
        if (query === "") return;

        setLoading(true);
        getTmdbMovieSearch(query)
            .then(data => {
                const movies = data.data.results;
                //console.log('Search', movies);
                setMovies([...movies]);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [query]);

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
            {loading === false && movies.length === 0 && query !== "" &&
                <p>We don't have any movie for this search.</p>}
            {movies.length > 0 &&
                <MovieList>
                    {movies.map(({ id, title }) => (
                        <MovieListItem key={id}>
                            <Link to={`/movies/${id}`} state={{ from: `/movies?query=${query}` }}>
                                {title}
                            </Link>
                        </MovieListItem>
                    ))}
                </MovieList>
            }
        </main>
    );
};
