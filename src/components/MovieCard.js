import {MOVIE_IMAGE_CARD_URL} from "../utils/constants"

const MovieCard = ({movie}) => {
    const {original_title, poster_path} = movie;
    if(!poster_path) return null;
    return (
        <div>
            <div className="w-40">
                <img src={`${MOVIE_IMAGE_CARD_URL}/${poster_path}`} alt={original_title}/>
            </div>
        </div>
    )
}

export default MovieCard