import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <>
    {showGptSearch ? (
      <>
        <Header/>
        <GptSearch/>
      </>) : 
      (<div>
        <div className="flex flex-col h-screen justify-between bg-black bg-opacity-80">
          <Header/>
          <MainContainer/>
          <div></div>
        </div>
        <SecondaryContainer/>
      </div>)}
    </>
  );
}

export default Browse