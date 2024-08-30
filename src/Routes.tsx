import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import SeriesMovies from "./Page/Series-Film/SeriesMovies";
import SigleMovies from "./Page/Sigle-Film/SingleMovie";
import TVShowMovies from "./Page/TV-Show/TvMovies";
import MovieDetail from "./Page/Page-Detail/MoiveDetail";
import CartonMovies from "./Page/Catton-Film/CattonMovies";
import NewsFilm from "./Page/NewsFilm/NewFilm";

export const router = createBrowserRouter([
  { path: "/", element: <NewsFilm /> },
  { path: "/home", element: <NewsFilm /> },
  { path: "/phim-bo", element: <SeriesMovies /> },
  { path: "/phim-le", element: <SigleMovies /> },
  { path: "/tv-show", element: <TVShowMovies /> },
  { path: "/phim-hoat-hinh", element: <CartonMovies /> },
  { path: "/movie/slug", element: <MovieDetail /> },
  { path: "/movie/slug/episode", element: <MovieDetail /> },
]);
