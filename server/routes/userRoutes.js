import express from "express";
import multer from "multer";
import {
  userHomeController,
  userLoginController,
  userRegisterController,
  userIsLogedInController,
  userContactController,
  userLogoutController,
  userCarsDataSent,
  userSingleCarDataSent,
  userCarBookController,
  userRentedCarDaraSent,
  userImageSent,
} from "../controllers/userController.js";
import { userAuthentication } from "../configs/auth.js";

// Setup multer (temporary storage in memory)
const storage = multer.memoryStorage(); // or diskStorage if saving to disk
const upload = multer({ storage });

const userPageRouter = express.Router();

userPageRouter.get("/", userHomeController);
userPageRouter.post(
  "/userRegister",
  upload.single("registerImage"),
  userRegisterController
);
userPageRouter.post("/userLogin", userLoginController);
userPageRouter.get("/userIsLogedIn", userIsLogedInController);
userPageRouter.post("/userContact", userContactController);
userPageRouter.get("/userLogout", userLogoutController);
userPageRouter.get("/userCarsData", userCarsDataSent);
userPageRouter.post("/userSingleCarData", userSingleCarDataSent);
userPageRouter.post("/userBookCar", userAuthentication, userCarBookController);
userPageRouter.get("/userImageSent", userAuthentication, userImageSent);
userPageRouter.get(
  "/userRentedCars",
  userAuthentication,
  userRentedCarDaraSent
);

export default userPageRouter;
