import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 4001;
const DB_SERVER = process.env.DB_SERVER;

async function start() {
  try {
    await mongoose.connect(DB_SERVER);
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
