import { useState, useEffect } from "react";

import { FaStar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import { getYear } from "../utils/helpers";
import LinkButton from "../ui/LinkButton";

import axiosInstance from "../services/axios";

const MovieDetailHero = ({ id }) => {
  const [movieDetails, setMoviesDetails] = useState([]);

  useEffect(() => {
    const getMovieDetails = async function () {
      try {
        const data = await axiosInstance.get(
          `/movie/${id}?language=en-EN&page=1`,
        );
        setMoviesDetails(data?.data);
        console.log(data?.data);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    getMovieDetails();
  }, [id]);

  return (
    <section className="relative w-full py-20 max-md:text-center lg:py-40">
      <LinkButton>
        <IoMdArrowRoundBack className="absolute left-4 top-4 rounded-full bg-red/90 text-3xl text-white" />
      </LinkButton>
      <div
        className="absolute inset-0 -z-10 h-full w-full opacity-15 "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container z-10 ">
        <div className="grid gap-10 lg:grid-cols-[15rem_1fr]">
          <img
            className="block h-80 w-60 max-md:mx-auto"
            src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
            alt=""
          />
          <div className="flex flex-col items-start justify-center text-white">
            <h1 className="heading-m relative mb-4 md:heading-l before:absolute before:-bottom-2 before:h-[3px] before:w-full before:bg-red max-md:mx-auto">
              {movieDetails.title}
            </h1>
            <ul className="mb-2 flex w-full items-center gap-3 max-md:justify-center">
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
            <ul className="mb-3 flex w-full flex-wrap items-center gap-2 max-md:justify-center">
              {movieDetails?.genres?.map((genre, i) => (
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

export default MovieDetailHero;
