import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { Container, Header, Link } from "./App.styled";


// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
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
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <div>


        (body)
        Trending today

        <ul>
          listMovies
        </ul>

      </div>
    </Container>
  );
};

/*
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