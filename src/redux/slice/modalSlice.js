import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    isLoginOpen: false,
    isSignupOpen: false,
  },
  reducers: {
    handleToggleModal: (state, action) => ({
      ...state,
      isOpen: action.payload,
    }),
    handleToggleLogin: (state, action) => ({
      ...state,
      isLoginOpen: action.payload,
    }),
    handleToggleSignup: (state, action) => ({
      ...state,
      isSignupOpen: action.payload,
    }),
  },
});

export const { handleToggleModal, handleToggleLogin, handleToggleSignup } =
  modalSlice.actions;
export default modalSlice.reducer;
