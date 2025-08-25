import axios from "axios";

const RegisterRequestHandler = async (registerData) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_SERVER_USER_LOCATION}/userRegister`,
      registerData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.status;
  } catch (err) {
    console.error("Axios Error:", err?.response?.status || err.message);
    return err?.response?.status || 500;
  }
};

export default RegisterRequestHandler;
