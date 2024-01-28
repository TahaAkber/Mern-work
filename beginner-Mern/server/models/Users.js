const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Usermodel = mongoose.model("users", schema);
module.exports = Usermodel;
