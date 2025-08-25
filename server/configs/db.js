import mongoose from "mongoose";

export const ConnectWithDB = () => {
  try {
    mongoose
      .connect(process.env.MongoDB_Key_Connection)
      .then(console.log(`MongoDB Connect SuccessFully`))
      .catch((err) =>
        console.log(`In The DB Connection Have The Error : ${err}`)
      );
  } catch (err) {
    console.log(`In The DB Connection Have The Error : ${err}`);
  }
};
