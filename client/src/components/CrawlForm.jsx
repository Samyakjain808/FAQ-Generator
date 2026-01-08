import { useState } from "react";
import { crawlWebsite } from "../services/api";

const CrawlForm = () => {
  const [url, setUrl] = useState("");

  const handleCrawl = async () => {
    try {
      await crawlWebsite(url);
      alert("Website crawled successfully");
    } catch {
      alert("Crawl failed. Use https://example.com");
    }
  };

  return (
    <div className="form-row">
      <input
        className="input"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className="primary-btn" onClick={handleCrawl}>
        Crawl Website
      </button>
    </div>
  );
};

export default CrawlForm;
