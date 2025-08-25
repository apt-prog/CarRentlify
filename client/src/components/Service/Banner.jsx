import React from "react";
import { CheckCircle } from "lucide-react";

const ServicesPageBannerSection = (theme) => {
  const rentServices = [
    "Daily Rentals",
    "Luxury Cars",
    "Affordable Prices",
    "Easy Booking",
    "Perfect Test Match",
    "Quality Provide",
    "Best Collections",
    "24/7 Customer Support",
    "Flexible Cancellation",
    "Wide Range of Vehicles",
    "Real-Time Tracking",
    "Instant Booking Confirmation",
    "Clean & Sanitized Vehicles",
  ];

  const earnServices = [
    "List Your Vehicle",
    "Earn Daily",
    "Zero Commission",
    "Trusted Brand",
    "Instant Payment Payouts",
    "Easy Onboarding Process",
    "Track Earnings in Real-Time",
    "Support for Vehicle Maintenance",
    "No Hidden Charges",
    "Flexible Rental Scheduling",
    "Promote Your Vehicle Locally",
    "Join a Growing Network",
    "Build a Passive Income Stream",
  ];

  const ThemeSet = theme.theme;

  return (
    <div
      className="relative w-full flex items-center justify-center px-4 md:px-10 py-10"
      style={{
        backgroundImage:
          "url(https://www.hdwallpapers.in/download/man_is_standing_near_car_during_sunset_4k_hd_vaporwave-2560x1440.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-[-1]" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-6 items-start">
        <div
          className={`rounded-xl p-6 w-full md:w-1/2 text-left shadow-lg ${
            ThemeSet === "dark"
              ? "bg-black text-white border border-blue-700"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 Exo">
            Rent a Car – Fast & Easy
          </h2>
          <p className="mb-4 Popins">
            We provide top-notch car rental services to make your journey smooth
            and stress-free.
          </p>
          <ul className="space-y-2 Popins">
            {rentServices.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`rounded-xl p-6 w-full md:w-1/2 text-left shadow-lg ${
            ThemeSet === "dark"
              ? "bg-black text-white border border-blue-700"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 Exo">
            Earn with FV-Rentlify
          </h2>
          <p className="mb-4 Popins">
            Join our partner program and start earning by renting out your
            vehicle.
          </p>
          <ul className="space-y-2 Popins">
            {earnServices.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageBannerSection;
