const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    stockIn: { type: Number, required: true },
    stockOut: { type: Number, default: 0 },
    currentStock: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
