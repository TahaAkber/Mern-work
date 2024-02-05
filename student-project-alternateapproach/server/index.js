const express = require("express");
const app = express();
const Studentmodel = require("./Model/Student");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tahaakber25:lumia123@cluster0.x04n96w.mongodb.net/University?retryWrites=true&w=majority"
);
app.use(express.json());

app.get("/student", async (req, res) => {
  try {
    const data = await Studentmodel.find({});
    res.json(data);
  } catch (error) {
    console.log("Error is that", error);
  }
});

app.listen(3001, console.log("Server has been started", 3001));
