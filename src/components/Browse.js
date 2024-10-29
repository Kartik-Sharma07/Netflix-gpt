import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <div className="flex flex-col h-screen justify-between bg-black bg-opacity-50">
        <Header/>
        <MainContainer/>
        <div></div>
    </div>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse