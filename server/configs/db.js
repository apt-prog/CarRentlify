import mongoose from "mongoose";

export const ConnectWithDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_Key_Connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ In The DB Connection Have The Error :", err.message);
    process.exit(1);
  }
};
