import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailHero from "../components/MovieDetailHero";
import SimilarMovies from "../components/SimilarMovies";
import WatchTrailers from "../components/WatchTrailers";

const MovieDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MovieDetailHero id={id} />
      <WatchTrailers id={id} />
      {/* <SimilarMovies id={id} /> */}
    </>
  );
};

export default MovieDetail;
