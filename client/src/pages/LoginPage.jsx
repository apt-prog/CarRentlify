import React from "react";

const LoginPage = ({ theme }) => {
  const ThemeSet = theme;
  const isDark = ThemeSet === "dark";

  return (
    <div
      className={`relative w-full h-screen flex flex-col md:flex-row Exo ${
        isDark ? "bg-blue-900 text-white" : "bg-blue-200 text-black"
      }`}
    >
      {/* Background Shape Behind Left Side */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.8125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#60a5fa] to-[#1e40af] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[90rem]"
        />
      </div>

      {/* Left Side - Login Form (35%) */}
      <div className="md:w-[35%] w-full flex items-center justify-center md:p-8 pt-15 md:mx-0 mx-2 relative z-10">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                className={`md:w-full w-[96%] px-2 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  ThemeSet === "dark"
                    ? "border-blue-300 bg-black text-white placeholder:text-white"
                    : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                className={`md:w-full w-[96%] px-2 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  ThemeSet === "dark"
                    ? "border-blue-300 bg-black text-white placeholder:text-white"
                    : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="md:w-full w-[96%] md:mb-0 mb-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image (65%) */}
      <div className="md:w-[65%] w-full h-64 md:h-full">
        <img
          src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
