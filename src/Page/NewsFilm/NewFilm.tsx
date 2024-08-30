import React, { Fragment, useEffect, useState } from "react";
import CurrentPage from "../../Component/CurrentPage";
import axios from "axios";
import { Link } from "react-router-dom";
import { IMovie, URL_IMG, URL_SIGLE } from "../../Component/APIService";

const NewsFilm = () => {
  const [sigleMovies, setSigleMovies] = useState<IMovie[]>([]);
  const {
    currentPage,
    totalPages,
    setTotalPages,
    handleNextPage,
    handlePrevPage,
  } = CurrentPage();

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
      const url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${currentPage}`;

      const response = await fetch(url, options);
      const data = await response.json();
      setSigleMovies(data.items);
      console.log("dsadas", data);
      setTotalPages(data.pagination.totalPages);
    };
    fetchMovie();
  }, [currentPage]);
  console.log(sigleMovies);

  return (
    <Fragment>
      <div className="popular-container">
        <div className="movies-wrap my-10 px-10 max-w-full ">
          <h1 className="text-white font-bold text-2xl text-center">
            Phim Mới Cập Nhật
          </h1>
          {sigleMovies.length > 0 && (
            <div className="movie-container">
              <div className="movies-wrap my-10 px-10 max-w-full flex flex-wrap justify-between">
                {sigleMovies.map((movie, index) => (
                  <Link
                    to={`/movie/${movie.slug}`}
                    key={movie._id}
                    className={`movies-items bg-cover bg-no-repeat bg-center w-[200px] h-[300px] relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer mr-1 mb-10 flex-col col-auto flex-wrap`}
                    style={{
                      backgroundImage: `url(${movie.poster_url})`,
                    }}
                  >
                    <div className="layer-name w-full h-1/2  absolute bottom-0 left-0 z-0" />
                    <div className="relative p-4 flex flex-col items-center justify-end h-full">
                      <h3 className="text-md uppercase text-center text-white">
                        {movie.name || movie.title || movie.original_title}
                      </h3>
                      <button className="btn-watch-now w-full">Xem ngay</button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="btn-page w-full flex justify-around pb-3 text-white items-center content-center">
        <div className="btn-left">
          <button
            className="btn-change-current-page"
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
          >
            Trang Trước
          </button>
        </div>
        <div className="page-total">
          <span className="total-page">
            {currentPage} / {totalPages}
          </span>
        </div>
        <div className="btn-right">
          <button
            className="btn-change-current-page"
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
          >
            Trang Sau
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsFilm;
