import React from "react";

const HomePageAboutSection = (theme) => {
  const ThemeSet = theme.theme;
  return (
    <>
      <section
        className={`body-font ${ThemeSet === "dark" ? "bg-zinc-900" : ""}`}
      >
        <div className="container px-5 py-24 mx-auto sca">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-700 Exo">
              About US
            </h1>
            <p
              className={`lg:w-1/2 w-full leading-relaxed Popins ${
                ThemeSet === "dark" ? "text-white " : "text-zinc-500"
              }`}
            >
              We’re in the freedom business—helping you explore more and stress
              less. Trusted, simple, and accessible car rentals for every
              journey.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div
                className={`border p-6 rounded-lg hover:scale-105 duration-300 ${
                  ThemeSet === "dark"
                    ? "border-blue-900 hover:shadow-[0_0_1rem_rgba(59,130,246,1)]"
                    : "border-gray-200 hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]"
                }`}
              >
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-700 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font Exo mb-2 text-blue-600">
                  Experience
                </h2>
                <p
                  className={`leading-relaxed Popins text-sm ${
                    ThemeSet === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Enjoy a smooth, premium ride every time with modern,
                  well-maintained cars.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div
                className={`border p-6 rounded-lg hover:scale-105 duration-300 ${
                  ThemeSet === "dark"
                    ? "border-blue-900 hover:shadow-[0_0_1rem_rgba(59,130,246,1)]"
                    : "border-gray-200 hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]"
                }`}
              >
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-700 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m10 20-1.25-2.5L6 18" />
                    <path d="M10 4 8.75 6.5 6 6" />
                    <path d="m14 20 1.25-2.5L18 18" />
                    <path d="m14 4 1.25 2.5L18 6" />
                    <path d="m17 21-3-6h-4" />
                    <path d="m17 3-3 6 1.5 3" />
                    <path d="M2 12h6.5L10 9" />
                    <path d="m20 10-1.5 2 1.5 2" />
                    <path d="M22 12h-6.5L14 15" />
                    <path d="m4 10 1.5 2L4 14" />
                    <path d="m7 21 3-6-1.5-3" />
                    <path d="m7 3 3 6h4" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font Exo mb-2 text-blue-600">
                  Freedom
                </h2>
                <p
                  className={`leading-relaxed Popins text-sm ${
                    ThemeSet === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Drive where you want, when you want—no limits, no hassle.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div
                className={`border p-6 rounded-lg hover:scale-105 duration-300 ${
                  ThemeSet === "dark"
                    ? "border-blue-900 hover:shadow-[0_0_1rem_rgba(59,130,246,1)]"
                    : "border-gray-200 hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]"
                }`}
              >
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-700 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font Exo mb-2 text-blue-600">
                  Innovation
                </h2>
                <p
                  className={`leading-relaxed Popins text-sm ${
                    ThemeSet === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Smart booking, real-time availability, and seamless rental
                  tech at your fingertips.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div
                className={`border p-6 rounded-lg hover:scale-105 duration-300 ${
                  ThemeSet === "dark"
                    ? "border-blue-900 hover:shadow-[0_0_1rem_rgba(59,130,246,1)]"
                    : "border-gray-200 hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]"
                }`}
              >
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-700 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 21a8 8 0 0 0-16 0" />
                    <circle cx="10" cy="8" r="5" />
                    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font Exo mb-2 text-blue-600">
                  Trust
                </h2>
                <p
                  className={`leading-relaxed Popins text-sm ${
                    ThemeSet === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Transparent pricing, reliable service, and full insurance for
                  peace of mind.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div
                className={`border p-6 rounded-lg hover:scale-105 duration-300 ${
                  ThemeSet === "dark"
                    ? "border-blue-900 hover:shadow-[0_0_1rem_rgba(59,130,246,1)]"
                    : "border-gray-200 hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]"
                }`}
              >
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-700 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font Exo mb-2 text-blue-600">
                  Comfort
                </h2>
                <p
                  className={`leading-relaxed Popins text-sm ${
                    ThemeSet === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Every vehicle is chosen for space, luxury, and a better
                  driving feel.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div
                className={`border p-6 rounded-lg hover:scale-105 duration-300 ${
                  ThemeSet === "dark"
                    ? "border-blue-900 hover:shadow-[0_0_1rem_rgba(59,130,246,1)]"
                    : "border-gray-200 hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]"
                }`}
              >
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-700 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font Exo mb-2 text-blue-600">
                  Flexibility
                </h2>
                <p
                  className={`leading-relaxed Popins text-sm ${
                    ThemeSet === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Rent by the day, week, or month—your journey, your terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageAboutSection;
