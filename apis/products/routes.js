const express = require("express");
const {
  productListFetch,
  productListCreate,
  productListDelete,
} = require("./controllers");

const router = express.Router();

router.get("/", productListFetch);

router.post("/", productListCreate);

router.delete("/:productId", productListDelete);

module.exports = router;
