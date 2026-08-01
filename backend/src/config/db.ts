import mongoose from "mongoose";
import envConfig from "./config.js";

const connectToDatabase = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to db successfully");
    });
    await mongoose.connect(envConfig.mongodbString as string);
  } catch (error) {
    console.log("Fail to connect db!!");
    process.exit(1);
  }
};

export default connectToDatabase;
