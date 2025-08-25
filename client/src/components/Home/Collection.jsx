import React from "react";
import { Link } from "react-router-dom";

const HomePageCollectionSection = (theme) => {
  const ThemeSet = theme.theme;
  return (
    <>
      <section
        className={`text-gray-600 body-font ${
          ThemeSet === "dark" ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="container px-5 pt-24 pb-4 mx-auto flex flex-wrap">
          <div className="mb-20 text-center m-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-700 Exo text-center mb-2">
              Our Small Gallery Tour.
            </h1>
            <p
              className={`m-auto w-full leading-relaxed text-center Popins ${
                ThemeSet === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              Discover our fleet and take a glimpse at the journeys we power —
              one ride at a time.
            </p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-1"
                  className="w-full object-cover h-full object-center block"
                  src="https://wallpapers.com/images/featured/full-hd-car-cpncxfsj9u9zu14k.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-2"
                  className="w-full object-cover h-full object-center block"
                  src="https://wallpaperbat.com/img/591233-muscle-cars-hd-wallpaper-best-muscle-cars-car-hd-classic-cars-muscle.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="car-gallery-3"
                  className="w-full h-full object-cover object-center block"
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?fm=jpg&q=60&w=3000"
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="car-gallery-4"
                  className="w-full h-full object-cover object-center block"
                  src="https://www.pixelstalk.net/wp-content/uploads/images6/Cars-Desktop-Wallpaper.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-5"
                  className="w-full object-cover h-full object-center block"
                  src="https://cdn.wallpapersafari.com/99/40/n4mQt2.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-6"
                  className="w-full object-cover h-full object-center block"
                  src="https://webneel.com/wallpaper/sites/default/files/images/05-2013/car%20wallpaper.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`text-gray-600 body-font ${
          ThemeSet === "dark" ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="container px-5 pb-4 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-10"
                  className="w-full object-cover h-full object-center block"
                  src="https://wallpapers.com/images/featured/full-hd-car-cpncxfsj9u9zu14k.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-11"
                  className="w-full object-cover h-full object-center block"
                  src="https://wallpaperbat.com/img/591233-muscle-cars-hd-wallpaper-best-muscle-cars-car-hd-classic-cars-muscle.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="car-gallery-12"
                  className="w-full h-full object-cover object-center block"
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?fm=jpg&q=60&w=3000"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="car-gallery-7"
                  className="w-full h-full object-cover object-center block"
                  src="https://www.pixelstalk.net/wp-content/uploads/images6/Cars-Desktop-Wallpaper.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-8"
                  className="w-full object-cover h-full object-center block"
                  src="https://cdn.wallpapersafari.com/99/40/n4mQt2.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-9"
                  className="w-full object-cover h-full object-center block"
                  src="https://webneel.com/wallpaper/sites/default/files/images/05-2013/car%20wallpaper.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`text-gray-600 body-font ${
          ThemeSet === "dark" ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="container px-5 mx-auto pb-0 flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="car-gallery-7"
                  className="w-full h-full object-cover object-center block"
                  src="https://www.pixelstalk.net/wp-content/uploads/images6/Cars-Desktop-Wallpaper.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-8"
                  className="w-full object-cover h-full object-center block"
                  src="https://cdn.wallpapersafari.com/99/40/n4mQt2.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-9"
                  className="w-full object-cover h-full object-center block"
                  src="https://webneel.com/wallpaper/sites/default/files/images/05-2013/car%20wallpaper.jpg"
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-10"
                  className="w-full object-cover h-full object-center block"
                  src="https://wallpapers.com/images/featured/full-hd-car-cpncxfsj9u9zu14k.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="car-gallery-11"
                  className="w-full object-cover h-full object-center block"
                  src="https://wallpaperbat.com/img/591233-muscle-cars-hd-wallpaper-best-muscle-cars-car-hd-classic-cars-muscle.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="car-gallery-12"
                  className="w-full h-full object-cover object-center block"
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?fm=jpg&q=60&w=3000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`text-gray-600 body-font md:pb-5 pb-5 px-4 ${
          ThemeSet === "dark" ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="mx-auto w-full max-w-screen-md py-5 text-center">
          <Link
            to="/topdeals"
            className="inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mt-6 Exo transition-all duration-300"
          >
            <span className="me-2">Book Your Ride Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play-icon lucide-play"
            >
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
            <span className="ms-2">With FV-Rentlify</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePageCollectionSection;
