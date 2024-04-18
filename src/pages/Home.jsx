import { useState, useEffect } from "react";
import axiosInstance from "../services/axios";

import Movie from "../components/Movie";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules

import { Pagination, FreeMode } from "swiper/modules";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async function () {
      try {
        const data = await axiosInstance.get(
          "/trending/all/week?page=1?language=en-US",
        );
        console.log(data.data.results);
        setTrendingMovies(data?.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrendingMovies();
  }, []);

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
            slidesPerGroup: 3,
            spaceBetween: 50,
          },
        }}
      >
        {trendingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
