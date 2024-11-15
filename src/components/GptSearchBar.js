import { useDispatch, useSelector } from "react-redux"
import {NETFLIX_LOGIN_BACKGROUND_IMG, TMDB_API_OPTIONS} from "../utils/constants"
import languages from "../utils/languageConstants";
import { useRef } from "react";
import model from "../utils/geminiAI"
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  const dispatch = useDispatch();
  
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  // Search a movie in TMDB datatbase

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTIONS);
    const json = await data.json();
    return json.results;
    
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const  result  =  await  model.generateContent("Act as movie recommendation system and suggest list of movies for the query: "  + searchText.current.value + " .Only give me 5 movies, comma seperated like the example given ahead. Example result: Dhol, Bhagam Bhag, Welcome, Sholay, Don");
    const  response  =  await  result.response;
    console.log(response);
    const  text  =  response.text();
    console.log(text);

    if(!text){
        // TODO: Handle error 
    }

    const gpt_movies = text.split(",");

    const promiseArray = gpt_movies.map((movie) => searchMovieTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);

    console.log(tmdbResult);

    dispatch(addGptMoviesResult({movieNames: gpt_movies, movieResults: tmdbResult}));

  };

  return (
    <div>
        <div className="fixed top-0 -z-1 h-screen w-screen">
            <img className="h-screen w-screen object-cover" src={NETFLIX_LOGIN_BACKGROUND_IMG} alt="background"/>
        </div>
        <div className="fixed top-0 -z-1 h-screen w-screen bg-black bg-opacity-50">
        </div>
        <div className="flex justify-center mt-60">
            <form className="bg-black w-full md:w-7/12 flex justify-center text-sm md:text-base" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="w-9/12 p-4 m-4" placeholder={languages[langKey].gptSearchPlaceholder} ref={searchText}/>
                <button className="w-2/12 p-2 m-4 md:p-4 text-white font-semibold bg-red-700 rounded" onClick={handleGptSearchClick}>{languages[langKey].search}</button>
            </form>
        </div>
    </div>
  )
}

export default GptSearchBar