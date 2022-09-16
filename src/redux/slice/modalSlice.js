import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    typeModal: null,
  },
  reducers: {
    handleCloseModal: (state) => ({
      ...state,
      isOpen: false,
      typeModal: null,
    }),
    handleOpenModal: (state, action) => ({
      ...state,
      isOpen: true,
      typeModal: action.payload,
    }),
  },
});

export const { handleCloseModal, handleOpenModal } = modalSlice.actions;
export default modalSlice.reducer;
