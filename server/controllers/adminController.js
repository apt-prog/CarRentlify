import jwt from "jsonwebtoken";
import { carsModal } from "../models/carsModal.js";

export const adminHomeController = (req, res) => {
  res.send(`This Is Run Admin`);
};

export const adminIsOk = (req, res) => {
  try {
    const Cookie = req.cookies["FV-Rentlify"];
    if (!Cookie || Cookie === "") {
      return res.status(204).json({ message: "Cookie is not found" });
    }

    const expectedEmail = "fenil@gmail.com";

    jwt.verify(Cookie, process.env.Secret_Key_Encrypted, (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }

      if (decoded.email === expectedEmail) {
        return res.status(200).json({ message: "All is perfect" });
      } else {
        return res.status(400).json({ message: "Admin is not valid" });
      }
    });
  } catch (err) {
    console.error("adminIsOk Controller Error:", err);
    return res
      .status(500)
      .json({ message: "adminIsOk Controller Internal Server Error" });
  }
};

export const adminAddProductsController = async (req, res) => {
  try {
    let {
      carName,
      carPrice,
      carRating,
      carColor,
      carCategory,
      carImage1,
      carImage2,
      carImage3,
      message1,
      message2,
      likes,
    } = req.body;

    await carsModal.create({
      name: carName,
      price: carPrice,
      rating: carRating,
      color: carColor,
      category: carCategory,
      images: [carImage1, carImage2, carImage3],
      messages: [message1, message2],
      likes,
    });

    res.status(200).json({ message: "Car Add SuccessFully" });
  } catch (err) {
    console.error("admin Controller Error:", err);
    res
      .status(500)
      .send({ message: "admin Contact Controller Internal Server Error" });
  }
};
