const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const usermodel = require("./usermodel");
mongoose.connect(
  "mongodb+srv://tahaakber:lumia123@cluster0.o5sdrdh.mongodb.net/Userentries?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", async (req, res) => {
  const result = await usermodel.find({});
  res.json(result);
});
app.post("/", async (req, res) => {
  try {
    const body = req.body;
    const result = new usermodel(body);
    result.save();
    res.json(result);
  } catch (error) {
    console.log(`error occurs at ${error}`);
  }
});
app.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await usermodel.updateOne({ _id: id }, body);
    res.json(result);
  } catch (error) {
    console.log(`Server error at adding ${error}`);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const result = await usermodel.deleteOne({ _id: id }, body);
    res.json(result);
  } catch (error) {
    console.log(`Server error at ${error}`);
  }
});
app.listen(3001, (req, res) => {
  console.log(`Server is connected at ${3001}`);
});
