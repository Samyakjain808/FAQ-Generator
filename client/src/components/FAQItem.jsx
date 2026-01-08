import { useState } from "react";
import { updateFAQ } from "../services/api";

const FAQItem = ({ faq, onUpdate }) => {
  const [question, setQuestion] = useState(faq.question);
  const [answer, setAnswer] = useState(faq.answer);
  const [published, setPublished] = useState(faq.published);

  const handleSave = async () => {
    await updateFAQ(faq._id, { question, answer, published });
    onUpdate();
  };

  return (
    <div className="faq-card">
      <input
        className="input"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <textarea
        className="textarea"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <div className="faq-footer">
        <label>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />{" "}
          Published
        </label>

        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FAQItem;
