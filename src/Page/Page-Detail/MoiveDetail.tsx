import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieDetails, URL_DETAIL } from "../../Component/APIService";
import PlayMovie from "./WatchMovie";
import Footer from "../Header/footer";
interface IEpsidoe {
  id: number;
  server_data: [];
  filename: string;
  link_embed: string;
  link_m3u8: string;
  name: string;
}

const MovieDetail = () => {
  const { slugMovie } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenPlayMovie, setIsopenPlayMovie] = useState(false);
  const [movieEpisode, setMovieEpisode] = useState<IEpsidoe | null>(null);
  const hangdlePlay = () => {
    setIsopenPlayMovie(true);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        };
        const url = `${URL_DETAIL}${slugMovie}`;
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        setMovieEpisode(data.episodes[0].server_data);
        console.log("eeeel", movieEpisode);
        console.log("bas", data);

        setMovieDetails(data.movie);
        console.log("jjjjj", movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [slugMovie]);

  return (
    <Fragment>
      {isLoading ? (
        <div className="text-white">Loading movie details...</div>
      ) : movieDetails ? (
        <div className="movie-detail-container flex justify-center p-5 flex-col h-auto">
          {isOpenPlayMovie ? (
            <PlayMovie value={movieEpisode} />
          ) : (
            <div
              className={`movies-items-wrap bg-cover bg-no-repeat bg-center w-11/12 h-auto relative transition-transform duration-500 ease-in-out cursor-pointer mr-1 mb-10 flex sm:h-auto`}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${movieDetails.poster_url})`,
              }}
            >
              <div className="bg-black w-full h-full opacity-70 absolute top-0 left-0 z-0" />
              <div className="detail-movie-epidose relative  p-4 flex w-full items-center justify-around h-full">
                <div className="img-right w-[300px] h-[450px] grid justify-center items-center p-5  ">
                  <img
                    src={`${movieDetails.poster_url}`}
                    alt={movieDetails.title}
                    className="movie-poster object-cover object-center"
                  />
                </div>
                <div className="detai-info-left w-1/2 h-6/7 items-center flex-col justify-start content-center border-2 rounded-sm border-violet-950 px-2  font-bold">
                  <div className="movie-title z-10 pt-3">
                    Tên:{" "}
                    {movieDetails.name ||
                      movieDetails.title ||
                      movieDetails.original_title}
                  </div>
                  <div className="movie-details-wrap z-10">
                    <p>
                      Thời lượng: <span>{movieDetails.time}</span>
                    </p>
                    <p>
                      Tình Trạng:{" "}
                      <span>
                        {movieDetails.episode_current}
                        {/* {movieDetails.episode_total}{" "} */}
                      </span>
                    </p>
                    <p>Số Tập: {movieDetails.episode_total}</p>
                    <p>Chất lượng: {movieDetails.quality}</p>
                    <p>Ngôn Ngữ: {movieDetails.lang}</p>
                    <p>Quốc Gia: {movieDetails.country[0].name}</p>
                    <p>Thể Loại: {movieDetails.type}</p>
                    <p>Năm Phát Hành: {movieDetails.year}</p>
                    {/* Add more details as needed */}
                  </div>
                  <div className="btn-watch-video p-2 flex justify-center">
                    <button
                      className="btn-watch-video-i py-2 px-5 border-2 border-violet-950 rounded-md text-white object-cover"
                      onClick={hangdlePlay}
                    >
                      Xem Phim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* sadm */}
          <div className="move-detail-derecsion w-11/12 text-white">
            <h2 className="text-3xl">Mô tả:</h2>
            <p>{movieDetails.content}</p>
          </div>
        </div>
      ) : (
        // comment

        <div>Movie not found.</div>
      )}
      <Footer />
    </Fragment>
  );
};

export default MovieDetail;
