import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axiosInstance from "../services/axios";

import Movie from "./Movie";
import Search from "./Search";
import Sidebar from "./Sidebar";

// todo slider custom hook ✅
// todo reusable custom hook for api call (DRY)
// todo watch trailer everywhere including official trailers section on details page
// todo remember on which page you was, which slide, and save that in local storage, call it on mount
// todo reusable hook useLocalStorage

const AppLayout = () => {
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    const getDataBySearch = async () => {
      try {
        const { data } = await axiosInstance.get(
          `https://api.themoviedb.org/3/search/multi`,
          {
            params: {
              query,
            },
          },
        );

        setSearchedMovies(data?.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (query.length === 0) {
      setSearchedMovies([]);
    }

    const timeoutId = setTimeout(() => {
      if (query && query.length >= 3) {
        getDataBySearch();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <div className="min-h-dvh grid-rows-[auto_2rem_1fr] lg:grid lg:grid-cols-[6rem_1fr] lg:grid-rows-1">
      <Sidebar />
      <main className="grid px-5 lg:grid-rows-[8.5rem_1fr]">
        <Search query={query} setQuery={setQuery} />

        {searchedMovies && searchedMovies.length > 0 ? (
          <div>
            <h2 className="mb-5 text-[1.25rem] text-white md:heading-l lg:mb-12">
              Found {searchedMovies?.length} results for &quot;{query}&quot;
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {searchedMovies?.map((movie) => (
                <Movie key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default AppLayout;
