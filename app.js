const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./libs/db");
dotenv.config();

const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 5000;


//Product
const productRoutes = require("./routes/productsRoute");
app.use("/api/products", productRoutes);
//Order
const ordersRoute = require("./routes/ordersRoute");
app.use("/api/orders", ordersRoute);

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  connectDB();
});
