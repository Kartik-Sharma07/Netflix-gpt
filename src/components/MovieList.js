import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  return (
    <div className="">
        <div className="text-white text-2xl md:text-3xl px-6 py-6">
            <h1>{title}</h1>
        </div>
        <div className="flex overflow-x-scroll gap-6 mx-6" 
        style={{
            overflowX: 'auto', /* Hide scrollbar */
            msOverflowStyle: 'none', /* IE and Edge */
            scrollbarWidth: 'none', /* Firefox */
        }}>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default MovieList