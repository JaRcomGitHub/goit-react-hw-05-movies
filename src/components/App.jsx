import { Route, Routes } from "react-router-dom";
import { Container, Header, Link } from "./App.styled";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "pages/Cast";
import { Reviews } from "pages/Reviews";

export function App() {

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
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Container>
  );
};

/*

  Code Splitting (разделение кода)

Добавь асинхронную загрузку JS-кода для маршрутов приложения 
используя React.lazy() и <Suspense>.


*/