import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "redux/slice/genreAPISlice";

const Test = () => {
  const data = useSelector((state) => state.genreAPI.casts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  // const data = useSelector((state) => state.movieAPI.movieDetail);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getOtherByMovie({ movieId: 766507, otherName: "" }));
  // }, []);
  const movies = data || [];
  console.log("🚀 ~ Test ~ data", movies);
  // console.log("🚀 ~ Test ~ data", Array.isArray(movies));
  return <div className="text-white">Hello Test</div>;
};

export default Test;
