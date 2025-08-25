import React from "react";
import axios from "axios";

const CarsDataFetchFromServer = async () => {
  try {
    const CarsCollection = await axios.get(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userCarsData`,
      {
        withCredentials: true,
      }
    );

    return CarsCollection;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default CarsDataFetchFromServer;
