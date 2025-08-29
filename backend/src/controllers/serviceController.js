const Service = require("../models/Service");

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find({}).sort({ name: 1 });
    res.json(services);
  } catch (e) {
    res.status(500).json({ message: "Could not fetch services" });
  }
};
