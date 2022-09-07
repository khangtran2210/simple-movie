import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";

// API : https://api.themoviedb.org/3/movie/550?api_key=601b1d584d814eecc70ce80f523117ad
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import {
  getNowMovies,
  getPopularMovies,
  getTopMovies,
} from "redux/slice/movieAPISlice";

const MovieList = ({ type }) => {
  const data = useSelector((state) => state.movieAPI);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (type) {
      case "now_playing":
        dispatch(getNowMovies());
        break;
      case "popular":
        dispatch(getPopularMovies());
        break;
      case "top_rated":
        dispatch(getTopMovies());
        break;
      default:
        break;
    }
  }, [dispatch, type]);
  const movies = data[`${type}_movies`] || [];
  // console.log("🚀 ~ MovieList ~ movies", data[`${type}_movies`]);

  return (
    <div className="list-card">
      <Swiper
        grabCursor={false} // Bật cursor bám để kéo
        spaceBetween={30} // Khoảng cách giữa các card
        slidesPerView={4} // Mỗi trang có bao nhiêu phần tử
        className="text-white"
        navigation={true}
        modules={[Navigation]}
      >
        {movies.length > 0 &&
          movies.map((item) => {
            return (
              <SwiperSlide key={Math.random()}>
                <Card item={item}></Card>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MovieList;
