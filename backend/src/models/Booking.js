const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1, default: 1 },
      },
    ],
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

BookingSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model("Booking", BookingSchema);
