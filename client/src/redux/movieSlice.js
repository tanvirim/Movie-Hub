import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
    },
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload;
        },
        updateMovie: (state, action) => {
            const updatedMovie = action.payload;
            const index = state.movies.findIndex(movie => movie.id === updatedMovie.id);
            if (index !== -1) {
                state.movies[index] = updatedMovie;
            }
        },
        removeMovie: (state, action) => {
            const movieId = action.payload;
            state.movies = state.movies.filter(movie => movie.id !== movieId);
        },
    },
});

export const { addMovie, updateMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
