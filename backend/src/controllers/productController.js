const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const { q, min, max } = req.query;
    const filter = {};
    if (q) filter.name = { $regex: q, $options: "i" };
    if (min || max) {
      filter.price = {};
      if (min) filter.price.$gte = Number(min);
      if (max) filter.price.$lte = Number(max);
    }
    const products = await Product.find(filter).sort({ name: 1 });
    res.json(products);
  } catch (e) {
    res.status(500).json({ message: "Could not fetch products" });
  }
};
