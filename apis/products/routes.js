const express = require("express");
const {
  productListFetch,
  productListCreate,
  productListDelete,
  productListUpdate,
} = require("./controllers");

const router = express.Router();

router.get("/", productListFetch);

router.post("/", productListCreate);

router.delete("/:productId", productListDelete);

router.put("/products/5.", productListUpdate);

module.exports = router;
