import React from "react";
import { Link } from "react-router-dom";

const ServicesPageTextsSection = (theme) => {
  const ThemeSet = theme.theme;
  return (
    <>
      <div className={`pt-4 pb-15 ${ThemeSet === 'dark' ? "bg-zinc-900" : "bg-white"}`}> 
        <h1 className="Exo text-blue-600 md:text-3xl text-2xl text-center mt-10 mb-5">
          Start Your Journy Now With <br />
          FV-Rentlify .
        </h1>
        <Link
          to="/topdeals"
          className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 flex Exo m-auto"
        >
          <span>View Our Deals</span>
        </Link>
      </div>
    </>
  );
};

export default ServicesPageTextsSection;
