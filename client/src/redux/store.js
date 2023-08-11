import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loadersSlice";
import usersReducer from "./usersSlice";
import movieReducer from "./movieSlice"

const store = configureStore({
  reducer: {
    loaders: loadersReducer,
    users: usersReducer,
    movies: movieReducer,
  },
});

export default store;
