import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  contact: { type: String },
  message: { type: String },
});

export const contactModal = mongoose.model("contactdata", contactSchema);
