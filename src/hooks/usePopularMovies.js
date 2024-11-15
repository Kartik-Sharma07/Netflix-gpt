import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_POPULAR_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.addPopularMovies);

    const getPopularMovies = async () => {
        const data = await fetch(TMDB_POPULAR_URL, TMDB_API_OPTIONS)
        const json = await data.json();
        console.log(json);
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, []);
};

export default usePopularMovies;