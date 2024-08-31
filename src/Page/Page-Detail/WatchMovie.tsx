import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import Footer from "../Header/footer";

const PlayMovie = ({ value }) => {
  const { slugMovie } = useParams();
  const [url, setUrl] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  // const [nameMovie, setNameMovie] = useState("");

  console.log("val", url);
  // useEffect(() => {
  //   if (value && value.length > 0) {
  //     const selectUrl = value.find((episode, index) => episode.index === index);
  //     if (selectUrl) {
  //       setUrl(selectUrl.link_m3u8);
  //     }
  //   }
  // }, [value, slugMovie]);
  // console.log("slet", url);
  useEffect(() => {
    if (value && value.length > 0) {
      const selectUrl = value[0];
      if (selectUrl) {
        setUrl(selectUrl.link_m3u8);
        setSelectedEpisode(selectUrl.filename);
        // setNameMovie(selectUrl.filename);
      }
    }
  }, [value, slugMovie]);

  const handleSelect = (episode) => {
    setSelectedEpisode(episode.name);
    setUrl(episode.link_m3u8);
    console.log("ep", url);
  };
  console.log("hhhh", value);
  console.log("tap", selectedEpisode);
  // console.log("name", nameMovie);

  return (
    <Fragment>
      <div className="movie-detail-container flex justify-center py-5 flex-col h-auto w-11/12">
        <div
          className={`movies-items-wrap bg-cover bg-no-repeat bg-center w-full h-[450px]`}
        >
          {selectedEpisode && url && (
            <ReactPlayer
              width="100%"
              height="100%"
              url={url}
              playing
              controls
              autoplay
            />
          )}
          {/* <div className="filename text-white font-bold m-2 p-2">
            <h1>{selectedEpisode}</h1>
          </div> */}
        </div>

        <div className="list-epidose w-full text-white  ">
          <div className="filename text-white font-bold m-2 p-2">
            <h1>{selectedEpisode}</h1>
          </div>
          <h1 className="font-bold text-3xl ml-2">Tập phim:</h1>
          {value.length > 0 ? (
            <ul
              className=" flex flex-row flex-wrap w-full m-2
            "
            >
              {value.map((episode, index) => (
                <li key={index} className="p-1 m-1 border-2 ">
                  <Link
                    to={`/movies/${slugMovie}/${episode.slug}`}
                    onClick={() => handleSelect(episode)}
                  >
                    {episode.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No episodes found for this movie.</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default PlayMovie;
