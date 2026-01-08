const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const Page = require("../models/Page");

router.post("/", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const response = await axios.get(url, {
      timeout: 10000,
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const $ = cheerio.load(response.data);
    const textContent = $("body")
      .text()
      .replace(/\s+/g, " ")
      .trim();

    if (!textContent) {
      return res.status(400).json({ error: "No readable content found" });
    }

    const page = await Page.create({ url, textContent });
    res.json(page);
  } catch (err) {
    console.error("Crawl error:", err.message);
    res.status(500).json({ error: "Failed to crawl website" });
  }
});

module.exports = router;
