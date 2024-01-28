const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Usermodel = require("./models/Users");

mongoose.connect(
  "mongodb+srv://Tahaakber:lumia123@cluster0.vnsu7wc.mongodb.net/Merntutorial?retryWrites=true&w=majority"
);

app.get("/getuser", async (req, res) => {
  try {
    const result = await Usermodel.find({});
    res.json(result);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log(`Server is running on port ${3001}`);
});
