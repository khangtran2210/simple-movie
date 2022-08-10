import { fetcher } from "../config/config";
import useSWR from "swr";
import Card from "../components/movie/Card";
const MoviePage = () => {
  let endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=601b1d584d814eecc70ce80f523117ad`;

  const { data } = useSWR(endpoint, fetcher);
  const movies = data?.results || [];
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
