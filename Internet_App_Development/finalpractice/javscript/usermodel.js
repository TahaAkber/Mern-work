const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  testing: {
    type: String,
    required: true,
  },
});
const usermodel = mongoose.model("entries", schema);
module.exports = usermodel;
