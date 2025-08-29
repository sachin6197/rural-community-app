const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signToken = (user) => {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET missing");
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

exports.register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    if (!username || !email || !password) return res.status(400).json({ message: "Missing fields" });
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "User already exists" });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hash, phone });
    const token = signToken(user);
    res.status(201).json({ token, user: { id: user._id, username: user.username, email: user.email, phone: user.phone } });
  } catch (e) {
    res.status(500).json({ message: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Missing fields" });
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });
    const token = signToken(user);
    res.json({ token, user: { id: user._id, username: user.username, email: user.email, phone: user.phone } });
  } catch (e) {
    res.status(500).json({ message: "Login failed" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, phone } = req.body;
    const user = await User.findByIdAndUpdate(userId, { username, phone }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ id: user._id, username: user.username, email: user.email, phone: user.phone });
  } catch (e) {
    res.status(500).json({ message: "Update failed" });
  }
};
