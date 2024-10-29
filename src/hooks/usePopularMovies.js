import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_POPULAR_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(TMDB_POPULAR_URL, TMDB_API_OPTIONS)
        const json = await data.json();
        console.log(json);
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;