const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    textContent: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Page", PageSchema);
