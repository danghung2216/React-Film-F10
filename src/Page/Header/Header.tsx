import { Fragment, useEffect, useState } from "react";
import "../SASS/styles.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { MenuItem } from "@mui/material";
import React from "react";

interface HeaderProps {
  onSearch: (searchValue: string) => void;
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSearch, isLoggedIn }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const renderAccount = () => {
    const storedValueAcc = window.sessionStorage.getItem("username");
    const storedValueGG = window.sessionStorage.getItem("usernameGG");

    if (storedValueAcc) {
      return `Hi, ${storedValueAcc}`;
    } else if (storedValueGG) {
      return `Hi, ${storedValueGG}`;
    }
  };

  const handleLogOut = () => {
    const isConfirm = confirm("Do you want to log out?");
    if (isConfirm) {
      window.sessionStorage.clear();
      window.location.reload();
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    onSearch(searchValue);
    setSearchValue("");
  };
  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          {/* {isLoggedIn ? ( */}
          <div className="d-flex flex-row align-items-center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar />
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogin}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Log in
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Log out
              </MenuItem>
            </Menu>
            {renderAccount()}
          </div>
          {/* // ) : (
          //   <div className="login-sigup">
          //     <Link to={"/login"}>Đăng Nhập</Link>
          //     <Link to={"/login"}>Đăng Ký</Link>
          //   </div>
          // )} */}
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
