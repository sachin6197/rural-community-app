const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const { name, message } = req.body;
    if (!name || !message) return res.status(400).json({ message: "Missing fields" });
    const entry = await Contact.create({ name, message, timestamp: new Date() });
    res.status(201).json(entry);
  } catch (e) {
    res.status(500).json({ message: "Submission failed" });
  }
};
