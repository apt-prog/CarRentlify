import mongoose from "mongoose";

const CarBookedSchema = new mongoose.Schema({
  userBookedID: {
    type: mongoose.Schema.ObjectId,
    ref: "usersdata",
  },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  aadhar: { type: String },
  drivingLicence: { type: String },
  paymentMethod: { type: String },
  amount: { type: Number },
});

export const carBookedModal = mongoose.model("carbookdata", CarBookedSchema);
