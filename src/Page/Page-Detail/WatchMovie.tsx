import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import MovieDetail from "./MoiveDetail";

const PlayMovie = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(movie);

  return (
    <Fragment>
      <div className="movie-detail-container flex justify-center p-5 flex-col h-auto">
        <div
          className={`movies-items-wrap bg-cover bg-no-repeat bg-center w-11/12 h-[450px] relative transition-transform duration-500 ease-in-out cursor-pointer mr-1 mb-10 flex`}
        >
          <ReactPlayer url={movie.link_embed} />
        </div>
        <div className="move-detail-derecsion w-11/12 text-white">
          <h2 className="text-3xl">Mô tả:</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default PlayMovie;
