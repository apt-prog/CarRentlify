import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://wallpaperbat.com/img/591233-muscle-cars-hd-wallpaper-best-muscle-cars-car-hd-classic-cars-muscle.jpg",
    heading: "Your Journey Starts with the Right Car, Right Here",
    text: "Explore a wide selection of modern, fully equipped vehicles built to make your journey as exciting as the destination.",
  },
  {
    image: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg",
    heading: "Drive the Experience, Not Just the Car You Choose",
    text: "Experience comfort, performance, and freedom with every mile—rent the car that fits your lifestyle, not just your trip.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    heading: "Rent. Ride. Repeat. Your Trusted Wheels Await",
    text: "Book from a wide range of cars—from economy to luxury—backed by 24/7 support and hassle-free booking.",
  },
  {
    image:
      "https://www.pixelstalk.net/wp-content/uploads/images6/Cars-Desktop-Wallpaper.jpg",
    heading: "Turn the Key to Explore New Roads with Confidence",
    text: "Whether it’s a weekend escape or a business trip, our flexible rentals and reliable vehicles make every journey easy.",
  },
  {
    image:
      "https://4kwallpapers.com/images/wallpapers/mclaren-senna-sports-cars-racing-car-race-track-5k-1920x1200-6749.jpg",
    heading: "Drive More, Worry Less with Fully Insured Rentals",
    text: "Enjoy complete peace of mind with full insurance coverage, roadside assistance, and well-maintained vehicles.",
  },
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/05-2013/car%20wallpaper.jpg",
    heading: "Hit the Road with Confidence",
    text: "From pickup to drop-off, our cars are ready for the road—giving you the freedom to go wherever life takes you.",
  },
];

const HomePageHeroSection = (theme) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen h-[100vh] overflow-hidden isolate">
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
              <div className="text-center text-white px-4">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 Exo">
                  {slide.heading}
                </h1>
                <p className="text-sm md:text-1xl max-w-2xl mx-auto Popins font-medium">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageHeroSection;
