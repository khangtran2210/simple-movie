import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  handleToggleLogin,
  handleToggleModal,
  handleToggleSignup,
} from "redux/slice/modalSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="relative flex items-center justify-center mb-10 text-lg font-bold text-white header gap-x-5">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
      <div className="absolute top-0 flex justify-between w-48 right-24">
        <button
          className="px-4 py-2 text-white bg-secondary rounded-xl whitespace-nowrap"
          onClick={() => {
            dispatch(handleToggleModal(true));
            dispatch(handleToggleSignup(true));
          }}
        >
          <span>Sign Up</span>
        </button>
        <button
          className="px-4 py-2 text-white bg-primary rounded-xl"
          onClick={() => {
            dispatch(handleToggleModal(true));
            dispatch(handleToggleLogin(true));
          }}
        >
          <span>Login</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
