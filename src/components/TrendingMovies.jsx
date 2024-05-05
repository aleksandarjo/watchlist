import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../services/axios";
import Movie from "../components/Movie";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Heading from "../ui/Heading";
import Loader from "./Loader";
import { useSlider } from "../hooks/useSlider";

const TrendingMovies = () => {
  const [trendingMovies, isLoading, fetchData] = useSlider(
    `/trending/all/week`,
    handleSlideChange,
  );

  function handleSlideChange(swiper) {
    if (swiper && swiper.activeIndex >= swiper.slides.length - 5) {
      fetchData();
    }
  }

  return (
    <section className="overflow-hidden">
      <Heading title="Trending" />
      {isLoading && <Loader />}
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
        {trendingMovies?.map((movie, index) => (
          <SwiperSlide key={`${movie.id}-${index}`}>
            <Movie {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingMovies;
