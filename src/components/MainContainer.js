import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () => {

    const movies = useSelector(store => store.movies?.addNowPlayingMovies);

    if(!movies) return;

    const backgroundMovie = movies[0];
    console.log(backgroundMovie);

    const {original_title, overview, id} = backgroundMovie;

    return (
        <div className="mx-6 md:my-3">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movie_id={id}/>
        </div>
    )
}

export default MainContainer