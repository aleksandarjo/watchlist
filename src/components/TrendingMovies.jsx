import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../services/axios";
import Movie from "../components/Movie";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(2);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get(
        `/trending/all/week?page=${page}&language=en-US`,
      );
      setTrendingMovies((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.log(error.message);
    }

    setPage((prevPage) => prevPage + 1);
  }, [page]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/trending/all/week?page=1&language=en-US`,
        );
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrendingMovies();
  }, []);

  const handleSlideChange = (swiper) => {
    console.log(swiper.activeIndex, swiper.slides.length);
    if (swiper.activeIndex === swiper.slides.length - 5) {
      fetchData();
    }
  };

  return (
    <section className="overflow-hidden">
      <h2 className="mb-8 text-xl text-white lg:heading-l sm:text-2xl">
        Trending
      </h2>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
          },
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {trendingMovies.map((movie, index) => (
          <SwiperSlide key={`${movie.id}-${index}`}>
            <Movie {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingMovies;
