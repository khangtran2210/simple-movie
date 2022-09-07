import Card from "components/movie/Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUpcomingMovies } from "redux/slice/movieAPISlice";

const MoviePage = () => {
  const data = useSelector((state) => state.movieAPI.upcoming_movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);
  const movies = data || [];
  return (
    <div className="p-10 text-white page-container">
      <div className="flex justify-center mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-3 rounded-lg outline-none bg-slate-800"
            placeholder="Search movie you need..."
          />
        </div>
        <button className="p-3 ml-2 rounded-lg bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => <Card item={item} key={Math.random()}></Card>)}
      </div>
    </div>
  );
};

export default MoviePage;
