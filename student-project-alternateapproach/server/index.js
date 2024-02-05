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
//get course by id
app.get("/student/:studentId/course/:courseId", async (req, res) => {
  const studentId = req.params.studentId;
  const data = await Studentmodel.findById(studentId);
  const result = data.courses.filter(c => c._id === req.params.courseId);
  res.json(data);
  console.log(result);
});
app.post("/student", async (req, res) => {
  try {
    const data = req.body;
    const newuser = new Studentmodel(data);
    await newuser.save();
    res.json(newuser);
  } catch (error) {
    console.error("cannot insert", error);
  }
});

app.listen(3001, console.log("Server has been started", 3001));
