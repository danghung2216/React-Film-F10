import { Fragment, useEffect, useState } from "react";
import "../SASS/styles.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
// import MovieList from "../../Component/MovieLists";
interface IMovie {
  name: string;
  slug: string;
  content: string;
  lag: string;
  year: number;
  actor: string[];
  id: string;
  poster_url: string;
  thumb_url: string;
  episodes: [];
  title: string;
}
interface IEpisodes {
  server_data: [name: string, link_embed: string, filename: string];
}

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <div
        className={`container max-w-full ${
          scrollPosition > 0 ? "fix-top" : ""
        }`}
      >
        <div className="header-wrap ">
          <div className="btn-menu">Menu</div>
          <div className="img-avatar">Phim F10</div>

          <div className="login mr-2">
            <div className="search-m ">
              <label htmlFor="search">Search</label>
              <input
                id="search"
                type="text"
                title="adshkjdsakj"
                placeholder="Search Movie"
              />
            </div>
            <a href="">Sign in</a>
            <a href="">Sign up </a>
          </div>
        </div>
      </div>
      <div className="topnav ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/phim-le">Phim Lẻ</NavLink>
        <NavLink to="/phim-bo">Phim Bộ</NavLink>
        <NavLink to="/tv-show">TV Show</NavLink>
        <NavLink to="/phim-hoat-hinh">Hoạt Hình</NavLink>
      </div>
    </Fragment>
  );
};

export default HomePage;
