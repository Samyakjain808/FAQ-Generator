const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const crawlRoutes = require("./routes/crawl");
const faqRoutes = require("./routes/faq");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/crawl", crawlRoutes);
app.use("/api/faqs", faqRoutes);

// ✅ SINGLE PORT (NO CONFUSION)
const PORT = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/faq-generator")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error(err));
