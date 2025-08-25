import React from "react";
import axios from "axios";

const SingleCarDataFetch = async (carModelID) => {
  try {
    const CarDataCollection = await axios.post(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userSingleCarData`,
      carModelID,
      {
        withCredentials: true,
      }
    );

    return CarDataCollection.data;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default SingleCarDataFetch;
