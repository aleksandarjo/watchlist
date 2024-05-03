import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailHero from "../components/MovieDetailHero";
import SimilarMovies from "../components/SimilarMovies";

const MovieDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MovieDetailHero id={id} />
      <SimilarMovies id={id} />
    </>
  );
};

export default MovieDetail;
