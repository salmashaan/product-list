let products = require("../../data");
const Product = require("../../models/Product");
const mongoose = require("mongoose");

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.productListFetch = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.productListCreate = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201);
    return res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.productListDelete = async (req, res, next) => {
  try {
    await req.product.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.productListUpdate = async (req, res, next) => {
  try {
    const foundProduct = await Product.findByIdAndUpdate(
      req.product,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json(foundProduct);
  } catch (error) {
    next(error);
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
