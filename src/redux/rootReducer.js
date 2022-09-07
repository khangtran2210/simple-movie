import { combineReducers } from "redux";
import movieAPIReducer from "./slice/movieAPISlice";
import genreAPIReducer from "./slice/genreAPISlice";
const rootReducer = combineReducers({
  movieAPI: movieAPIReducer,
  genreAPI: genreAPIReducer,
});

export default rootReducer;
