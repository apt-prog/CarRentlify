import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TopDealsPageCarCard = ({ car, theme, value }) => {
  const ThemeSet = theme;

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const AddLike = () => {
    console.log("Helo");
  };

  return (
    <div
      className={`w-[450px] shadow-md rounded-2xl p-5 duration-500 ${
        ThemeSet === "dark"
          ? "bg-black hover:shadow-[0_0_1rem_rgba(59,130,246,1)]"
          : "bg-white hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]"
      }`}
    >
      <div className="relative w-full h-80 bg-blue-100 rounded-lg overflow-hidden">
        <img
          src={car.images[current]}
          alt="Car"
          className="w-full h-full object-cover transition-all duration-500"
        />

        {car.book !== null ? (
          <>
            <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
              Booked
            </span>
          </>
        ) : (
          <></>
        )}

        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-blue-600 Exo">
            {car.name}
          </h2>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-5 h-5" />
            <span className="text-sm font-medium Popins">{car.rating}</span>
          </div>
        </div>

        <div
          className={`flex justify-between items-center text-sm ${
            ThemeSet === "dark" ? "text-white" : "text-gray-600"
          }`}
        >
          <span className="font-thin Popins">₹ {car.price}</span>
          <div className="flex items-center gap-4">
            <span className="text-red-500 flex">
              <Heart className="w-5 h-5" />
              <span className="ms-2 Popins">{car.likes || 0}</span>
            </span>
          </div>
        </div>

        {value === true ? (
          ""
        ) : (
          <Link
            to={car.book === null ? `/carview/${car._id}` : "#"}
            onClick={(e) => {
              if (car.book !== null) {
                e.preventDefault(); // stop redirect
                toast.error("This car is already rented", {
                  position: "top-right",
                  autoClose: 3000,
                });
              }
            }}
            className={`w-full mt-2 text-white py-2 rounded-xl text-sm transition flex justify-center items-center ${
              car.book === null
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-900 cursor-not-allowed"
            }`}
          >
            <span className="me-2 text-[17px] Exo">Book Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-car-icon lucide-car"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopDealsPageCarCard;
