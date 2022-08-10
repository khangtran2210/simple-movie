import React, { useEffect } from "react";
import useSWR from "swr";
import Card from "./Card";

// API : https://api.themoviedb.org/3/movie/550?api_key=601b1d584d814eecc70ce80f523117ad
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import { fetcher } from "../../config/config";
import { useState } from "react";
const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  let endpoint = `https://api.themoviedb.org/3/movie/${type}?api_key=601b1d584d814eecc70ce80f523117ad`;

  const { data } = useSWR(endpoint, fetcher);
  useEffect(() => {
    if (data) {
      setMovies(data.results);
      console.log(data.results);
    }
  }, [data]);
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
