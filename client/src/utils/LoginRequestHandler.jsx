import axios from "axios";
import React from "react";

const LoginRequestHandler = async (loginData) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userLogin`,
      loginData,
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

export default LoginRequestHandler;
