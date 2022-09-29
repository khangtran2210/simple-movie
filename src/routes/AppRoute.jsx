// import Banner from "components/banner/Banner";
import Main from "components/layout/Main";
// import HomePage from "pages/HomePage";
// import MovieDetailPage from "pages/MovieDetailPage";
// import MoviePage from "pages/MoviePage";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

const LazyBanner = React.lazy(() => import("components/banner/Banner"));
const LazyHomePage = React.lazy(() => import("pages/HomePage"));
const LazyMovieDetailPage = React.lazy(() => import("pages/MovieDetailPage"));
const LazyMoviePage = React.lazy(() => import("pages/MoviePage"));
const AppRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <React.Suspense fallback="Loading...">
                  <LazyBanner></LazyBanner>
                  <LazyHomePage></LazyHomePage>
                </React.Suspense>
              </>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <React.Suspense fallback="Loading...">
                <LazyMoviePage></LazyMoviePage>
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/movies/:movieId"
            element={
              <React.Suspense fallback="Loading...">
                <LazyMovieDetailPage></LazyMovieDetailPage>
              </React.Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default AppRoute;
