import axiosClient from "./apiClient";

class MovieApi {
  getType = (type, params) => {
    const url = `/movie/${type}`;
    return axiosClient.get(url, { params });
  };
  getMovieDetail = (movieId, params) => {
    const url = `/movie/${movieId}`;
    return axiosClient.get(url, { params });
  };
  // type: casts, videos, similar
  getOtherByMovie = (movieId, otherName = "", params) => {
    let url = `/movie/${movieId}`;
    if (otherName !== "") {
      url = `/movie/${movieId}/${otherName}`;
    }
    return axiosClient.get(url, { params });
  };
}

const movieApi = new MovieApi();
export default movieApi;
