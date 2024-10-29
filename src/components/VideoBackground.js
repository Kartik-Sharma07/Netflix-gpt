import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBackground = ({movie_id}) => {
    
    const trailerVideo = useSelector(store => store.movies?.addMovieTrailer);

    useMovieVideo(movie_id);

    return (
        <div className="absolute h-full w-full top-0 left-0 -z-1 overflow-hidden">
            {trailerVideo && <iframe className="absolute aspect-video top-0 left-0 -z-1 w-full h-full transform scale-200" src={trailerVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"> 
            </iframe>}
        </div>
    )
}

export default VideoBackground;