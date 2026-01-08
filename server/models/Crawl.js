const mongoose = require("mongoose");

const CrawlSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    },
    textContent: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crawl", CrawlSchema);
