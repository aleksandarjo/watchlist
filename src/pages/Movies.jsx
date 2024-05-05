import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import axiosInstance from "../services/axios";
import Heading from "../ui/Heading";
import Movie from "../components/Movie";
import Loader from "../components/Loader";

import LazyLoad from "react-lazy-load";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const [isFetching, setIsFetching] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1399) {
      setIsMobileDevice(true);
    } else {
      setIsMobileDevice(false);
    }
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axiosInstance.get(
          `https://api.themoviedb.org/3/trending/movie/day`,
        );
        setMovies(data?.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, []);

  const fetchData = useCallback(async () => {
    if (!isFetching) {
      setIsFetching(true);
      try {
        const { data } = await axiosInstance.get(
          `https://api.themoviedb.org/3/trending/movie/day?page=${page}`,
        );
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsFetching(false);
      }
    }
  }, [isFetching, page]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section className="overflow-hidden">
      <Heading title="Movies" />
      <InfiniteScroll
        refreshFunction={handleRefresh}
        pullDownToRefresh={isMobileDevice}
        pullDownToRefreshThreshold={150}
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 xl:grid-cols-4"
        dataLength={movies.length}
        next={fetchData}
        hasMore={true}
        loader={<Loader />}
      >
        {movies.map((movie, index) => (
          <LazyLoad
            key={`${movie.id}-${index}`}
            width={"auto"}
            threshold={0.95}
          >
            <Movie {...movie} />
          </LazyLoad>
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default Movies;
