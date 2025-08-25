import React from "react";
import axios from "axios";

const IsAdmin = async () => {
  try {
    const isAdmin = await axios.get(
      `${import.meta.env.VITE_API_SERVER_ADMIN_LOCATION}/adminIsOk`,
      {
        withCredentials: true,
      }
    );

    return isAdmin.status;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default IsAdmin;
