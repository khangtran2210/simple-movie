import { takeLatest } from "redux-saga/effects";
import {
  getPopularMovies,
  getTopMovies,
  getUpcomingMovies,
  getNowMovies,
  getMovieDetail,
  getCastsByMovie,
  getVideosByMovie,
  getSimilarByMovie,
} from "redux/slice/movieAPISlice";
import {
  getPopularMoviesWorker,
  getTopMoviesWorker,
  getUpcomingMoviesWorker,
  getNowMoviesWorker,
  getMovieDetailWorker,
  getCastsByMovieWorker,
  getVideosByMovieWorker,
  getSimilarByMovieWorker,
} from "./moviesWorker";

export default function* movieWatcher() {
  yield takeLatest(getPopularMovies.type, getPopularMoviesWorker);
  yield takeLatest(getTopMovies.type, getTopMoviesWorker);
  yield takeLatest(getUpcomingMovies.type, getUpcomingMoviesWorker);
  yield takeLatest(getNowMovies.type, getNowMoviesWorker);
  yield takeLatest(getMovieDetail.type, getMovieDetailWorker);
  yield takeLatest(getCastsByMovie.type, getCastsByMovieWorker);
  yield takeLatest(getVideosByMovie.type, getVideosByMovieWorker);
  yield takeLatest(getSimilarByMovie.type, getSimilarByMovieWorker);
}
