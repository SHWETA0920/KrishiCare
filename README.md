# 🌿 KrishiCare — AI-Powered Precision Farming Platform

> Empowering Indian farmers with data-driven crop advisory, plant disease diagnosis, and regional rainfall forecasting through Machine Learning.

![Python](https://img.shields.io/badge/Python-3.9+-blue?style=flat-square&logo=python)
![Flask](https://img.shields.io/badge/Flask-2.x-black?style=flat-square&logo=flask)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![scikit-learn](https://img.shields.io/badge/scikit--learn-ML-F7931E?style=flat-square&logo=scikit-learn)
![TensorFlow](https://img.shields.io/badge/TensorFlow-CNN-FF6F00?style=flat-square&logo=tensorflow)

---

## 📌 Short Description

**KrishiCare** is a full-stack AI farming platform built with React and Flask, integrating three Machine Learning models — a Random Forest crop recommender (99.3% accuracy), a CNN-based plant disease detector, and a Stacked Ensemble rainfall forecaster (R²=0.81) — served via 3 REST APIs with real-time result visualization.

---

## ✨ Features

| Feature | Technology | Accuracy |
|--------|-----------|----------|
| 🌾 Crop Recommendation | Random Forest + MinMaxScaler | 99.3% |
| 🔬 Plant Disease Detection | CNN (TensorFlow/Keras) | Image Classification |
| 🌧️ Rainfall Forecasting | Stacked Ensemble Regressor | R²=0.81, MAE=35.96mm |
| 🏛️ Government Schemes | Static Data + WhatsApp Share | 12 Schemes |

---

## 🏗️ Architecture

```
React Frontend (Vite + Tailwind CSS)
        │
        │  HTTP POST (Axios)
        ▼
Flask Backend (app.py)
        │
        ├── /predict-crop      → MinMaxScaler → Random Forest   → Crop Name
        ├── /predict-disease   → PIL Resize   → CNN (.h5)       → Disease + Confidence
        └── /predict-rainfall  → Int Convert  → Stacked Ensemble → Rainfall (mm)
```

---

## 🛠️ Tech Stack

**Frontend**
- React 18, React Router, Tailwind CSS, Axios, Lucide React

**Backend**
- Flask, Flask-CORS, NumPy, Pillow (PIL)

**Machine Learning**
- scikit-learn (Random Forest, Stacked Ensemble, MinMaxScaler)
- TensorFlow / Keras (CNN)
- Pickle (model serialization)

---

## 📁 Project Structure

```
KrishiCare/
├── backend/
│   ├── app.py                  # Flask app — 3 API endpoints
│   ├── utils.py                # Helper functions
│   └── models/
│       ├── model.pkl           # Random Forest (crop)
│       ├── minmaxscaler.pkl    # MinMaxScaler
│       ├── plant_disease_prediction_model.h5  # CNN
│       └── rainfall_model.pkl  # Stacked Ensemble
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   ├── CropPage.jsx
    │   │   ├── DiseasePage.jsx
    │   │   ├── RainfallPage.jsx
    │   │   └── SchemesPage.jsx
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── ResultCard.jsx
    │   │   ├── HowItWorks.jsx
    │   │   └── TechStats.jsx
    │   └── data/
    │       └── schemesData.js
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Node.js 18+
- pip

### 1. Clone the Repository
```bash
git clone https://github.com/SHWETA0920/KrishiCare.git
cd KrishiCare
```

### 2. Backend Setup
```bash
cd backend
pip install flask flask-cors numpy pillow scikit-learn tensorflow
python app.py
```
> Flask runs on `http://127.0.0.1:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
> React runs on `http://localhost:5173`

---

## 📡 API Reference

### POST `/predict-crop`
Predicts the best crop based on soil and climate data.

**Request Body:**
```json
{
  "N": 90, "P": 42, "K": 43,
  "temperature": 20.8,
  "humidity": 82.0,
  "ph": 6.5,
  "rainfall": 202.9
}
```
**Response:**
```json
{
  "status": "success",
  "recommended_crop": "rice"
}
```

---

### POST `/predict-disease`
Detects plant disease from a leaf image.

**Request:** `multipart/form-data` with `image` field (PNG/JPEG/WEBP, max 2MB)

**Response:**
```json
{
  "status": "success",
  "disease_class": "Apple Scab",
  "confidence": "94.23%"
}
```

---

### POST `/predict-rainfall`
Predicts monthly rainfall for an Indian meteorological subdivision.

**Request Body:**
```json
{
  "year": 2025,
  "month": 6,
  "division_code": 30
}
```
**Response:**
```json
{
  "status": "success",
  "predicted_rainfall": "185.43 mm"
}
```

---

## 📊 Model Performance

| Model | Algorithm | Metric | Value |
|-------|-----------|--------|-------|
| Crop Recommendation | Random Forest | Test Accuracy | **99.3%** |
| Disease Detection | CNN (TensorFlow) | Validation Accuracy | Image Classification |
| Rainfall Forecasting | Stacked Ensemble | R² Score | **0.81** |
| Rainfall Forecasting | Stacked Ensemble | MAE | **35.96 mm** |
| Rainfall Forecasting | Stacked Ensemble | RMSE | **55.98 mm** |

---

## 🌾 Supported Crops (22 Classes)

`rice` `maize` `chickpea` `kidneybeans` `pigeonpeas` `mothbeans` `mungbean` `blackgram` `lentil` `pomegranate` `banana` `mango` `grapes` `watermelon` `muskmelon` `apple` `orange` `papaya` `coconut` `cotton` `jute` `coffee`

---

## 🔬 Supported Diseases (8 Classes)

`Apple Scab` `Apple Black Rot` `Cedar Apple Rust` `Apple Healthy` `Corn Common Rust` `Corn Healthy` `Potato Early Blight` `Potato Healthy`

---

## 🌧️ Supported Regions (8 Subdivisions)

`Vidarbha` `Odisha` `Punjab` `West Rajasthan` `Coastal Karnataka` `Kerala` `Gangetic West Bengal` `Assam & Meghalaya`

---

## 🏛️ Government Schemes Covered

12 schemes including PM-KISAN, PMFBY, KCC, PMKSY, e-NAM, PKVY, RKVY, Soil Health Card, and more — with search, category filter, state filter, and WhatsApp sharing.

---

## 🔮 Future Improvements

- [ ] Fix division_code — train region-specific rainfall models
- [ ] Expand disease detection to 38 classes (full PlantVillage dataset)
- [ ] Add more rainfall features (temperature, humidity, ENSO index)
- [ ] Deploy on AWS EC2 + CloudFront with Docker
- [ ] Add user authentication and prediction history dashboard
- [ ] Multilingual support (Hindi) for rural farmers
- [ ] Integrate OpenWeatherMap API for real-time weather data


---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ for Indian Farmers | KrishiCare AI</p>
