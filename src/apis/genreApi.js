import axiosClient from "./apiClient";

class GenreApi {
  getGenres = (params) => {
    const url = `/genre/movie/list`;
    return axiosClient.get(url, { params });
  };
}

const genreApi = new GenreApi();
export default genreApi;
