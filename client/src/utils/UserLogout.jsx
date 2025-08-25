import React from "react";
import axios from "axios";

const UserLogout = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userLogout`,
      {
        withCredentials: true,
      }
    );

    return response.status;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default UserLogout;
