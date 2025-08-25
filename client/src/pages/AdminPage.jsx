import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRequestSend from "../utils/AdminRequestSend";
import IsAdmin from "../utils/IsAdmin";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard({ theme }) {
  const isDark = theme === "dark";

  const navigate = useNavigate();
  const hasCheckedLogin = useRef(false); // ✅ prevents double run
  useEffect(() => {
    if (hasCheckedLogin.current) return; // ✅ skip if already checked
    hasCheckedLogin.current = true;

    const checkLogin = async () => {
      const response = await IsAdmin();

      if (response !== 200) {
        toast.error("You Not See This Page", {
          toastId: "login-required", // prevent duplicate toasts
        });
        navigate("/");
      }
    };

    checkLogin();
  }, [navigate]);

  const [formData, setFormData] = useState({
    carName: "",
    carPrice: "",
    carRating: "",
    carColor: "#000000",
    carCategory: "",
    carImage1: "",
    carImage2: "",
    carImage3: "",
    message1: "",
    message2: "",
    likes: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormComplete = Object.values(formData).every(
      (value) => value !== ""
    );

    if (!isFormComplete) {
      toast.error("Please fill in all fields.");
      return;
    }

    console.log("✅ Final Form Object:", formData);

    const response = await AdminRequestSend(formData);

    if (response === 200) {
      toast.success("Car details submitted successfully!");

      setFormData({
        carName: "",
        carPrice: "",
        carRating: "",
        carColor: "#000000",
        carCategory: "",
        carImage1: "",
        carImage2: "",
        carImage3: "",
        message1: "",
        message2: "",
        likes: "",
      });
    } else {
      return toast.error("Internal Server Error .");
    }
  };

  return (
    <div
      className={`relative isolate px-6 pt-24 pb-20 sm:pt-32 lg:px-8 Exo ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Add The Details Of The Car
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          {[
            { id: "carName", label: "Enter Car Name", type: "text" },
            {
              id: "carPrice",
              label: "Enter Car Rent Price Per Day",
              type: "text",
            },
            { id: "carRating", label: "Enter Car Rating", type: "text" },
            { id: "carColor", label: "Enter Car Color", type: "color" },
            { id: "likes", label: "Enter Car Likes Around For Show", type: "number" },
            {
              id: "carCategory",
              label: (
                <>
                  Enter Car Category{" "}
                  <span className="text-blue-600">
                    Opt is Sadan , EV , Cope , SUV , Super , Hyper
                  </span>
                </>
              ),
              type: "text",
            },
            { id: "carImage1", label: "Enter Car Image 1", type: "text" },
            { id: "carImage2", label: "Enter Car Image 2", type: "text" },
            { id: "carImage3", label: "Enter Car Image 3", type: "text" },
          ].map(({ id, label, type }) => (
            <div className="sm:col-span-2" key={id}>
              <label htmlFor={id} className="block text-sm font-medium">
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                value={formData[id]}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-md border px-3.5 py-2 ${
                  isDark
                    ? "bg-zinc-900 text-white border-gray-700 placeholder-gray-400"
                    : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
                } focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600`}
              />
            </div>
          ))}

          {/* Message 1 */}
          <div className="sm:col-span-2">
            <label htmlFor="message1" className="block text-sm font-medium">
              Enter 1 Para On The Car Explain
            </label>
            <textarea
              id="message1"
              name="message1"
              rows={4}
              value={formData.message1}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-md border px-3.5 py-2 ${
                isDark
                  ? "bg-zinc-900 text-white border-gray-700 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              } focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600`}
            />
          </div>

          {/* Message 2 */}
          <div className="sm:col-span-2">
            <label htmlFor="message2" className="block text-sm font-medium">
              Enter 2 Para On The Car Explain
            </label>
            <textarea
              id="message2"
              name="message2"
              rows={4}
              value={formData.message2}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-md border px-3.5 py-2 ${
                isDark
                  ? "bg-zinc-900 text-white border-gray-700 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              } focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600`}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
