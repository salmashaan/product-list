const express = require("express");
let products = require("./data");

const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
});

app.delete("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);

  if (foundProduct) {
    products = products.filter((product) => product.id !== +foundProduct.id);

    res.json(products);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
