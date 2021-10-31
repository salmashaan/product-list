const express = require("express");
const {
  productListFetch,
  productListCreate,
  productListDelete,
  productListUpdate,
  fetchProduct,
} = require("./controllers");

const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    next({ status: 404, message: "Product Not Found!" });
  }
});

router.get("/", productListFetch);

router.post("/", productListCreate);

router.delete("/:productId", productListDelete);

router.put("/:productId", productListUpdate);

module.exports = router;
