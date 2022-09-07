import { all, fork } from "redux-saga/effects";
import genreWatcher from "./saga/genreAPI/genreWatcher";
import movieWatcher from "./saga/movieAPI/moviesWatcher";

export default function* rootSaga() {
  yield all([fork(movieWatcher), fork(genreWatcher)]);
}
