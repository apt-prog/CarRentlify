import express from "express";
import {
  adminAddProductsController,
  adminHomeController,
  adminIsOk,
} from "../controllers/adminController.js";

const adminPageRouter = express.Router();

adminPageRouter.get("/", adminHomeController);
adminPageRouter.get("/adminIsOk", adminIsOk);
adminPageRouter.post("/app-cars", adminAddProductsController);

export default adminPageRouter;
