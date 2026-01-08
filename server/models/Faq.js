const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    published: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faq", FaqSchema);
