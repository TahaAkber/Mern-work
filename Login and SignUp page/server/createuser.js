const express = require("express");

const router = express.Router();
const Usermodel = require("./usermodel/User");

router.post("/createuser", async (req, res) => {
  try {
      const data = req.body;
      const newuser = new Usermodel(data);
      await Usermodel.save();
      res.json(data);
    }
   catch (error) {
    console.log(error, "User cant be inserted");
  }
});

module.exports = router;
