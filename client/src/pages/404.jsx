import React from "react";
import { Link } from "react-router-dom";

const AllPagesError404Page = ({ theme }) => {
  return (
    <>
      <main
        className={`flex flex-col justify-center items-center h-[calc(100vh-130px)] md:mb-0 mb-21  px-6 sm:px-8 overflow-hidden ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="text-center mt-25">
          <p className="text-base font-semibold text-blue-600">404</p>
          <h1
            className={`mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-7xl Exo ${
              theme === "dark" ? "text-white" : "text-black "
            }`}
          >
            Page not found
          </h1>
          <p
            className={`mt-4 text-lg font-thin text-pretty Popins sm:text-xl ${
              theme === "dark" ? "text-white" : "text-black "
            }`}
          >
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6 Popins">
            <Link
              to="/"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm text-white shadow-xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-thin"
            >
              Go back home
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-thin ${
                theme === "dark" ? "text-white" : "text-black "
              }`}
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
      <div
        className={`p-7 ${theme === "dark" ? "bg-black" : "bg-white "}`}
      ></div>
    </>
  );
};

export default AllPagesError404Page;
