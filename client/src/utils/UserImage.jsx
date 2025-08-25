import axios from "axios";
import React from "react";

const UserImageGet = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userImageSent`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default UserImageGet;
