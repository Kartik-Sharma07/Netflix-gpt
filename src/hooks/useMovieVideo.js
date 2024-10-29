import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieVideo = async (movie_id) => {
  
  const dispatch = useDispatch();

  const TMDB_MOVIES_VIDEO_URL = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
  
  const getMovieVideo = async () => {
      const data = await fetch(TMDB_MOVIES_VIDEO_URL, TMDB_API_OPTIONS)
      const json = await data.json();
      const videos = json?.results;
      const video = videos[videos.length - 1];
      console.log(video);
      dispatch(addMovieTrailer(`https://www.youtube.com/embed/${video.key}?&autoplay=1&mute=1&hd=1&loop=1`));
  };

  useEffect(() => {
      getMovieVideo();
  }, []);
};

export default useMovieVideo;