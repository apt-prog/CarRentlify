import mongoose from "mongoose";

const userModalSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  contact: { type: Number, require: true },
  profileImage: { data: Buffer, contetType: String, originalname: String },
  carOnRentsID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "carsData",
      default: null,
    },
  ],
  likeCars: [{ type: mongoose.Schema.Types.ObjectId, ref: "carsData" }],
});

export const userModal = mongoose.model("usersdata", userModalSchema);
