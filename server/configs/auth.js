import mongoose from "mongoose";
import { userModal } from "../models/userModal.js";
import jwt from "jsonwebtoken";

export const userAuthentication = async (req, res, next) => {
  try {
    let Token = req.cookies["FV-Rentlify"];

    if (!Token) {
      return res.status(500).json({ message: "Token Not Found" });
    }

    const tokenDecoded = jwt.decode(Token);

    const userFind = await userModal.find({ email: tokenDecoded.email });

    if (!userFind) {
      return res.status(400).json({ message: "User Not Found" });
    }

    req.user = { userFind };

    next();
  } catch (err) {
    console.error("user LogOut Controller Error:", err);
    res.status(500).send({
      message: "User Not LogIn Authntication Failed Internal Server Error",
    });
  }
};
