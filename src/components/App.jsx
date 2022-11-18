import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Header, Link } from "./App.styled";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import axiosGetTrendingMovies from "../services/api"
import { Cast } from "pages/Cast";
import { Reviews } from "pages/Reviews";

// import styled from "styled-components";
// const StyledLink = styled(NavLink)`
//   color: black;
//   &.active {
//     color: orange;
//   }
// `;

export function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const responseTrendingMovies = (data) => {
    const { page, results } = data;

    console.log(page);
    console.log(results);
    
    setMovies([...results]);
  }

  useEffect(() => {
    // if (searchValue !== '') {
      setLoading(true);
      axiosGetTrendingMovies()
        .then(data => {
          console.log(loading);
          console.log(data);
          responseTrendingMovies(data.data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    // }
  // eslint-disable-next-line
  }, []);


  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
          <br/>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home movies={movies}/>}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
        <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Container>
  );
};

/*
Ключ API (v3 auth) <<api_key>>
952628f2e449efc757df6f6ed1cc0d2c

https://api.themoviedb.org/3/trending/all/day?api_key=952628f2e449efc757df6f6ed1cc0d2c

/trending/get-trending список самых популярных фильмов на сегодня для создания 
коллекции на главной странице.

/search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
/movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
/movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
/movies/get-movie-reviews запрос обзоров для страницы кинофильма.


  Маршруты

В приложении должны быть следующие маршруты. Если пользователь зашел по 
несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

'/' - компонент Home, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент Movies, страница поиска фильмов по ключевому слову.

'/movies/:movieId' - компонент MovieDetails, страница с детальной 
информацией о кинофильме.

/movies/:movieId/cast - компонент Cast, информация о актерском составе. 
Рендерится на странице MovieDetails.

/movies/:movieId/reviews - компонент Reviews, информация об обзорах. 
Рендерится на странице MovieDetails.


  Code Splitting (разделение кода)

Добавь асинхронную загрузку JS-кода для маршрутов приложения 
используя React.lazy() и <Suspense>.


*/