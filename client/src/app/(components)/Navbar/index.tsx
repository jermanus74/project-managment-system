import React from "react";
import { Search, Settings } from "lucide-react"; // Adjust the path based on the actual location of the Search component
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black dark:px-4 dark:py-3">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute top-1/2 left-[4px] mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
      {/* icons */}

      <div className="flex items-center">
        <Link
          href="/settings"
          className="flex h-min w-min items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Settings className="h-6 w-6 text-gray-700 dark:text-white" />
        </Link>
        <div className="w-[0. mr-5 ml-2 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
