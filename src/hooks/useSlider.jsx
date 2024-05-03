import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../services/axios";

export const useSlider = (url, callback) => {
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  callback?.();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get(`${url}?page=${page}`);
      setValue((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.log(error.message);
    }

    setPage((prevPage) => prevPage + 1);
  }, [url, page]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axiosInstance.get(url);
        setValue(data?.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return [value, isLoading, fetchData];
};
