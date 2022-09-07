import movieApi from "apis/movieApi";
import { API_KEY } from "config/config";
import { put, call } from "redux-saga/effects";
import {
  setPopularMovies,
  setTopMovies,
  setUpcomingMovies,
  setNowMovies,
  setMovieDetail,
  setCastsByMovie,
  setVideosByMovie,
  setSimilarByMovie,
} from "redux/slice/movieAPISlice";

// Get popular, upcoming, ... movie
export function* getPopularMoviesWorker() {
  try {
    // Params is API KEY
    const params = { api_key: API_KEY };
    // Payload is type of movie as: popular, top-rated, upcoming
    const data = yield call(movieApi.getType, "popular", params);

    // After get data success -> call setPopularMovie function to return movie
    yield put(setPopularMovies(data?.results));
  } catch (error) {
    throw error;
  }
}
export function* getTopMoviesWorker() {
  try {
    // Params is API KEY
    const params = { api_key: API_KEY };
    // Payload is type of movie as: popular, top-rated, upcoming
    const data = yield call(movieApi.getType, "top_rated", params);
    // Print

    // After get data success -> call setPopularMovie function to return movie
    yield put(setTopMovies(data?.results));
  } catch (error) {
    throw error;
  }
}
export function* getUpcomingMoviesWorker() {
  try {
    // Params is API KEY
    const params = { api_key: API_KEY };
    // Payload is type of movie as: popular, top-rated, upcoming
    const data = yield call(movieApi.getType, "upcoming", params);
    // Print

    // After get data success -> call setPopularMovie function to return movie
    yield put(setUpcomingMovies(data?.results));
  } catch (error) {
    throw error;
  }
}
export function* getNowMoviesWorker() {
  try {
    // Params is API KEY
    const params = { api_key: API_KEY };
    // Payload is type of movie as: popular, top-rated, upcoming
    const data = yield call(movieApi.getType, "now_playing", params);
    // Print

    // After get data success -> call setPopularMovie function to return movie
    yield put(setNowMovies(data?.results));
  } catch (error) {
    throw error;
  }
}
export function* getSimilarByMovieWorker(action) {
  try {
    // Params is API KEY
    const params = { api_key: API_KEY };
    // Payload is type of movie as: popular, top-rated, upcoming
    const data = yield call(
      movieApi.getOtherByMovie,
      action.payload,
      "similar",
      params
    );
    // Print

    // After get data success -> call setPopularMovie function to return movie
    yield put(setSimilarByMovie(data?.results));
  } catch (error) {
    throw error;
  }
}
export function* getVideosByMovieWorker(action) {
  try {
    // Params is API KEY
    const params = { api_key: API_KEY };
    // Payload is type of movie as: popular, top-rated, upcoming
    const data = yield call(
      movieApi.getOtherByMovie,
      action.payload,
      "videos",
      params
    );
    // Print

    // After get data success -> call setVideosByMovie function to return movie
    yield put(setVideosByMovie(data?.results));
  } catch (error) {
    throw error;
  }
}
export function* getCastsByMovieWorker(action) {
  try {
    // Params is API KEY
    const params = { api_key: API_KEY };
    // Payload is type of movie as: popular, top-rated, upcoming
    const data = yield call(
      movieApi.getOtherByMovie,
      action.payload,
      "casts",
      params
    );
    // Print

    // After get data success -> call setCastsByMovie function to return movie
    yield put(setCastsByMovie(data?.cast));
  } catch (error) {
    throw error;
  }
}

// Get movie details

export function* getMovieDetailWorker(action) {
  try {
    // Params is API KEY
    const params = { api_key: API_KEY };
    const data = yield call(movieApi.getMovieDetail, action.payload, params);
    yield put(setMovieDetail(data));
  } catch (error) {
    throw error;
  }
}
