const express = require("express");
let products = require("./data");
const productRoutes = require("./apis/products/routes");
const connectDB = require("./database");

const app = express();

// Middleware -> before all requests!
app.use(express.json());

app.use("/api/products", productRoutes);

connectDB();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
