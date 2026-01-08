import { exportFAQs } from "../services/api";

const ExportFAQs = () => {
  const handleExport = async () => {
    const res = await exportFAQs();

    const blob = new Blob([JSON.stringify(res.data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "published-faqs.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button className="secondary-btn" onClick={handleExport}>
      Export Published FAQs (JSON)
    </button>
  );
};

export default ExportFAQs;
