import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="relative w-full h-full rounded-lg">
          <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.7)] rounded-lg"></div>
          <img
            src="https://pbs.twimg.com/media/FZnRgzlaUAESmCe?format=jpg&name=4096x4096"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-full text-white content left-5 bottom-5">
            <h2 className="mb-3 text-2xl font-bold">
              Spider-Man: Far From Home
            </h2>
            <div className="flex items-center mb-8 gap-x-3">
              <span className="px-4 py-1 border border-white rounded-md cursor-pointer">
                Action
              </span>
              <span className="px-4 py-1 border border-white rounded-md cursor-pointer">
                Adventure
              </span>
              <span className="px-4 py-1 border border-white rounded-md cursor-pointer">
                Demo
              </span>
            </div>
            <button className="px-6 py-3 mb-3 font-medium rounded-lg bg-primary">
              Watch Now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
