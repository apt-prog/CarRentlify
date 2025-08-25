import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./components/ScrollTop";
import AllPagesError404Page from "./pages/404";
import TopDealsPage from "./pages/TopDealsPage";
import ContactPage from "./pages/Contact";
import CarViewPage from "./pages/CarView";
import { ToastContainer } from "react-toastify";
import AdminDashboard from "./pages/AdminPage";
import YourRentalsPage from "./pages/YourRentalsPage";

function App() {
  const getInitialTheme = () =>
    localStorage.getItem("FV-Rentlify Theme") || "light";

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("FV-Rentlify Theme", theme);
  }, [theme]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
        closeButton={false}
        closeOnClick={true}
        theme={theme === "dark" ? "dark" : "light"}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/services" element={<ServicesPage theme={theme} />} />
          <Route path="/topdeals" element={<TopDealsPage theme={theme} />} />
          <Route path="/contact" element={<ContactPage theme={theme} />} />
          <Route path="/rentals" element={<YourRentalsPage theme={theme} />} />
          <Route
            path="/carview/:carsId"
            element={<CarViewPage theme={theme} />}
          />
          <Route path="/admin" element={<AdminDashboard theme={theme} />} />
          <Route path="*" element={<AllPagesError404Page theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
      </BrowserRouter>
    </>
  );
}

export default App;
