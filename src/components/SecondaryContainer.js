import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies?.addNowPlayingMovies);
    const popularMovies = useSelector(store => store.movies?.addPopularMovies);

    if(!movies) return;
    if(!popularMovies) return;
    
    return (
        <div className="bg-black h-200">
            <div className="relative -top-60 z-20">
                <MovieList title="Now Playing" movies={movies}/>
                <MovieList title="Popular" movies={popularMovies}/>
                <MovieList title="Upcoming" movies={movies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer