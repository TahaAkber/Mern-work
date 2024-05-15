const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Usermodel = require("./model/user");

mongoose.connect(
  "mongodb+srv://tahaakber:lumia123@cluster0.o5sdrdh.mongodb.net/Userentries?retryWrites=true&w=majority&appName=Cluster0"
);
app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  // Corrected order of parameters (req, res)
  try {
    const result = await Usermodel.find({});
    res.json(result);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ error: "Internal server error" }); // Added response status and message
  }
});
app.post("/user", async (req, res) => {
  try {
    const user = req.body;
    const newuser = new Usermodel(user);
    await newuser.save();
    res.json(user);
  } catch (error) {
    console.log("Error in posting Data");
  }
});
app.listen(3001, () => {
  console.log("server is running at port ", 3001);
});
