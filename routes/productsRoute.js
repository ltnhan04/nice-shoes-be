const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Tạo sản phẩm
router.post("/", createProduct);
// Lấy tất cả sản phẩm
router.get("/", getAllProducts);
// Lấy chi tiết sản phẩm theo ID
router.get("/:id", getProductById);
// Cập nhật sản phẩm
router.put("/:id", updateProduct);
// Xóa sản phẩm
router.delete("/:id", deleteProduct);

module.exports = router;
