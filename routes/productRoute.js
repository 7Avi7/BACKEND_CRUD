const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to fetch all products

router.get("/", productController.getAllProducts);

// Route to fetch a specific product by ID
router.get("/:id", productController.getProductById);

// Route to fetch a specific product by name

router.get("/name/:name", productController.getProductByName);

// Route to fetch products by price
router.get("/price/:price", productController.getProductsByPrice);

// Route to create a new product
router.post("/", productController.createProduct);

// Route to update a product

router.put("/:id", productController.updateProduct);

// Route to delete a product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
