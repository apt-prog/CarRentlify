import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Lock,
  X,
  User,
  Phone,
  Image,
  LockKeyhole,
  ArrowUp,
} from "lucide-react";
import RegisterRequestHandler from "../utils/RegisterRequestHandler";
import { toast } from "react-toastify";
import LoginRequestHandler from "../utils/LoginRequestHandler";
import IsLogin from "../utils/IsLogin";
import UserLogout from "../utils/UserLogout";
import UserImageGet from "../utils/UserImage";

const Navbar = ({ theme, setTheme }) => {
  const [isLoginUser, setIsLoginUser] = useState(false);
  const hasCheckedLogin = useRef(false); // ✅ prevents double run

  // Register Form Functions Start
  const [registerFormData, setRegisterFormData] = useState({
    registerName: "",
    registerPassword: "",
    registerEmail: "",
    registerContact: "",
  });

  const [imageFile, setImageFile] = useState(null);

  const registerFormHandler = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    const { registerName, registerPassword, registerEmail, registerContact } =
      registerFormData;

    if (
      !registerName ||
      !registerPassword ||
      !registerEmail ||
      !registerContact ||
      !imageFile
    ) {
      toast.error("Please fill all fields ❌");
      return;
    }

    const formData = new FormData();
    formData.append("registerName", registerName);
    formData.append("registerPassword", registerPassword);
    formData.append("registerEmail", registerEmail);
    formData.append("registerContact", registerContact);
    formData.append("registerImage", imageFile);

    const response = await RegisterRequestHandler(formData);

    if (response === 200) {
      toast.success("Registration Successful ✅");
      setRegisterFormData({
        registerName: "",
        registerPassword: "",
        registerEmail: "",
        registerContact: "",
      });
      setImageFile(null);
      setShowRegisterModal(false);
    } else if (response === 400) {
      toast.error("Email Already Used ❌");
    } else {
      toast.error("Server Error ❌");
    }
  };

  // Register Form Functions End

  // Login Form Functions Start
  const [loginFormData, setLoginFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const loginFormHandler = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    if (!loginFormData.loginEmail || !loginFormData.loginPassword) {
      toast.error("Please fill all fields ❌");
      return;
    }

    const respose = await LoginRequestHandler(loginFormData);

    if (respose === 200) {
      checkLoginStatus();
      toast.success("Login Successful ✅");
      setLoginFormData({
        loginEmail: "",
        loginPassword: "",
      });
      setShowLoginModal(false);
    } else if (respose === 404) {
      toast.error("User Not Found ❌");
    } else if (respose === 400) {
      toast.error("User Password Not Match ❌");
    } else {
      toast.error("Server Error ❌");
    }
  };
  const [imageDataGet, setImageDataGet] = useState(null);

  const DataGetImage = async () => {
    try {
      const response = await UserImageGet();
      const base64String = bufferToBase64(response.data.data);

      setImageDataGet({
        src: `data:${response.contentType};base64,${base64String}`,
        name: response.originalname,
      });
    } catch (err) {
      console.error("Error fetching image:", err);
    }
  };

  // helper function
  const bufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  // Login Form Functions End

  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("FV-Rentlify Theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const isActive = (path) => location.pathname === path;

  // Navbar Set If Login

  useEffect(() => {
    if (!hasCheckedLogin.current) {
      hasCheckedLogin.current = true;
      checkLoginStatus();
    }
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await IsLogin();
      if (response === 200) {
        setIsLoginUser(true);
        await DataGetImage();
      } else {
        setIsLoginUser(false);
        setImageDataGet(null);
      }
    } catch (error) {
      setIsLoginUser(false);
      setImageDataGet(null);
    }
  };

  const LinksWithOutLogin = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/topdeals", label: "Top Deals" },
    { path: "/contact", label: "Contact" },
  ];

  const LinksWithLogin = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/topdeals", label: "Top Deals" },
    { path: "/contact", label: "Contact" },
    { path: "/rentals", label: "Your Rentals" },
  ];

  const LogOut = async () => {
    const resposnse = await UserLogout();
    if (resposnse === 200) {
      toast.success("LogOut Successful ✅");
      checkLoginStatus();
    } else {
      toast.error("Interal Server Error ❌");
    }
  };

  return (
    <>
      {showBtn && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-3 md:bottom-2 z-50 w-13 h-13 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      )}
      <div id="NavBar">
        <nav
          className={`fixed w-full z-20 top-0 start-0 transition-colors duration-300 ${
            theme === "dark" ? "bg-black" : "bg-blue-900"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <Link to="/" className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
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
              <span className="md:text-2xl text-xl font-semibold text-white Exo">
                FV-Rentlify
              </span>
            </Link>

            <div className="flex md:order-2 items-center">
              <button
                onClick={toggleTheme}
                className="p-[8px] text-white bg-blue-700 border-blue-700 border-2 rounded-lg hover:border-blue-800 hover:bg-blue-800 transition md:ms-0"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                  </svg>
                )}
              </button>

              {isLoginUser ? (
                <>
                  {" "}
                  <button className="p-[3px] rounded-full border-2 border-blue-700 hover:border-blue-800 transition ms-2">
                    <img
                      src={imageDataGet?.src} // ✅ correct
                      alt={imageDataGet?.name || "User"}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>
                </>
              ) : (
                <></>
              )}

              {isLoginUser ? (
                <>
                  <button
                    onClick={LogOut}
                    className={`text-red-600 hover:text-white bg-transperent border-red-700 border-2 hover:bg-red-700 rounded-lg text-sm px-2 py-2 ml-2 Exo flex ${
                      theme === "dark" ? "" : "text-white"
                    }`}
                  >
                    <span className="me-2 mt-[2px]">Logout</span>
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
                      className="lucide lucide-log-in-icon lucide-log-in"
                    >
                      <path d="m10 17 5-5-5-5" />
                      <path d="M15 12H3" />
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-4 py-2 ml-2 Exo flex"
                  >
                    <span className="me-2">Login</span>
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
                      className="lucide lucide-log-in-icon lucide-log-in"
                    >
                      <path d="m10 17 5-5-5-5" />
                      <path d="M15 12H3" />
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    </svg>
                  </button>
                </>
              )}

              <button
                onClick={toggleMenu}
                className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm p-[10px] Exo flex items-center md:hidden ms-2"
              >
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
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>

            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isOpen ? "flex" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <ul
                className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-white w-full ${
                  theme === "dark"
                    ? "bg-black text-white"
                    : "bg-blue-900 text-black"
                }`}
              >
                {(isLoginUser ? LinksWithLogin : LinksWithOutLogin).map(
                  (link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 px-1 text-sm rounded-sm transition-colors duration-200 Popins font-medium ${
                          isActive(link.path)
                            ? "text-white bg-blue-600 md:bg-transparent md:text-blue-600"
                            : "text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 "
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>

        {showLoginModal && (
          <div
            onClick={() => setShowLoginModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-100/30 dark:bg-black/30 backdrop-blur-[5px] Exo"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 relative border-2 border-blue-600 ${
                theme === "dark" ? "bg-black " : "bg-blue-200"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? " text-white" : "text-black"
                  }`}
                >
                  Welcome Back
                </h2>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="space-y-5" onSubmit={loginSubmit}>
                <div className="flex flex-col">
                  <label
                    htmlFor="LoginEmail"
                    className={`flex items-center gap-2 text-sm mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-zinc-800"
                    }`}
                  >
                    <Mail className="w-4 h-4" /> Enter Your Email
                  </label>
                  <input
                    id="LoginEmail"
                    name="loginEmail"
                    onChange={loginFormHandler}
                    value={loginFormData.loginEmail}
                    type="email"
                    placeholder="Enter your email"
                    className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white"
                        : "bg-white text-black"
                    }`}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="LoginPassword"
                    className={`flex items-center gap-2 text-sm mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-zinc-800"
                    }`}
                  >
                    <Lock className="w-4 h-4" /> Enter Your Password
                  </label>
                  <input
                    id="LoginPassword"
                    name="loginPassword"
                    value={loginFormData.loginPassword}
                    onChange={loginFormHandler}
                    type="password"
                    placeholder="Enter your password"
                    className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white"
                        : "bg-white text-black"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Login
                </button>

                <p
                  className={`text-center text-sm ${
                    theme === "dark" ? "text-white" : "text-blak"
                  }`}
                >
                  Don't have an account?&nbsp;
                  <span
                    onClick={() => {
                      setShowLoginModal(false);
                      setShowRegisterModal(true);
                    }}
                    className="text-blue-400 underline cursor-pointer"
                  >
                    Register Now
                  </span>
                </p>
              </form>
            </div>
          </div>
        )}

        {showRegisterModal && (
          <div
            onClick={() => setShowRegisterModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-100/30 dark:bg-black/30 backdrop-blur-[5px] Exo"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-xl shadow-2xl md:p-6 p-3 w-full max-w-md mx-4 relative border-2 border-blue-600 ${
                theme === "dark" ? "bg-black " : "bg-blue-200"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? " text-white" : "text-black"
                  }`}
                >
                  Create Account
                </h2>
                <button
                  onClick={() => setShowRegisterModal(false)}
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="space-y-4" onSubmit={registerSubmit}>
                <div className="flex flex-col">
                  <label
                    htmlFor="RegisterName"
                    className={`flex items-center gap-2 text-sm mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-zinc-800"
                    }`}
                  >
                    <User className="w-4 h-4" /> Enter Your Name
                  </label>
                  <input
                    id="RegisterName"
                    name="registerName"
                    type="text"
                    placeholder="Your name"
                    value={registerFormData.registerName}
                    onChange={registerFormHandler}
                    className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white"
                        : "bg-white text-black"
                    }`}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="registerPassword"
                    className={`flex items-center gap-2 text-sm mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-zinc-800"
                    }`}
                  >
                    <LockKeyhole className="w-4 h-4" /> Enter Your Password
                  </label>
                  <input
                    id="registerPassword"
                    name="registerPassword"
                    type="password"
                    placeholder="Your Password"
                    value={registerFormData.registerPassword}
                    onChange={registerFormHandler}
                    className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white"
                        : "bg-white text-black"
                    }`}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="RegisterEmail"
                    className={`flex items-center gap-2 text-sm mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-zinc-800"
                    }`}
                  >
                    <Mail className="w-4 h-4" /> Enter Your Email
                  </label>
                  <input
                    id="RegisterEmail"
                    name="registerEmail"
                    type="email"
                    placeholder="Email address"
                    value={registerFormData.registerEmail}
                    onChange={registerFormHandler}
                    className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white"
                        : "bg-white text-black"
                    }`}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="RegisterNo"
                    className={`flex items-center gap-2 text-sm mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-zinc-800"
                    }`}
                  >
                    <Phone className="w-4 h-4" /> Enter Your Contact No.
                  </label>
                  <input
                    id="RegisterNo"
                    name="registerContact"
                    type="tel"
                    placeholder="Contact number"
                    value={registerFormData.registerContact}
                    onChange={registerFormHandler}
                    className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white"
                        : "bg-white text-black"
                    }`}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="registerImage"
                    className={`flex items-center gap-2 text-sm mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-zinc-800"
                    }`}
                  >
                    <Image className="w-4 h-4" /> Upload Profile Image
                  </label>
                  <input
                    id="registerImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className={`text-sm ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Register
                </button>

                <p
                  className={`text-center text-sm ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Already have an account?&nbsp;
                  <span
                    onClick={() => {
                      setShowRegisterModal(false);
                      setShowLoginModal(true);
                    }}
                    className="text-blue-400 underline cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
