import { combineReducers } from "redux";
import movieAPIReducer from "./slice/movieAPISlice";
import genreAPIReducer from "./slice/genreAPISlice";
import modalReducer from "./slice/modalSlice";
const rootReducer = combineReducers({
  movieAPI: movieAPIReducer,
  genreAPI: genreAPIReducer,
  modal: modalReducer,
});

export default rootReducer;
