import React from "react";

const HomePageStepsSections = (theme) => {
  const ThemeSet = theme.theme;
  return (
    <>
      <div className={`${ThemeSet === "dark" ? "bg-black" : "bg-zinc-100"}`}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-25 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-700 Exo text-center mb-2">
            Steps For Rent Your First Car .
          </h1>
          <p
            className={`lg:w-1/2 m-auto w-full leading-relaxed text-center ${
              ThemeSet === "dark" ? "text-white" : "text-gray-500"
            } Popins mb-20`}
          >
            We’re in the freedom business—helping you explore more and stress
            less. Trusted, simple, and accessible car rentals for every journey.
          </p>
          <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div
                      className={`flex items-center justify-center w-10 h-10 border rounded-full ${
                        ThemeSet === "dark" ? "border-white" : "border-black"
                      }`}
                    >
                      <svg
                        className={`w-4 ${
                          ThemeSet === "dark" ? "text-white" : "text-gray-600"
                        }`}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-xl font-bold Exo text-blue-600">
                    Step 1
                  </p>
                  <p
                    className={`Popins font-thin text-sm ${
                      ThemeSet === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Create your account , Fill all details perfectly and make it
                    recheck one time more because your data is sensitive on the
                    web . But we provide best security so not more woried .
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div
                      className={`flex items-center justify-center w-10 h-10 border rounded-full ${
                        ThemeSet === "dark" ? "border-white" : "border-black"
                      }`}
                    >
                      <svg
                        className={`w-4 ${
                          ThemeSet === "dark" ? "text-white" : "text-gray-600"
                        }`}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-xl font-bold Exo text-blue-600">
                    Step 2
                  </p>
                  <p
                    className={`Popins font-thin text-sm ${
                      ThemeSet === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Login with your cerating account .
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div
                      className={`flex items-center justify-center w-10 h-10 border rounded-full ${
                        ThemeSet === "dark" ? "border-white" : "border-black"
                      }`}
                    >
                      <svg
                        className={`w-4 ${
                          ThemeSet === "dark" ? "text-white" : "text-gray-600"
                        }`}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-xl font-bold Exo text-blue-600">
                    Step 3
                  </p>
                  <p
                    className={`Popins font-thin text-sm ${
                      ThemeSet === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    After successFully login go to the Galary OR Top Deals page
                    , after it select the car according your requirements , we
                    have a lots of collection so not more think on it you always
                    see your perfect choice with us .
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div
                      className={`flex items-center justify-center w-10 h-10 border rounded-full ${
                        ThemeSet === "dark" ? "border-white" : "border-black"
                      }`}
                    >
                      <svg
                        className={`w-4 ${
                          ThemeSet === "dark" ? "text-white" : "text-gray-600"
                        }`}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-xl font-bold Exo text-blue-600">
                    Step 4
                  </p>
                  <p
                    className={`Popins font-thin text-sm ${
                      ThemeSet === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Click on the "Rent Now" button and the some documents for
                    some security reason fill all carefully , And we contact you
                    for your selected car for some confirmation so coomunicate
                    with our agent friendly .
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div
                      className={`flex items-center justify-center w-10 h-10 border rounded-full ${
                        ThemeSet === "dark" ? "border-white" : "border-black"
                      }`}
                    >
                      <svg
                        className="w-6 text-gray-600"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <polyline
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="6,12 10,16 18,8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-xl font-bold Exo text-blue-600">
                    Success
                  </p>
                  <p
                    className={`Popins font-thin text-sm ${
                      ThemeSet === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Thank You . NOTE : First You Approved By The Our Team For It
                    Contact Form Fill We Contact You .
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageStepsSections;
