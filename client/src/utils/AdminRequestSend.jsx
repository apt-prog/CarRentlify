import React from "react";
import axios from "axios";

const AdminRequestSend = async (adminData) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_SERVER_ADMIN_LOCATION}/app-cars`,
      adminData,
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

export default AdminRequestSend;
