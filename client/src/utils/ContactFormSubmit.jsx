import React from "react";
import axios from "axios";

const ContactFormSubmit = async (contactData) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userContact`,
      contactData,
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

export default ContactFormSubmit;
