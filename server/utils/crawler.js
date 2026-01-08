import axios from "axios";
import cheerio from "cheerio";

export async function crawlWebsite(url) {
  const { data } = await axios.get(url, { timeout: 10000 });
  const $ = cheerio.load(data);

  // ❌ REMOVE JUNK
  $("script, style, noscript, svg").remove();

  // ✅ GET CLEAN TEXT
  const text = $("body")
    .text()
    .replace(/\s+/g, " ")
    .replace(/\{.*?\}/g, "") // remove CSS blocks
    .trim();

  return text.slice(0, 8000); // HARD LIMIT (important)
}
