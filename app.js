const express = require("express");
let products = require("./data");
const productRoutes = require("./apis/products/routes");
const connectDB = require("./database");

const app = express();

// Middleware -> before all requests!
app.use(express.json());

// Logger Method Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
});

app.use("/api/products", productRoutes);

// Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
});

connectDB();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
