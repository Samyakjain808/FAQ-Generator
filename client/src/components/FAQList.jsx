import FAQItem from "./FAQItem";

const FAQList = ({ faqs, onUpdate }) => {
  if (!faqs.length) {
    return <p className="empty-text">No FAQs generated yet.</p>;
  }

  return (
    <div className="faq-list">
      <h2>Generated FAQs</h2>
      {faqs.map((faq) => (
        <FAQItem key={faq._id} faq={faq} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default FAQList;
