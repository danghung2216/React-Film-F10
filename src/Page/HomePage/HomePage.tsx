import { Fragment, useEffect, useState } from "react";
import "../SASS/styles.scss";
import { NavLink } from "react-router-dom";

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

          <div className="search ">
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              title="adshkjdsakj"
              placeholder="Search Movie"
            />
          </div>
        </div>
      </div>
      <div className="topnav ">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/phim-le">Phim Lẻ</NavLink>
        <NavLink to="/phim-bo">Phim Bộ</NavLink>
        <NavLink to="/tv-show">TV Show</NavLink>
        <NavLink to="/phim-hoat-hinh">Hoạt Hình</NavLink>
      </div>
      {/* <div className="home-movie h-screen"></div> */}
    </Fragment>
  );
};

export default HomePage;
