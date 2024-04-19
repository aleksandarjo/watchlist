import { useState, useEffect } from "react";

import axiosInstance from "../services/axios";

import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

import { getYear } from "../utils/helpers";
import Button from "../ui/Button";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMoviesDetails] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getMovieDetails = async function () {
      try {
        const data = await axiosInstance.get(`/movie/${id}`);
        setMoviesDetails(data?.data);
        console.log(data?.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieDetails();
  }, [id]);

  useEffect(() => {
    const getSimilarMovies = async function () {
      try {
        const data = await axiosInstance.get(`/movie/${id}/similar`);
        setSimilarMovies(data?.data);
        console.log(data?.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSimilarMovies();
  }, [id]);

  return (
    <section className="relative w-full py-40">
      <div
        className="absolute inset-0 -z-10 h-full w-full opacity-15"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container z-10">
        <div className="grid grid-cols-[15rem_1fr] gap-10">
          <img
            className="h-80 w-60"
            src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
            alt=""
          />
          <div className="flex flex-col items-start justify-center text-white">
            <h1 className="heading-l relative mb-4 before:absolute before:-bottom-2 before:h-[3px] before:w-full before:bg-red">
              {movieDetails.title}
            </h1>
            <ul className="mb-2 flex items-center gap-3">
              <li className="flex items-center gap-1">
                <FaRegClock /> {movieDetails?.runtime}min
              </li>
              <li className="flex items-center gap-1">
                <MdDateRange /> {getYear(movieDetails?.release_date)}
              </li>
              <li className="flex items-center gap-1">
                <FaStar /> {movieDetails?.vote_average?.toFixed(1)}
              </li>
            </ul>
            <ul className="mb-3 flex items-center gap-2">
              {movieDetails?.genres?.map((genre) => (
                <li className="font-lg font-light italic" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
            <p className="body-m">{movieDetails?.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
