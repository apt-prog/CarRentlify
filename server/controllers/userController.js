import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModal } from "../models/userModal.js";
import { contactModal } from "../models/contactModal.js";
import { carsModal } from "../models/carsModal.js";
import { carBookedModal } from "../models/bookedModal.js";

export const userHomeController = (req, res) => {
  res.send(`This Is Run User`);
};

export const userRegisterController = async (req, res) => {
  try {
    let { registerName, registerPassword, registerEmail, registerContact } =
      req.body;
    let { buffer, mimetype, originalname } = req.file;

    const userExists = await userModal.findOne({ email: registerEmail });

    if (userExists ? true : false) {
      return res.status(400).json({ message: "User Is Exist" });
    }

    let Salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(registerPassword, Salt);

    await userModal.create({
      name: registerName,
      email: registerEmail,
      password: hash,
      contact: registerContact,
      profileImage: {
        data: buffer,
        contetType: mimetype,
        originalname,
      },
    });

    res.status(200).send({ message: "Registered successfully" });
  } catch (err) {
    console.error("RegisterPageController Error:", err);
    res
      .status(500)
      .send({ message: "Register Controller Internal server error" });
  }
};

export const userLoginController = async (req, res) => {
  try {
    const { loginEmail, loginPassword } = req.body;

    const userFind = await userModal.findOne({ email: loginEmail });

    if (!userFind) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(loginPassword, userFind.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Password Not Matched" });
    }

    const token = jwt.sign(
      { email: userFind.email },
      process.env.Secret_Key_Encrypted,
      { expiresIn: "2h" }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,          // ✅ must be true for Render/Vercel (HTTPS)
      maxAge: 2 * 60 * 60 * 1000, // 2 hours
      sameSite: "none",      // ✅ required for cross-site cookies
    };

    return res
      .status(200)
      .cookie("FV-Rentlify", token, cookieOptions)
      .json({ message: "Successfully Logged In" });
  } catch (err) {
    console.error("LoginPageController Error:", err);
    return res
      .status(500)
      .json({ message: "Login Controller Internal Server Error" });
  }
};

export const userIsLogedInController = async (req, res) => {
  try {
    let Cookie = req.cookies["FV-Rentlify"];
    if (!Cookie || Cookie === "") {
      return res.status(204).json({ message: "Cokkie Is not Found" });
    } else {
      res.status(200).json({ message: "All Is Perfect" });
    }
  } catch (err) {
    console.error("userLogedin Controller Error:", err);
    res
      .status(500)
      .send({ message: "User LogedIn Controller Internal Server Error" });
  }
};

export const userContactController = async (req, res) => {
  try {
    let { firstName, lastName, email, phone, message } = req.body;

    await contactModal.create({
      firstName,
      lastName,
      email,
      contact: phone,
      message,
    });

    return res.status(200).json({ message: "SuccesFully Message Stored" });
  } catch (err) {
    console.error("userContact Controller Error:", err);
    res
      .status(500)
      .send({ message: "User Contact Controller Internal Server Error" });
  }
};

export const userLogoutController = async (req, res) => {
  try {
    res.clearCookie("FV-Rentlify", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    return res.status(200).json({ message: "User LogOut" });
  } catch (err) {
    console.error("user LogOut Controller Error:", err);
    res
      .status(500)
      .send({ message: "User LogOut Controller Internal Server Error" });
  }
};

export const userCarsDataSent = async (req, res) => {
  try {
    const CarsData = await carsModal.find();
    res.status(200).json(CarsData);
  } catch (err) {
    console.error("user LogOut Controller Error:", err);
    res
      .status(500)
      .send({ message: "User LogOut Controller Internal Server Error" });
  }
};

export const userSingleCarDataSent = async (req, res) => {
  try {
    const carsId = req.body.carsId;

    const carData = await carsModal.findOne({ _id: carsId });

    res.send(carData);
  } catch (err) {
    console.error("user LogOut Controller Error:", err);
    res
      .status(500)
      .send({ message: "User LogOut Controller Internal Server Error" });
  }
};

export const userCarBookController = async (req, res) => {
  try {
    let {
      name,
      email,
      phone,
      aadhar,
      drivingLicence,
      paymentMethod,
      price,
      carCardId,
    } = req.body;

    let userID = req.user.userFind[0]._id;

    let carFind = await carsModal.findOne({ _id: carCardId });

    if (!(carFind.book === null)) {
      return res.status(400).json({ message: "Car Is Already Booked" });
    }

    await carsModal.findOneAndUpdate(
      { _id: carCardId },
      { $set: { book: userID } }
    );

    await userModal.findOneAndUpdate(
      { _id: userID },
      { $push: { carOnRentsID: carFind._id } }
    );

    await carBookedModal.create({
      userBookedID: userID,
      name,
      email,
      phone,
      aadhar,
      drivingLicence,
      paymentMethod,
      amount: price,
    });

    return res.status(200).json({ message: "Car Booked SuuceesFully" });
  } catch (err) {
    console.error("user Car Book Controller Error:", err);
    res
      .status(500)
      .send({ message: "User Car Book Controller Internal Server Error" });
  }
};

export const userRentedCarDaraSent = async (req, res) => {
  try {
    const CarRentsId = req.user.userFind[0].carOnRentsID; // array of car IDs

    if (!CarRentsId || CarRentsId.length === 0) {
      return res.status(400).send([]); // ✅ no rented cars, return empty array
    }

    // Fetch all car details for the given IDs
    const FinalObject = await Promise.all(
      CarRentsId.map((elem) => carsModal.findOne({ _id: elem }))
    );

    res.status(200).send(FinalObject);
  } catch (err) {
    console.error("user Rented Car Data Sent Controller Error:", err);
    res.status(500).send({
      message: "user Rented Car Data Sent Controller Internal Server Error",
    });
  }
};

export const userImageSent = async (req, res) => {
  try {
    res.send(req.user.userFind[0].profileImage);
  } catch (err) {
    console.error("user Rented Car Image Sent Controller Error:", err);
    res.status(500).send({
      message: "user Rented Car Image Sent Controller Internal Server Error",
    });
  }
};
