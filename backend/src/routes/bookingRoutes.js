const express = require("express");
const { addBooking, getUserBookings } = require("../controllers/bookingController");

const router = express.Router();

router.post("/", addBooking);
router.get("/:userId", getUserBookings);

module.exports = router;
