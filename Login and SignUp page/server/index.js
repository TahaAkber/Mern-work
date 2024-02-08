const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://tahaakber25:lumia123@cluster0.odxb4hq.mongodb.net/Loginpage?retryWrites=true&w=majority"
);
app.use(require("./createuser"));

app.listen(3001, console.log("connected"));
