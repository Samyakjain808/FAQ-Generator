import { generateFAQs } from "../services/api";

const GenerateButton = ({ onGenerated }) => {
  const handleClick = async () => {
    await generateFAQs();
    onGenerated();
  };

  return (
    <button className="secondary-btn" onClick={handleClick}>
      Generate FAQs
    </button>
  );
};

export default GenerateButton;
