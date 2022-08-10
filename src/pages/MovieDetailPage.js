import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";

// APIKey:
const MovieDetailPage = () => {
  const { movieId } = useParams();
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=601b1d584d814eecc70ce80f523117ad`;
  const { data } = useSWR(endpoint, fetcher);
  if (!data) return null;
  console.log(data);
  const { title, backdrop_path, poster_path, genres, overview } = data;

  return (
    <div>
      <div className="w-full h-[600px] relative ">
        <div className="absolute inset-0 bg-black bg-opacity-40 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgb(0,0,0)]"></div>

        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt=""
          className="object-cover w-full h-full "
        />
      </div>
      <div className="w-[400px] h-[600px] -mt-[300px] mx-auto relative z-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center page-container">
        <h1 className="mt-10 mb-10 text-5xl font-bold text-white">{title}</h1>
        <div className="flex justify-center w-[968px] mb-12">
          {genres.map((item) => {
            return (
              <div
                className="px-8 py-2 font-semibold bg-transparent border-2 text-primary border-primary mx-7 rounded-3xl"
                key={Math.random()}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center text-center text-xl text-white w-[968px] opacity-90 mb-5">
          {overview}
        </div>
        <h2 className="mt-10 mb-10 text-[40px] font-bold text-white">Casts</h2>
        <MovieCast></MovieCast>
        <h2 className="mt-10 mb-10 text-[40px] font-bold text-white">
          Trailers
        </h2>
        <MovieVideo></MovieVideo>
        <h2 className="mt-10 mb-10 text-[40px] font-bold text-white">
          Similar Movies
        </h2>
        <SimilarMovie></SimilarMovie>
      </div>
    </div>
  );
};
function MovieCast() {
  const { movieId } = useParams();
  const endpoint = `http://api.themoviedb.org/3/movie/${movieId}/casts?api_key=601b1d584d814eecc70ce80f523117ad`;
  const { data } = useSWR(endpoint, fetcher);
  if (!data) return null;
  const { cast } = data;
  return (
    <div className="grid grid-cols-4 gap-10 mb-20 text-white select-none">
      {cast.slice(0, 4).map((item) => {
        return (
          <div className="" key={Math.random()}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt=""
              className="h-[350px] w-full rounded-lg mb-5"
            />
            <div className="text-xl font-medium text-center name">
              {item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MovieVideo() {
  const { movieId } = useParams();
  const endpoint = `
  https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=601b1d584d814eecc70ce80f523117ad`;
  const { data } = useSWR(endpoint, fetcher);
  if (!data) return null;
  console.log(data);
  const trailers = data?.results;
  return (
    <div>
      {trailers.length >= 3 &&
        trailers
          .slice(0, 3)
          .map((item) => (
            <iframe
              width="896"
              height="504"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="mb-10"
              key={Math.random()}
              allowfullscreen
            ></iframe>
          ))}
    </div>
  );
}

function SimilarMovie() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const endpoint = `http://api.themoviedb.org/3/movie/${movieId}/similar?api_key=601b1d584d814eecc70ce80f523117ad`;
  const { data } = useSWR(endpoint, fetcher);
  if (!data) return null;
  const results = data?.results;
  return (
    <div className="grid grid-cols-5 gap-10 mb-20 text-white select-none">
      {results.slice(0, 5).map((item) => {
        return (
          <div className="" key={Math.random()}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt=""
              className="h-[350px] w-full rounded-lg mb-5"
            />
            <div
              className="text-xl font-medium text-center cursor-pointer name"
              onClick={() => {
                navigate(`/movies/${item.id}`);
              }}
            >
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MovieDetailPage;
