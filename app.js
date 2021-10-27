const express = require("express");
let products = require("./data");
const productRoutes = require("./apis/products/routes");
const connectDB = require("./database");

const app = express();

// Middleware -> before all requests!
app.use(express.json());

// Logger Method Middleware
app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.hostname}:${PORT}${req.path}`
  );
  next();
});

app.use("/api/products", productRoutes);

// Not Found Middleware
app.use((req, res, next) => {
  if (req.path !== `${req.path}`) return;
  res.status(404).json({ message: "Path Not Found" }), next();
});

connectDB();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
