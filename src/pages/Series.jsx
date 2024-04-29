import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import axiosInstance from "../services/axios";
import Heading from "../ui/Heading";
import Movie from "../components/Movie";
import Loader from "../components/Loader";

const Series = () => {
  const [series, setSeries] = useState([]);
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
    const getSeries = async () => {
      try {
        const { data } = await axiosInstance.get(
          `https://api.themoviedb.org/3/trending/tv/day`,
        );
        setSeries(data?.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSeries();
  }, []);

  const fetchData = useCallback(async () => {
    const abortController = new AbortController();

    if (!isFetching) {
      setIsFetching(true);
      try {
        const { data } = await axiosInstance.get(
          `https://api.themoviedb.org/3/trending/tv/day?page=${page}`,
          { signal: abortController.signal },
        );
        setSeries((prevMovies) => [...prevMovies, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsFetching(false);
      }
    }

    return () => {
      abortController.abort();
    };
  }, [isFetching, page]);

  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <section className="overflow-hidden">
      <Heading title="TV Series" />
      <InfiniteScroll
        refreshFunction={handleRefresh}
        pullDownToRefresh={isMobileDevice}
        pullDownToRefreshThreshold={150}
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 xl:grid-cols-4"
        dataLength={series.length}
        next={fetchData}
        hasMore={true}
        loader={<Loader />}
      >
        {series.map((movie, index) => (
          <Movie key={`${movie.id}-${index}`} {...movie} />
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default Series;
