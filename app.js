const express = require("express");
const products = require("./data");

const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const newProduct = products.push(req.body);
  res.status(201).json(newProduct);
  console.log("POSTing", req.body);
});

app.delete("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find(productId);
  if (foundProduct) {
    products.filter(foundCake);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Cake not found" });
  }
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
