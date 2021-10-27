const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: String,
  image: String,
  description: String,
  color: String,
  quantity: {
    type: Number,
    min: 0,
  },
  price: {
    type: Number,
    default: 10,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
