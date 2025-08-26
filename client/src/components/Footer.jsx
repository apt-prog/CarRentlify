import { Link } from "react-router-dom";

export const Footer = ({ theme }) => {
  const ThemeSet = theme;

  return (
    <footer
      className={`pt-[10px] ${
        ThemeSet === "dark" ? "bg-black text-white" : "bg-zinc-100 text-black"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between items-center mx-2 md:mx-0">
          <Link
            to="/"
            className={`flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse Exo ${
              ThemeSet === "dark" ? "text-white" : "text-black"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke={ThemeSet === "dark" ? "#ffffff" : "#000000"}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-car"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              FV-Rentlify
            </span>
          </Link>

          <ul
            className={`flex flex-wrap items-center mb-6 text-sm font-medium Popins ${
              ThemeSet === "dark" ? "text-white" : "text-black"
            }`}
          >
            <li>
              <Link
                to="/"
                className="hover:underline hover:text-blue-600 me-4 md:me-6 relative top-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:underline hover:text-blue-600 me-4 md:me-6 relative top-4"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/topdeals"
                className="hover:underline hover:text-blue-600 me-4 md:me-6 relative top-4"
              >
                Top Deals
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-blue-600  relative top-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span
          className={`block text-sm text-center mb-2 Popins ${
            ThemeSet === "dark" ? "text-white" : "text-black"
          }`}
        >
          <Link to="/admin">©</Link> 2025{" "}
          <Link to="/" className="hover:underline">
            FV-Rentlify™
          </Link>
          . All Rights Reserved By{" "}
          <span className="Exo text-blue-600 font-medium">Fenil Vegad.</span>
        </span>
      </div>
      <div className="mb-2 h-[1px]"></div>
    </footer>
  );
};
