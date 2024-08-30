import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

const PlayMovie = ({ value }) => {
  const { slugMovie } = useParams();
  const [url, setUrl] = useState(value[0].link_m3u8);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  console.log("val", url);
  useEffect(() => {
    if (value && value.length > 0) {
      const selectUrl = value.find((episode, index) => episode.index === index);
      if (selectUrl) {
        setUrl(selectUrl.link_m3u8);
      }
    }
  }, [value, slugMovie]);
  console.log("slet", url);

  const handleSelect = (episode) => {
    setSelectedEpisode(episode.name);
    setUrl(episode.link_m3u8);
    console.log("ep", url);
  };

  return (
    <Fragment>
      <div className="movie-detail-container flex justify-center py-5 flex-col h-auto w-11/12">
        <div
          className={`movies-items-wrap bg-cover bg-no-repeat bg-center w-full h-[450px] relative`}
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
        </div>
        <div className="list-epidose w-full text-white ">
          <h1 className="font-bold text-3xl">Tập phim:</h1>
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
