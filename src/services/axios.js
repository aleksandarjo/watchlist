import axios from "axios";

const API_KEY = "1dfd87fdbfcdf44ed782a896d8e18f44";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGZkODdmZGJmY2RmNDRlZDc4MmE4OTZkOGUxOGY0NCIsInN1YiI6IjY2MTk0NDJiNGRhM2Q0MDE2MjkxYzk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cVBMt0B7CU6519zdKBUyRSOh27pbN4qx4qhvOh3L4U8";
const baseURL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export default axiosInstance;
