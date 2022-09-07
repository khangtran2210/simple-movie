import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUpcomingMovies } from "redux/slice/movieAPISlice";
import { getGenres } from "redux/slice/genreAPISlice";
// API : https://api.themoviedb.org/3/movie/550?api_key=601b1d584d814eecc70ce80f523117ad

const Banner = () => {
  const data = useSelector((state) => state.movieAPI.upcoming_movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getUpcomingMovies());
  }, [dispatch]);
  const movies = data || [];

  return (
    <section className="h-[40rem] mb-5 banner page-container overflow-hidden rounded-lg">
      <Swiper
        grabCursor={false}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}
      >
        {movies.length > 0 &&
          movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const navigate = useNavigate();
  const { title, backdrop_path, genre_ids, id } = item;
  // Call genres from Global Store
  const genresArray = useSelector((state) => state.genreAPI.genres);

  // Create dispatch

  let genresMatch = [];
  const genresData = genresArray || [];
  //   Loop to get genres object matches genre_ids
  if (genresData.length > 0) {
    genresMatch = genresData.filter((item) => {
      return genre_ids.includes(item.id);
    });
  }

  return (
    <div className="relative w-full h-full ">
      <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.7)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white content left-5 bottom-5">
        <h2
          className="mb-3 text-4xl font-bold cursor-pointer"
          onClick={() => navigate(`/movies/${id}`)}
        >
          {title}
        </h2>
        <div className="flex items-center mb-8 gap-x-3">
          {genresMatch.length > 0 &&
            genresMatch.map((item) => (
              <span
                key={item.id}
                className="px-4 py-1 border border-white rounded-md cursor-pointer"
              >
                {item.name}
              </span>
            ))}
        </div>
        <button
          className="px-6 py-3 mb-3 font-bold rounded-lg bg-primary hover:opacity-80"
          onClick={() => navigate(`/movies/${id}`)}
        >
          Watch Now
        </button>
      </div>
    </div>
  );
}
export default Banner;
