const mongoose = require("mongoose");
const course = mongoose.Schema({
  courseId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courses: [course],
});

const Studentmodel = mongoose.model("students", schema);
module.exports = Studentmodel;
