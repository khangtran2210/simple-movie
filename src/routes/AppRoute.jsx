import Banner from "components/banner/Banner";
import Main from "components/layout/Main";
import HomePage from "pages/HomePage";
import MovieDetailPage from "pages/MovieDetailPage";
import MoviePage from "pages/MoviePage";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

const AppRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movies/:movieId"
            element={<MovieDetailPage></MovieDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default AppRoute;
