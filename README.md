# Contextual FAQ Generator

A full-stack application that crawls a website, extracts content, and generates contextual FAQs through an admin dashboard.

This project demonstrates system design for AI-assisted FAQ generation using a React admin interface and a Node.js backend.

---

## ✨ Features

- Admin UI to input website URLs
- Crawl and extract website content
- Store crawled content in MongoDB
- Generate FAQs from crawled text
- Edit and publish FAQs
- Export published FAQs as JSON

---

## 🧠 AI / Claude API Integration

The system is **architected** to generate FAQs using the **Claude API**.

For this submission:
- Claude API calls are **intentionally disabled**
- Deterministic, hard-coded FAQ generation is used
- This avoids paid API dependency and ensures stable demo output

The AI integration point can be replaced with live Claude API calls **without changing routes, models, or UI**.

---

## 🧱 Tech Stack

### Frontend
- React
- Vite
- Axios
- Material-UI (UI design concepts)

### Backend
- Node.js
- Express.js
- Cheerio (web scraping)
- MongoDB
- Mongoose

### AI (Architecture)
- Claude API (designed, mocked for demo)

---


## ⚙️ Setup Instructions

### 1️⃣ Backend

```bash
cd server
npm install
npm run dev
```
### Server runs on:
```bash
http://localhost:5000
```
### 2️⃣ Frontend
```bash
cd client
npm install
npm run dev
```
### Frontend runs on:
```bash
Frontend runs on:
```




