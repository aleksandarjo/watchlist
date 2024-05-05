import { useState, useEffect } from "react";
import axiosInstance from "../services/axios";
import Movie from "./Movie";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

{
  /* https://img.youtube.com/vi/%7BKEY%7D/mqdefault.jpg */
}
{
  /* https://www.youtube.com/watch?v={VIDEO_KEY} */
}

const WatchTrailers = ({ id }) => {
  const [movieTrailers, setMovieTrailers] = useState([]);
  useEffect(() => {
    const getMovieTrailers = async function () {
      try {
        const { data } = await axiosInstance.get(`/movie/${id}/videos`);
        setMovieTrailers(data?.results);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        //
      }
    };
    getMovieTrailers();
  }, [id]);

  return (
    <section className="container py-28">
      <h2 className="heading-l mb-10 text-white">Official Videos</h2>

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
      >
        {movieTrailers?.map((movie, index) => (
          <SwiperSlide key={`${movie.id}-${index}`}>
            <Movie isTrailer {...movie} ytKey={movie?.key} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WatchTrailers;
