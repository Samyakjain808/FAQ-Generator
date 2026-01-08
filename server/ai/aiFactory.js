/**
 * Stable AI factory for assignment demo
 * NO external API calls
 */

async function generateFAQs(text) {
  return [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website provides informational content intended for documentation, learning, or demonstration purposes.",
      published: false
    },
    {
      question: "Who is the target audience of this website?",
      answer:
        "The target audience includes developers, learners, and users seeking reference material.",
      published: false
    },
    {
      question: "What type of content does this website provide?",
      answer:
        "The website offers example-based content, reference documentation, and general informational text.",
      published: false
    }
  ];
}

module.exports = { generateFAQs };
