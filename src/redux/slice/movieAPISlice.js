import { createSlice } from "@reduxjs/toolkit";

// Create initialState
const initialState = {
  popular_movies: [],
  top_rated_movies: [],
  upcoming_movies: [],
  now_playing_movies: [],
  movieDetail: [],
  casts: [],
  similar: [],
  videos: [],
};

// Create Movie Slice
const movieAPISlice = createSlice({
  name: "movieAPI",
  initialState,
  reducers: {
    // Movies By Type
    getPopularMovies: () => {},
    setPopularMovies: (state, action) => ({
      ...state,
      popular_movies: action.payload,
    }),
    getTopMovies: () => {},
    setTopMovies: (state, action) => ({
      ...state,
      top_rated_movies: action.payload,
    }),
    getUpcomingMovies: () => {},
    setUpcomingMovies: (state, action) => ({
      ...state,
      upcoming_movies: action.payload,
    }),
    getNowMovies: () => {},
    setNowMovies: (state, action) => ({
      ...state,
      now_playing_movies: action.payload,
    }),
    //
    getMovieDetail: () => {},
    setMovieDetail: (state, action) => ({
      ...state,
      movieDetail: action.payload,
    }),
    // Cast, Similar, Videos Trailer of a Movie
    getCastsByMovie: () => {},
    setCastsByMovie: (state, action) => ({
      ...state,
      casts: action.payload,
    }),
    getVideosByMovie: () => {},
    setVideosByMovie: (state, action) => ({
      ...state,
      videos: action.payload,
    }),
    getSimilarByMovie: () => {},
    setSimilarByMovie: (state, action) => ({
      ...state,
      similar: action.payload,
    }),
  },
});

// Export action and reducer
export const {
  getPopularMovies,
  setPopularMovies,

  getTopMovies,
  setTopMovies,

  getUpcomingMovies,
  setUpcomingMovies,

  getNowMovies,
  setNowMovies,

  getMovieDetail,
  setMovieDetail,

  getCastsByMovie,
  setCastsByMovie,

  getVideosByMovie,
  setVideosByMovie,

  getSimilarByMovie,
  setSimilarByMovie,
} = movieAPISlice.actions;
export default movieAPISlice.reducer;
