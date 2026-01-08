const express = require("express");
const router = express.Router();
const Page = require("../models/Page");
const Faq = require("../models/Faq");

// GET /api/faqs  ✅ REQUIRED FOR FRONTEND
router.get("/", async (req, res) => {
  const faqs = await Faq.find().sort({ createdAt: -1 });
  res.json(faqs);
});

// POST /api/faqs/generate
router.post("/generate", async (req, res) => {
  try {
    const page = await Page.findOne().sort({ createdAt: -1 });

    if (!page || !page.textContent) {
      return res.status(400).json({ error: "No crawled content found" });
    }

    // clear old FAQs
    await Faq.deleteMany({});

    const faqs = [
      {
        question: "What is the purpose of this website?",
        answer:
          "This website is used for demonstration and documentation purposes only.",
      },
      {
        question: "Can this website be used for operational or production use?",
        answer:
          "No. This website is intended only for examples and testing.",
      },
      {
        question: "Who is the target audience of this website?",
        answer:
          "Developers, students, and learners who need sample content.",
      },
    ];

    const saved = await Faq.insertMany(
      faqs.map((f) => ({ ...f, published: false }))
    );

    res.json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate FAQs" });
  }
});

// PUT /api/faqs/:id  ✅ SAVE BUTTON FIX
router.put("/:id", async (req, res) => {
  const faq = await Faq.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(faq);
});

// GET /api/faqs/export
router.get("/export", async (req, res) => {
  try {
    const publishedFaqs = await Faq.find({ published: true }).select(
      "-_id question answer"
    );

    res.json(publishedFaqs);
  } catch (err) {
    console.error("Export error:", err);
    res.status(500).json({ error: "Failed to export FAQs" });
  }
});

module.exports = router; // 🔴 THIS LINE IS CRITICAL
