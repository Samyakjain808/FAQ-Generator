const axios = require("axios");

module.exports = async function generateWithClaude(text) {
  const res = await axios.post(
    "https://api.anthropic.com/v1/messages",
    {
      model: "claude-3-sonnet-20240229",
      max_tokens: 600,
      messages: [
        {
          role: "user",
          content: `Generate 5 FAQs with answers:\n${text}`
        }
      ]
    },
    {
      headers: {
        "x-api-key": process.env.CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      }
    }
  );

  return res.data.content[0].text;
};
