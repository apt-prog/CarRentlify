import React, { useState, useEffect } from "react";
import UserRentedCarData from "../utils/UserRentedCars";
import TopDealsPageCarCard from "../components/TopDeals/CarCard";

const YourRentalsPage = ({ theme }) => {
  const [carData, setCarData] = useState([]);

  const FetchData = async () => {
    const response = await UserRentedCarData();
    if (response.status === 200) {
      setCarData(response.data);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div
      className={`min-h-screen px-3 md:px-5 pt-20 py-8 ${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full">
        {carData.length === 0 ? (
          <div className="flex flex-col justify-center items-center min-h-[60vh] text-center">
            <p className="Popins text-lg md:text-xl">
              You Are Not Rented Any Car,
              <br /> Choose Your Car According Your Type And Book It Now.
            </p>
          </div>
        ) : (
          <div className="Cards flex flex-wrap justify-center gap-5 pb-8">
            {carData.map((car, index) => (
              <TopDealsPageCarCard key={index} car={car} theme={theme} value={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourRentalsPage;
