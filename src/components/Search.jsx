import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex items-center border-b border-white pb-1 ">
      <CiSearch className="text-white" />
      <p className="text-white ml-2 text-[16px]">Search something</p>
    </div>
  );
};

export default Search;
