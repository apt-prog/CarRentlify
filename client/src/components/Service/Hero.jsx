import React from "react";
import { Link } from "react-router-dom";

const ServicesPageHeroSection = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1551952237-954a0e68786c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwb24lMjB0aGUlMjByb2FkfGVufDB8fDB8fHww)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content flex items-center text-neutral-content md:px-30 px-5">
        <div className="max-w-xl mt-20 md:mt-30">
          <div className="flex items-center py-2 overflow-x-auto whitespace-nowrap Exo">
            <Link to="/" className="text-gray-600 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>

            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <Link to="/services" className="text-blue-600 hover:text-blue-700">
              Services
            </Link>
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl font-medium Exo leading-tight text-white">
            We Are FV-Rentlify's
          </h1>
          <p className="mb-6 text-base md:text-md text-gray-200 Popins">
            We Provides Many Services So Check It Down ,<br />
            And Start Your Carrer Or Earning Journey With Us.
          </p>
          <Link
            to="/topdeals"
            className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 flex Exo me-5"
          >
            <span>View Our Gallery</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageHeroSection;
