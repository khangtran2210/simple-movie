import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="mb-10 movie-layouts page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Now playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="mb-10 movie-layouts page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Top Rated Movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movie-layouts page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Trending Movies
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
