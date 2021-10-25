let products = require("../products");

exports.productListFetch = (req, res) => {
  res.json(products);
};

exports.productListCreate = (req, res) => {
  products.push(req.body);
  res.status(201);
  return res.json(req.body);
};

exports.productListDelete = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);

  if (foundProduct) {
    products = products.filter((product) => product.id !== +foundProduct.id);

    return res.status(204).end();
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
