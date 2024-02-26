const express = require("express");

const router = express.Router();
const Usermodel = require("./usermodel/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",

  [
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
    body("email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await Usermodel.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error, "User cant be inserted");
    }
  }
);

module.exports = router;
