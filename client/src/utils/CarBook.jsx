import axios from "axios";
import React from "react";

const CarBookForRental = async (CarData) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userBookCar`,
      CarData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return res.status;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default CarBookForRental;
