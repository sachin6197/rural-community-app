const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, trim: true },
  },
  { timestamps: true }
);

ProductSchema.index({ name: 1 });

module.exports = mongoose.model("Product", ProductSchema);
