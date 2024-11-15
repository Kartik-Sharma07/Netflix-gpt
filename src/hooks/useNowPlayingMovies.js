import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_NOW_PLAYING_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.addNowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(TMDB_NOW_PLAYING_URL, TMDB_API_OPTIONS)
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;