const express = require("express");
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  rejectOrder,
  returnOrder,
  deleteOrder,
} = require("../controllers/orderController");

const router = express.Router();

// Tạo đơn hàng mới
router.post("/", createOrder);

// Lấy danh sách tất cả đơn hàng
router.get("/", getAllOrders);

// Lấy chi tiết đơn hàng theo ID
router.get("/:id", getOrderById);

// Cập nhật trạng thái đơn hàng (chấp nhận đơn hàng)
router.put("/:id/status", updateOrderStatus);

// Từ chối đơn hàng
router.put("/:id/reject", rejectOrder);

// Hoàn trả đơn hàng
router.put("/:id/return", returnOrder);

// Xóa đơn hàng
router.delete("/:id", deleteOrder);

module.exports = router;
