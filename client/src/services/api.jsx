import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ SAME PORT
});

export const crawlWebsite = (url) =>
  API.post("/crawl", { url });

export const generateFAQs = () =>
  API.post("/faqs/generate");

export const fetchFAQs = () =>
  API.get("/faqs");

export const updateFAQ = (id, data) =>
  API.put(`/faqs/${id}`, data);

export const exportFAQs = () =>
  API.get("/faqs/export");

export default API;
