import { IoPlayCircle } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

import MovieActions from "../components/MovieActions";
import { getYear } from "../utils/helpers";

const Movie = ({ ...movie }) => {
  return (
    <article className="group relative h-80 w-full overflow-hidden">
      <div
        className={`absolute inset-0 z-30 h-full w-full  translate-y-full bg-black/80  text-sm opacity-0 transition-all`}
      >
        <p className="absolute bottom-2 px-2  text-white">{movie.overview}</p>
      </div>
      <div className="absolute inset-0  h-full w-full bg-black/15 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
        <button className="heading-xs absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white/30 px-4 py-2 text-white">
          <IoPlayCircle className="text-4xl text-white" />
          Play
        </button>
      </div>

      <div
        className="absolute inset-0 -z-10 h-full w-full"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute bottom-4 left-4">
        <ul className="flex items-center gap-4 text-white">
          <li className="movie-info">
            <MdDateRange />
            {getYear(movie?.release_date) || getYear(movie?.first_air_date)}
          </li>
          <li className="movie-info">
            <MdLocalMovies />
            {movie?.media_type}
          </li>
          <li className="movie-info">
            <FaStar className="text-yellow-400" />
            {movie?.vote_average.toFixed(1)}
          </li>
        </ul>
        <h3 className="heading-s text-white">{movie?.title || movie?.name}</h3>
      </div>
      <MovieActions />
    </article>
  );
};

export default Movie;
