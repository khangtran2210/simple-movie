import genreApi from "apis/genreApi";
import { API_KEY } from "config/config";
import { call, put } from "redux-saga/effects";
import { setGenres } from "redux/slice/genreAPISlice";

export default function* getGenreWorker() {
  try {
    const params = { api_key: API_KEY };
    const data = yield call(genreApi.getGenres, params);
    // console.log("🚀 ~ *genreWorker ~ data", data);
    yield put(setGenres(data?.genres));
  } catch (error) {
    throw error;
  }
}
