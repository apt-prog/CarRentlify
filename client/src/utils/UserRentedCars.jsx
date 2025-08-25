import React from "react";
import axios from "axios";

const UserRentedCarData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userRentedCars`,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default UserRentedCarData;
