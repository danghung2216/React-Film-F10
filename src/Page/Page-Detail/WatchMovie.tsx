import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

const PlayMovie = ({ value }) => {
  const { slugMovie } = useParams();
  const [url, setUrl] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  console.log("val", value);
  useEffect(() => {
    if (value && value.length > 0) {
      const selectUrl = value.find((episode) => episode.slug === slugMovie);
      if (selectUrl) {
        setUrl(selectUrl.link_embed);
      }
    }
  }, [value, slugMovie]);
  console.log("slet", url);

  const handleSelect = (episode) => {
    episode.preventDefault(); // corrected the typo
    const seleUrl = episode.link_embed;
    setSelectedEpisode(episode);
    setUrl(seleUrl);
    console.log("ep", seleUrl);
  };

  return (
    <Fragment>
      <div className="movie-detail-container flex justify-center p-5 flex-col h-auto">
        <div
          className={`movies-items-wrap bg-cover bg-no-repeat bg-center w-11/12 h-[450px] relative transition-transform duration-500 ease-in-out cursor-pointer mr-1 mb-10 flex`}
        >
          {selectedEpisode && (
            <ReactPlayer url={url} playing controls autoplay />
          )}
        </div>
        <div className="move-detail-derecsion w-11/12 text-white">
          {value.length > 0 ? (
            <ul>
              {value.map((episode, index) => (
                <li key={index}>
                  <Link
                    to={`/movies/${slugMovie}/${episode.slug}`}
                    onClick={() => handleSelect(episode.name)}
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
