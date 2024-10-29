import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        addMovieTrailer: null,
        addPopularMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.addMovieTrailer = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.addPopularMovies = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies} = movieSlice.actions;

export default movieSlice.reducer;