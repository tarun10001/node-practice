const express = require("express");
const router = express.Router();
const User = require("../models/users");

// Create a user
router.post("/", async (req, res) => {
  try {
    const {name, email, password} = req.body;
    const user = new User({name, email, password});
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;