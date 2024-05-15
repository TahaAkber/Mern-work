const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://tahaakber:lumia123@cluster0.o5sdrdh.mongodb.net/Userentries?retryWrites=true&w=majority&appName=Cluster0"
);
app.use(express.json());
app.use(cors());

app.get("/user", async (res, req) => {
  try {
    const result = await Usermodel.find({});
    res.json(result);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.sta;
  }
});
app.listen(3001, () => {
  console.log("server is running at port ", 3001);
});
