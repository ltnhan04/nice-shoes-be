const Order = require("../model/order.model");

// Tạo đơn hàng mới
const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: "Error creating order", error });
  }
};

// Lấy danh sách tất cả đơn hàng
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("products.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: "Error fetching orders", error });
  }
};

// Lấy chi tiết đơn hàng theo ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user").populate("products.product");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: "Error fetching order", error });
  }
};

// Cập nhật trạng thái đơn hàng
const updateOrderStatus = async (req, res) => {
  const { status } = req.body; 
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: "Error updating order status", error });
  }
};

// Từ chối đơn hàng
const rejectOrder = async (req, res) => {
  try {
    const rejectedOrder = await Order.findByIdAndUpdate(req.params.id, { status: "rejected" }, { new: true });
    if (!rejectedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(rejectedOrder);
  } catch (error) {
    res.status(400).json({ message: "Error rejecting order", error });
  }
};

// Hoàn trả đơn hàng
const returnOrder = async (req, res) => {
  try {
    const returnedOrder = await Order.findByIdAndUpdate(req.params.id, { status: "returned" }, { new: true });
    if (!returnedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(returnedOrder);
  } catch (error) {
    res.status(400).json({ message: "Error returning order", error });
  }
};

// Xóa đơn hàng
const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting order", error });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  rejectOrder,
  returnOrder,
  deleteOrder,
};
// Cập nhật trạng thái đơn hàng: PUT /api/orders/:id/status.
// Từ chối đơn hàng : PUT /api/orders/:id/reject.
// Hoàn trả đơn hàng: PUT /api/orders/:id/return.