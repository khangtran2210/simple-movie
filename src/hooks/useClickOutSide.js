import { useDispatch } from "react-redux";
import { handleCloseModal } from "redux/slice/modalSlice";

export default function useClickOutSide() {
  const dispatch = useDispatch();
  return () => {
    dispatch(handleCloseModal());
  };
}
