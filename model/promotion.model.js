const mongoose = require("mongoose");
const promotionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    discountType: {
      type: String,
      enum: ["percentage", "amount"],
      required: true,
    },
    discountValue: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    validFrom: { type: Date, required: true },
    validTo: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Promotion", promotionSchema);
