import { Fragment, useState } from "react";

import "./App.css";
import HomePage from "./Page/HomePage/HomePage";

import "./Page/SASS/styles.scss";

import SigleMovies from "./Page/Sigle-Film/SingleMovie";
import SeriesMovies from "./Page/Series-Film/SeriesMovies";
import CattonMovies from "./Page/Catton-Film/CattonMovies";
import TVShowMovies from "./Page/TV-Show/TvMovies";
import { Route, Router, Routes } from "react-router-dom";
import MovieDetail from "./Page/Page-Detail/MoiveDetail";
import PlayMovie from "./Page/Page-Detail/WatchMovie";

// import TopRateMovies from "./Page/TopMovies/TopMovies";
// import TopMovies from "./Page/TopMovies/TopMovies";

function App({ movie }) {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <HomePage />
      <PlayMovie movie={movie} />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/phim-le" element={<SigleMovies />} />
        <Route path="/phim-bo" element={<SeriesMovies />} />
        <Route path="/tv-show" element={<TVShowMovies />} />
        <Route path="/phim-hoat-hinh" element={<CattonMovies />} />
        <Route path="/movie/:slugMovie" element={<MovieDetail />} />
        {/* <Route path="/movie/:slugMovie/play" element={<MovieDetail />} /> */}
      </Routes>
    </Fragment>
  );
}

export default App;
