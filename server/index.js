import express from "express";
import mongoose from "mongoose";

const app = express();

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://fringle:12345@cluster0.wgisrd8.mongodb.net/blog"
    );
    app.listen(4000, () => {
      console.log(`Server started on port: ${4000}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
