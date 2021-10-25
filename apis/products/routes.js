const express = require("express");
const {
  productListFetch,
  productListCreate,
  ProductListDelete,
} = require("./controllers");

const router = express.Router();

router.get("/api/products", productListFetch);

router.post("/api/products", productListCreate);

router.delete("/api/products/:productId", ProductListDelete);

module.exports = router;
