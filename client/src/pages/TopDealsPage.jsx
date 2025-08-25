import React, { useState, useEffect } from "react";
import TopDealsPageCarCard from "../components/TopDeals/CarCard";
import CarsDataFetchFromServer from "../utils/CarsDataFetchFromServer";

const TopDealsPage = ({ theme }) => {
  const ThemeSet = theme;

  const [carsData, setCarsData] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Helper to safely get numeric price
  const getPrice = (price) =>
    typeof price === "string"
      ? parseInt(price.replace(/[^\d]/g, ""), 10)
      : Number(price);

  // Fetch car data once
  useEffect(() => {
    const CarsDataFetch = async () => {
      const response = await CarsDataFetchFromServer();
      if (response?.data?.length > 0) {
        setCarsData(response.data);
        setFilteredCars(response.data);

        // Setup price range
        const prices = response.data.map((car) => getPrice(car.price));
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        setMinPrice(min);
        setMaxPrice(max);
        setPriceRange([min, max]);
      }
    };
    CarsDataFetch();
  }, []);

  // Filter logic
  useEffect(() => {
    const filtered = carsData.filter((car) => {
      const price = getPrice(car?.price);
      const matchesSearch = car?.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

      const carType =
        car?.type?.toLowerCase() || car?.category?.toLowerCase() || "";
      const matchesCategory =
        selectedType === "all" ? true : carType === selectedType.toLowerCase();

      const rating = parseFloat(car?.rating || 0);
      const matchesRating =
        selectedRating === "all" ? true : rating >= parseFloat(selectedRating);

      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesRating && matchesPrice;
    });

    setFilteredCars(filtered);
  }, [searchQuery, selectedRating, selectedType, priceRange, carsData]);

  return (
    <div
      className={`min-h-screen px-3 md:px-5 pt-20 py-8 ${
        ThemeSet === "dark" ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        <div
          className={`md:w-[26%] w-full h-fit md:sticky md:top-20 border-blue-600 border-2 text-white rounded-xl px-4 py-5 z-10 ${
            ThemeSet === "dark" ? "bg-blue-900" : "bg-blue-600"
          }`}
        >
          <h1 className="Exo text-xl">Filter By The Different Categories.</h1>

          {/* Rating */}
          <label htmlFor="Rating" className="mt-10 inline-block Exo">
            Filter By The Ratings:
          </label>
          <select
            id="Rating"
            className={`Exo w-full rounded-md border-none text-blue-600 mt-2 ${
              ThemeSet === "dark" ? "bg-black" : "bg-gray-50"
            }`}
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="all">-- Select All --</option>
            <option value="5">5.00</option>
            <option value="4">4.00 Or Above</option>
            <option value="3">3.00 Or Above</option>
            <option value="2">2.00 Or Above</option>
          </select>

          {/* Car Type */}
          <label htmlFor="CarTypes" className="mt-6 inline-block Exo">
            Filter By The CarTypes:
          </label>
          <select
            id="CarTypes"
            className={`Exo w-full rounded-md border-none text-blue-600 mt-2 ${
              ThemeSet === "dark" ? "bg-black" : "bg-gray-50"
            }`}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">-- Select All --</option>
            <option value="sadan">Sadan Cars</option>
            <option value="ev">EV Cars</option>
            <option value="cope">Cope Cars</option>
            <option value="suv">SUV Cars</option>
            <option value="super">Super Cars</option>
            <option value="hyper">Hyper Cars</option>
          </select>

          {/* Price Range */}
          <label className="mt-10 inline-block Exo">
            Filter By The Car Prices:
          </label>
          <div className="relative mb-6">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                ThemeSet === "dark" ? "bg-black" : "bg-white"
              }`}
            />
            <span className="text-sm Exo text-gray-100">Min: ₹{minPrice}</span>
            <span className="text-sm Exo text-gray-100 float-right">
              Max: ₹{priceRange[1]}
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:flex-1 w-full mt-2 md:mt-0 RightSide">
          {/* Search Bar */}
          <form className="w-full mb-6 Exo">
            <label htmlFor="default-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`block w-full p-4 ps-10 text-sm border-2 border-blue-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  ThemeSet === "dark"
                    ? "bg-black text-white"
                    : "bg-gray-50 text-black"
                }`}
                placeholder="Search by car name..."
              />
              <button
                type="button"
                onClick={() => setSearchQuery(searchQuery.trim())}
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>

          {/* Car Cards */}
          <div className="Cards flex flex-wrap justify-center gap-5 pb-8">
            {filteredCars.length > 0 ? (
              filteredCars.map((car, index) => (
                <TopDealsPageCarCard key={index} car={car} theme={theme} />
              ))
            ) : (
              <p className="text-gray-500 mt-4">No cars found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDealsPage;
