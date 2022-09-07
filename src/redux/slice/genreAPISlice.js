import { createSlice } from "@reduxjs/toolkit";

// Create initialState
const initialState = {
  genres: {},
};
// Create Genres Slice
const genreAPISlice = createSlice({
  name: "genreAPI",
  initialState,
  reducers: {
    getGenres: () => {},
    setGenres: (state, action) => ({
      ...state,
      genres: action.payload,
    }),
  },
});
// Export action and reducer
export const { getGenres, setGenres } = genreAPISlice.actions;
export default genreAPISlice.reducer;
