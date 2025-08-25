import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Star, Car } from "lucide-react";
import RentalModal from "../components/RentalOrderModal/Modal";
import { useParams } from "react-router-dom";
import SingleCarDataFetch from "../utils/SingleCarData";

const CarViewPage = ({ theme }) => {
  const { carsId } = useParams();

  const [carObject, setCarObject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const getParticularCarData = async () => {
    try {
      const response = await SingleCarDataFetch({ carsId });
      setCarObject(response);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  useEffect(() => {
    if (carsId) {
      getParticularCarData();
    }
  }, [carsId]);

  const ThemeSet = theme;

  const nextImage = () => {
    if (carObject?.images?.length) {
      setCurrentImage((prev) => (prev + 1) % carObject.images.length);
    }
  };

  const prevImage = () => {
    if (carObject?.images?.length) {
      setCurrentImage(
        (prev) => (prev - 1 + carObject.images.length) % carObject.images.length
      );
    }
  };

  if (!carObject) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          ThemeSet === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"
        }`}
      >
        <p className="text-lg">Loading car details...</p>
      </div>
    );
  }

  return (
    <div
      className={`w-full min-h-screen Exo ${
        ThemeSet === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Image Slider */}
      <div className="relative w-full h-[100vh]">
        <img
          src={carObject.images[currentImage]}
          alt={carObject.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Car Details */}
      <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-12">
        {/* Left Section */}
        <div className="lg:w-[70%] space-y-4">
          <h1 className="text-3xl font-bold text-blue-600">{carObject.name}</h1>
          {carObject.messages?.map((msg, idx) => (
            <p key={idx} className="text-base">
              {msg}
            </p>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <Star className="text-yellow-500" />
            <span className="font-thin Popins">{carObject.rating} / 5</span>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`lg:w-[30%] space-y-4 h-fit p-6 rounded-xl shadow-md ${
            ThemeSet === "dark"
              ? "bg-black text-white"
              : "bg-blue-200 text-black"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">Car Color</span>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: carObject.color }}
              />
              <span>{carObject.color}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Likes</span>
            <div className="flex gap-2 text-red-600 items-center">
              <Heart />
              <span className="Popins font-thin">
                {carObject.likes || 0}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Rent Price / day</span>
            <div className="text-blue-600 font-semibold">
              <span className="Popins font-thin">₹{carObject.price}</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-4 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2"
          >
            <span>Book Now</span>
            <Car />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <RentalModal theme={ThemeSet} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default CarViewPage;
