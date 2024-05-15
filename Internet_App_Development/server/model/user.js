const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  testing: {
    type: String,
    required: true,
  },
});

const Usermodel = mongoose.model("entries", schema);

module.exports = Usermodel;
