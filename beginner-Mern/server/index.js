const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Usermodel = require("./models/Users");
//allow us to connect api react frontend without errors
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://Tahaakber:lumia123@cluster0.vnsu7wc.mongodb.net/Merntutorial?retryWrites=true&w=majority"
);
//created both get and post data from backend to frontend
//since we posting data to backend with jsonfile we need to use express that takes data its a builtin feature of express
app.use(express.json());
app.use(cors());
app.get("/getuser", async (req, res) => {
  try {
    const result = await Usermodel.find({});
    res.json(result);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//here we pass an object that we need to insert into database
app.post("/createuser", async (req, res) => {
  const user = req.body;
  //we initialize usermodel to store user into database
  const newuser = new Usermodel(user);
  await newuser.save();
  //showing data to frontend using res.json();
  res.json(user);
});
app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(id);
});
app.listen(3001, () => {
  console.log(`Server is running on port ${3001}`);
});
