const mongoose = require("mongoose");
const arraytype = mongoose.Schema({
  Id: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});
const schema = new mongoose.Schema({
  studentId: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  courses: [arraytype],
});

const Studentmodel = mongoose.model("students", schema);
module.exports = Studentmodel;
