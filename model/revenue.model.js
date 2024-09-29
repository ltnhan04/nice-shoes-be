const mongoose = require("mongoose");

const revenueSchema = new mongoose.Schema(
  {
    totalRevenue: { type: Number, required: true },
    totalCost: { type: Number, required: true },
    profit: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Revenue", revenueSchema);
