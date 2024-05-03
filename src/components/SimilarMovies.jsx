import { useState, useEffect } from "react";
import axiosInstance from "../services/axios";

import { Link } from "react-router-dom";

const SimilarMovies = ({ id }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getSimilarMovies = async function () {
      try {
        const data = await axiosInstance.get(`/movie/${id}/similar`);
        setSimilarMovies(data?.data?.results);
        console.log(data?.data?.results);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    getSimilarMovies();
  }, [id]);

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="heading-m relative mb-4 text-white md:heading-l max-md:text-center">
          Similar Movies
        </h2>
        <div className="grid grid-cols-1 gap-4 max-lg:text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {similarMovies?.map((movie) => (
            <Link to={`/${movie.id}`} key={movie.id}>
              <img
                className="block h-80 w-60 max-md:mx-auto"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="mt-2 text-white">{movie.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarMovies;
