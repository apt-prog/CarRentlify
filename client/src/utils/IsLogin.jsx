import React from "react";
import axios from "axios";

const IsLogin = async () => {
  try {
    const isLogin = await axios.get(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userIsLogedIn`,
      { withCredentials: true }
    );

    return isLogin.status;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default IsLogin;
