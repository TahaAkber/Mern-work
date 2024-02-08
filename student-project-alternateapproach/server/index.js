const express = require("express");
const app = express();
const Studentmodel = require("./Model/Student");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect(
  "mongodb+srv://tahaakber25:lumia123@cluster0.x04n96w.mongodb.net/University?retryWrites=true&w=majority"
);
app.use(express.json());
app.use(cors());
app.get("/student", async (req, res) => {
  try {
    const data = await Studentmodel.find({});
    res.json(data);
  } catch (error) {
    console.log("Error is that", error);
  }
});
//get course by id
app.get("/student/:studentId/courses/:courseId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;

    // Assuming Student is your mongoose model for students
    const student = await Studentmodel.findOne({ _id: studentId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Find the course matching the courseId
    const course = student.courses.find(
      (course) => course._id.toString() === courseId
    );
    if (!course) {
      return res
        .status(404)
        .json({ message: "Course not found for this student" });
    }

    // If found, return the course
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
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
app.put("/student/:studentId", async (req, res) => {
  const studentId = req.params.studentId;
  const body = req.body;
  const result = await Studentmodel.updateOne({ _id: studentId }, body);
  res.json(result);
});
app.listen(3001, console.log("Server has been started", 3001));
