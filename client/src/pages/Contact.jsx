import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactFormSubmit from "../utils/ContactFormSubmit";

export default function ContactPage({ theme }) {
  const ThemeSet = theme;
  const isDark = ThemeSet === "dark";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const response = await ContactFormSubmit(formData);

    if (response === 200) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success("Your Message Saved !");
    } else {
      toast.error("Server Internal Error");
    }
  };

  return (
    <div
      className={`relative isolate px-6 pt-24 pb-20 sm:pt-32 lg:px-8 Exo ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
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

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact sales
        </h2>
        <p
          className={`mt-2 text-lg ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          We’d love to hear from you. Send us a message and we’ll respond soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium">
              First name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              className={`mt-2 block w-full rounded-md border px-3.5 py-2 ${
                isDark
                  ? "bg-zinc-900 text-white border-gray-700 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              } focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600`}
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium">
              Last name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              className={`mt-2 block w-full rounded-md border px-3.5 py-2 ${
                isDark
                  ? "bg-zinc-900 text-white border-gray-700 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              } focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className={`mt-2 block w-full rounded-md border px-3.5 py-2 ${
                isDark
                  ? "bg-zinc-900 text-white border-gray-700 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              } focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              Contact number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className={`mt-2 block w-full rounded-md border px-3.5 py-2 ${
                isDark
                  ? "bg-zinc-900 text-white border-gray-700 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              } focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-md border px-3.5 py-2 ${
                isDark
                  ? "bg-zinc-900 text-white border-gray-700 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              } focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600`}
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  );
}
