import { LuSearch } from "react-icons/lu";
import { useRef, useEffect } from "react";

const Search = ({ query, setQuery }) => {
  const searchRef = useRef();
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <form className="flex items-center justify-start gap-6 py-10 lg:py-0">
      <LuSearch className="text-[2rem] text-white" />
      <input
        className="w-custom bg-transparent text-lg text-white caret-red lg:heading-m  placeholder:text-white/50 focus:outline-none lg:border-b lg:border-b-transparent lg:pb-2 lg:focus:border-white "
        type="text"
        placeholder="Search for movies or TV series"
        ref={searchRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
