import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailHero from "../components/MovieDetailHero";
import SimilarMovies from "../components/SimilarMovies";

// import { disablePageScroll, enablePageScroll } from "scroll-lock";

const MovieDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // isLoading ? disablePageScroll() : enablePageScroll();

  return (
    <>
      <MovieDetailHero onLoading={setIsLoading} id={id} />
      <SimilarMovies onLoading={setIsLoading} id={id} />
    </>
  );
};

export default MovieDetail;
