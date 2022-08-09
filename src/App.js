import { Fragment } from "react";
import Banner from "./component/banner/Banner";
// import { NavLink } from "react-router-dom";
import MovieList from "./component/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
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
}

export default App;
