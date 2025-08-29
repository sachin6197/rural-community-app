const Booking = require("../models/Booking");
const User = require("../models/User");

exports.addBooking = async (req, res) => {
  try {
    const { userId, products } = req.body;
    if (!userId || !Array.isArray(products) || products.length === 0) return res.status(400).json({ message: "Invalid payload" });
    const booking = await Booking.create({ userId, products, date: new Date() });
    await User.findByIdAndUpdate(userId, { $push: { bookings: booking._id } });
    res.status(201).json(booking);
  } catch (e) {
    res.status(500).json({ message: "Could not create booking" });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ userId }).sort({ date: -1 });
    res.json(bookings);
  } catch (e) {
    res.status(500).json({ message: "Could not fetch bookings" });
  }
};
