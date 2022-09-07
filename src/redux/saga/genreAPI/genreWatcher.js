import { takeLatest } from "redux-saga/effects";
import { getGenres } from "redux/slice/genreAPISlice";
import getGenreWorker from "./genreWorker";

export default function* genreWatcher() {
  yield takeLatest(getGenres.type, getGenreWorker);
}
