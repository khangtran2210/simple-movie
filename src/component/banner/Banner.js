import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import { useState } from "react";
// API : https://api.themoviedb.org/3/movie/550?api_key=601b1d584d814eecc70ce80f523117ad

const Banner = () => {
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=601b1d584d814eecc70ce80f523117ad",
    fetcher
  );
  const movies = data?.results || [];

  return (
    <section className="h-[600px] mb-5 banner page-container ">
      <Swiper
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}
      >
        {movies.length > 0 &&
          movies.map((item) => {
            return (
              <SwiperSlide>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, backdrop_path, genre_ids } = item;
  const [genres, setGenres] = useState([]);
  let genresMatch = [];
  const { data } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=601b1d584d814eecc70ce80f523117ad&language=en-US",
    fetcher
  );
  useEffect(() => {
    if (data) {
      setGenres(data.genres);
    }
  }, [data]);
  //   Duyệt lấy genres object khớp với genre_ids
  genresMatch = genres.filter((item) => {
    return genre_ids.includes(item.id);
  });
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.7)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white content left-5 bottom-5">
        <h2 className="mb-3 text-4xl font-bold">{title}</h2>
        <div className="flex items-center mb-8 gap-x-3">
          {genresMatch.length > 0 &&
            genresMatch.map((item) => (
              <span className="px-4 py-1 border border-white rounded-md cursor-pointer">
                {item.name}
              </span>
            ))}
        </div>
        <button className="px-6 py-3 mb-3 font-bold rounded-lg bg-primary">
          Watch Now
        </button>
      </div>
    </div>
  );
}
export default Banner;
