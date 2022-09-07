import { API_KEY } from "config/config";
import React, { useEffect, useState } from "react";
import movieApi from "./movieApi";

const testAPI = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const params = { _api_key: API_KEY };
        const resp = await movieApi.getPopular(params);
        console.log("🚀 ~ fetchMovie ~ resp", resp);
        setProduct(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  return <div>Hello Test API</div>;
};

export default testAPI;
