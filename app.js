const express = require("express");
const mongoose = require("mongoose");
const productsRoute = require("./routes/productRoute");
const personRoute = require("./routes/personRoute");
const app = express();

const PORT = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/testparam")
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

// Routes
app.use("/products", productsRoute);

app.use("/persons", personRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
