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
  const { productId } = req.params;
  try {
    foundProduct = await Product.findByIdAndDelete({ _id: productId });

    if (foundProduct) {
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "This product doesn't exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};

exports.productListUpdate = async (req, res) => {
  const { productId } = req.params;
  try {
    const foundProduct = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (foundProduct) {
      return res.status(200).json(foundProduct);
    } else {
      return res.status(404).json({ message: "This product doesn't exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};

// Make it a habit to put `return` before res.json --> good etiquette and caution

// Either res.json or .end to terminate the function

// Create
// Status: 201
// Content: Newly created item

// Retrieve (Fetch List & Details)
// Status: 200
// Content: Requested Date

// Update
// Status: 200
// Content: Updated items

// Delete
// Status: 204
// Content: No content
