const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

// Register
router.post("/signup", async (req, res) => {
  console.log("Request Body:", req.body); // 🔍 debug
  const { username, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ msg: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password:hashed });

  await newUser.save();
  res.json({ msg: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, user: { id: user._id, username: user.username, email } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Internal server error" });
  }
});


module.exports = router;
