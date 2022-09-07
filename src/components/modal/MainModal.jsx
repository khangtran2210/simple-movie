import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import {
  handleToggleLogin,
  handleToggleModal,
  handleToggleSignup,
} from "redux/slice/modalSlice";

const MainModal = ({ children }) => {
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-10 modal">
      <div
        className="absolute inset-0 bg-black bg-opacity-80 layer"
        onClick={() => {
          dispatch(handleToggleModal(false));
          dispatch(handleToggleLogin(false));
          dispatch(handleToggleSignup(false));
        }}
      ></div>
      <div className="absolute w-[25rem] -translate-x-1/2 -translate-y-1/2 bg-[#272a37] left-1/2 top-1/2 content rounded-xl ">
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute top-0 right-0 w-8 h-8 bg-[#272a37] rounded-full cursor-pointer translate-x-1/4 -translate-y-1/4 text-primary hover:opacity-80"
          onClick={() => {
            dispatch(handleToggleModal(false));
            dispatch(handleToggleLogin(false));
            dispatch(handleToggleSignup(false));
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default MainModal;
