const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    icon: { type: String, trim: true },
  },
  { timestamps: true }
);

ServiceSchema.index({ name: 1 });

module.exports = mongoose.model("Service", ServiceSchema);
