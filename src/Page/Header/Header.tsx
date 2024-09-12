import { Fragment, useEffect, useState } from "react";
import "../SASS/styles.scss";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  onSearch: (searchValue: string) => void;
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSearch, isLoggedIn }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
    setSearchValue("");
  };
  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // sjd

  return (
    <Fragment>
      <div
        className={`container max-w-full ${
          scrollPosition > 0 ? "fix-top" : ""
        }`}
      >
        <div className="header-wrap ">
          <button onClick={handleOpenMenu}>Menu</button>
          <div className="header-title">
            <Link to={"/"}> Phim F10</Link>
          </div>

          <div className="search ">
            <button onClick={handleSearch}>
              <Link to={`/search/${searchValue}`}>Seach</Link>
            </button>

            <input
              className="text-black"
              id="search"
              type="text"
              placeholder="Search Movie"
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
          {isLoggedIn ? (
            <div className="login-sigup">
              <img src="" alt="" />
            </div>
          ) : (
            <div className="login-sigup">
              <Link to={"/login"}>Đăng Nhập</Link>
              <Link to={"/login"}>Đăng Ký</Link>
            </div>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="open-menu text-white flex flex-col absolute w-1/4 ml-2 ">
          <Link className="menu-link" to="/home" onClick={handleSearch}>
            Phim Mới Cập Nhật
          </Link>
          <Link className="menu-link" to="/phim-le">
            Phim Lẻ
          </Link>
          <Link className="menu-link" to="/phim-bo">
            {" "}
            Phim Bộ
          </Link>
          <Link className="menu-link" to="/tv-show">
            {" "}
            TV Skow
          </Link>
          <Link className="menu-link" to="/phim-hoat-hinh">
            {" "}
            Phim Hoạt Hình
          </Link>
        </div>
      )}
      <div className="topnav " onClick={handleSearch}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/phim-le">Phim Lẻ</NavLink>
        <NavLink to="/phim-bo">Phim Bộ</NavLink>
        <NavLink to="/tv-show">TV Show</NavLink>
        <NavLink to="/phim-hoat-hinh">Hoạt Hình</NavLink>
      </div>
    </Fragment>
  );
};

export default Header;
