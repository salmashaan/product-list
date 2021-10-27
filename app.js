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

// Error Middleware (only one with 4 parameters, this is what is triggered when `catch(error)` is needed
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: "Internal Server Error" });
});

connectDB();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
