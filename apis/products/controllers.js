let products = require("../../data");
const Product = require("../../models/Product");
const mongoose = require("mongoose");

exports.productListFetch = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};

exports.productListCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201);
    return res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};

exports.productListDelete = async (req, res) => {
  try {
    const { productId } = req.params;
    foundProduct = await Product.findById(productId);

    if (foundProduct) {
      const removeProduct = await Product.remove(foundProduct);
      return res.status(204).json(removeProduct);
    } else {
      return res.status(404).json({ message: "This product doesn't exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};
