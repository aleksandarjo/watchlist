import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <form className="flex items-center justify-start gap-6 px-5 py-10 lg:py-0">
      <LuSearch className="text-[2rem] text-white" />
      <input
        className="w-full bg-transparent text-lg text-white caret-red lg:heading-m selection:bg-red placeholder:text-white/50 focus:outline-none lg:border-b lg:border-b-transparent lg:pb-2 lg:focus:border-white "
        type="text"
        placeholder="Search for movies or TV series"
      />
    </form>
  );
};

export default Search;
