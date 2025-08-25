import mongoose from "mongoose";

const CarsModalSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.ObjectId, ref: "usersdata", default: null },
  name: { type: String },
  color: { type: String },
  category: { type: String },
  price: { type: String },
  rating: { type: String },
  images: [{ type: String }],
  messages: [{ type: String }],
  likes: { type: Number },
});

export const carsModal = mongoose.model("carsdata", CarsModalSchema);
