# 🧠 ATS Insight — LLM-Powered Resume Score Checker

**ATS Insight** is a full-stack web application that evaluates your resume's compatibility with Applicant Tracking Systems (ATS) using advanced LLMs (like Gemini). It provides a **score** along with **clear improvement suggestions**, helping you tailor your resume for better job visibility.

---

## 🚀 Features

- ✅ Upload your resume or text
- 🧠 Uses Gemini AI to evaluate content
- 📊 Returns ATS score (0–100)
- 📌 Lists actionable suggestions (e.g., formatting, keyword usage)
- 💡 Uses TailwindCSS for clean, responsive UI

---

## 🛠️ Tech Stack

| Frontend     | Backend         | AI Layer         |
|--------------|------------------|------------------|
| React.js     | Node.js + Express | Gemini (LLM API) |
| Tailwind CSS | RESTful API       | Google Generative AI |

---

## 🧪 Installation Guide

```bash
# Clone the repo
git clone https://github.com/yourusername/ats-insight.git
cd ats-insight

# Setup frontend
cd client
npm install
npm run dev

# Setup backend
cd ../server
npm install
npm run dev
