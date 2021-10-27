const express = require("express");
let products = require("./data");
const productRoutes = require("./apis/products/routes");
const connectDB = require("./database");

const app = express();

// Middleware -> before all requests!
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.hostname}:${PORT}${req.path}`
  );
  next();
});

app.use("/api/products", productRoutes);

connectDB();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
