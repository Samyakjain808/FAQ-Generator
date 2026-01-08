import { useEffect, useState } from "react";
import CrawlForm from "./CrawlForm";
import GenerateButton from "./GenerateButton";
import FAQList from "./FAQList";
import ExportFAQs from "./ExportFAQs";
import { fetchFAQs } from "../services/api";

const AdminDashboard = () => {
  const [faqs, setFaqs] = useState([]);

  const loadFAQs = async () => {
    const res = await fetchFAQs();
    setFaqs(res.data);
  };

  useEffect(() => {
    loadFAQs();
  }, []);

  return (
    <div className="dashboard">
      <div className="actions-card">
        <CrawlForm />
        <GenerateButton onGenerated={loadFAQs} />
        <ExportFAQs />
      </div>

      <FAQList faqs={faqs} onUpdate={loadFAQs} />
    </div>
  );
};

export default AdminDashboard;
