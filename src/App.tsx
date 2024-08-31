import { Fragment, SetStateAction, useState } from "react";

import "./App.css";
import HomePage from "./Page/Header/Header";

import "./Page/SASS/styles.scss";

import SigleMovies from "./Page/Sigle-Film/SingleMovie";
import SeriesMovies from "./Page/Series-Film/SeriesMovies";
import CattonMovies from "./Page/Catton-Film/CattonMovies";
import TVShowMovies from "./Page/TV-Show/TvMovies";
import { Route, Router, Routes } from "react-router-dom";
import MovieDetail from "./Page/Page-Detail/MoiveDetail";
import NewsFilm from "./Page/NewsFilm/NewFilm";
import Header from "./Page/Header/Header";
import SearchMovie from "./Component/MovieSearch";
import Footer from "./Page/Header/footer";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: SetStateAction<string>) => {
    setIsSearching(true);
    setSearchValue(value);
  };

  return (
    <Fragment>
      <Header onSearch={handleSearch} />
      {isSearching && searchValue ? (
        <SearchMovie searchValue={searchValue} />
      ) : undefined}

      <Routes>
        <Route path="/" element={<NewsFilm />} />
        <Route path="/seach:slug" element={<NewsFilm />} />
        <Route path="/home" element={<NewsFilm />} />

        <Route path="/phim-le" element={<SigleMovies />} />
        <Route path="/phim-bo" element={<SeriesMovies />} />
        <Route path="/tv-show" element={<TVShowMovies />} />
        <Route path="/phim-hoat-hinh" element={<CattonMovies />} />
        <Route path="/movie/:slugMovie" element={<MovieDetail />} />
        <Route path="/movies/:slugMovie/:episode" element={<MovieDetail />} />
      </Routes>
    </Fragment>
  );
}

export default App;
