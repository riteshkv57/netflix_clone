import React, { useEffect, useState } from "react";
import axios from "./axios";
import "../assets/css/Row.css";
import Youtube from "react-youtube";
import { usePlay } from "../context/play";
import { useUser } from "../context/user";
import toast from 'react-hot-toast';
const base_Url = "https://image.tmdb.org/t/p/original";


// const url = `https://api.themoviedb.org/3/search/movie?api_key=60cd940dda2f953168a044483b9e7fb9&language=en-US&query=${query}&page=1&include_adult=false`;

function Row({ num, title, fetchUrl, isLargeRow }) {
  const [movie, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [play, setPlay] = usePlay();
  const [user] = useUser();

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,                 // Autoplay the video (0 to disable autoplay, 1 to enable)
      controls: 1,                 // Show video player controls (0 to hide controls, 1 to show)
      modestbranding: 1,           // Hide the YouTube logo (0 to show logo, 1 to hide)
      showinfo: 0,                 // Show video title and uploader info (0 to hide, 1 to show)
      loop: 0,                     // Loop the video (0 to disable looping, 1 to enable)
      rel: 0,                      // Show related videos at the end (0 to hide, 1 to show)
      fs: 1,                       // Show fullscreen button (0 to hide, 1 to show)
      cc_load_policy: 0,           // Show captions/subtitles (0 to hide, 1 to show)
      iv_load_policy: 3,           // Video annotations (1 to show, 3 to hide)
      autohide: 2,                 // Hide video controls automatically (0 to show controls, 1 to hide progress bar, 2 to hide controls)
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    let trailerurl = await axios.get(`/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`);

    if(user) {
      setTrailerUrl(trailerurl.data.results[0]?.key);
      setPlay(num);
    } else {
      setTrailerUrl("");
      setPlay(0);
      toast.error("Please login to watch the trailer!");
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movie.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            onClick={() => handleClick(movie)}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && play===num && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;