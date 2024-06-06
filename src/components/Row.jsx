import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./styles/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Rows(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }

    console.log(movie);
  };

  return (
    <div className="row">
      <h1 className="poster-title">{props.title}</h1>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row-poster ${props.isLargeRow && "row-poster-large"}`}
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${baseUrl}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Rows;
