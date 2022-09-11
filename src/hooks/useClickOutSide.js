import { useDispatch } from "react-redux";
import {
  handleToggleLogin,
  handleToggleModal,
  handleToggleSignup,
} from "redux/slice/modalSlice";

export default function useClickOutSide() {
  const dispatch = useDispatch();
  return () => {
    dispatch(handleToggleModal(false));
    dispatch(handleToggleLogin(false));
    dispatch(handleToggleSignup(false));
  };
}
