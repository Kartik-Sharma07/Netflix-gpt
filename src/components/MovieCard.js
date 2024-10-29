import {MOVIE_IMAGE_CARD_URL} from "../utils/constants"

const MovieCard = ({movie}) => {
    const {original_title, poster_path} = movie;
    return (
        <div>
            <div className="w-40 mx-6">
                <img src={`${MOVIE_IMAGE_CARD_URL}/${poster_path}`} alt={original_title}/>
            </div>
        </div>
    )
}

export default MovieCard