const axios = require("axios");

module.exports = async function generateWithFreeAI(text) {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
  {
    role: "system",
    content: "You generate FAQs in strict JSON format only."
  },
  {
    role: "user",
    content: `
From the following website content, generate exactly 5 FAQs.

Return ONLY valid JSON in this format:
[
  {
    "question": "string",
    "answer": "string"
  }
]

Website content:
${text}
`
  }
]
,
        temperature: 0.3
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        timeout: 20000
      }
    );

    return response.data.choices[0].message.content;
  } catch (err) {
    console.error("Groq API Error:", err.response?.data || err.message);
    throw err;
  }
};
