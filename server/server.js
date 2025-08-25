import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { ConnectWithDB } from "./configs/db.js";
import userPageRouter from "./routes/userRoutes.js";
import adminPageRouter from "./routes/adminRouters.js";

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: true,  
    credentials: true, 
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(cookieParser());

ConnectWithDB();

app.use("/user", userPageRouter);
app.use("/admin", adminPageRouter);

app.listen(PORT, () => {
  console.log(`Server Runs On The ${PORT}`);
});
