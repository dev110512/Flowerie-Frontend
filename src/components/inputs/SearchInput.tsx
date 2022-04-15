import type { FC } from "react";

const SearchInput: FC = (): JSX.Element => {
  return (
    <div
      className="
    w-2/5
    xs:w-full 
    sm:w-4/5 
    md:w-3/5 
    rounded-full
    font-semibold 
    px-4
    xs:px-2 
    py-2 
    bg-white 
    text-black 
    mt-12 
    flex 
    items-center 
    justify-between 
    shadow-md 
    xs:mx-4
    "
    >
      <input
        type="text"
        placeholder="Want to start your journey?"
        className="w-full font-light xs:text-sm  md:text-lg text-2xl pl-6 sm:pl-4 xs:pl-2 mr-2 focus:border-0 focus:outline-none"
      />
      <button className="bg-light-maroon text-white font-semibold text-lg rounded-full px-4 sm:px-2 py-2 sm:py-1 hover:bg-light-maroon-dark transition-colors duration-300">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
