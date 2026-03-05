import React, { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

function DiseasePage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    // Example for DiseasePage.jsx
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/predict-disease",
        formData,
      );
      setData(res.data);
    } catch (err) {
      console.error("AI Service Error:", err); // Recruiter-approved debugging
      alert(
        "The AI service is currently unavailable. Please check if the backend is running.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-sm border text-center">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">
        Disease Detection
      </h2>

      <input type="file" id="upload" hidden onChange={handleImage} />
      <label
        htmlFor="upload"
        className="cursor-pointer bg-gray-100 p-10 border-2 border-dashed block rounded-xl hover:bg-gray-200"
      >
        {preview ? (
          <img src={preview} className="h-40 mx-auto rounded-lg" />
        ) : (
          "Upload Leaf Image"
        )}
      </label>

      <button
        onClick={handleSubmit}
        disabled={!image || loading}
        className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-bold"
      >
        {loading ? "Analyzing..." : "Identify Disease"}
      </button>

      {data && (
        <ResultCard
          title="Leaf Analysis"
          result={data.disease_class}
          confidence={data.confidence}
          type="disease"
        />
      )}
    </div>
  );
}

export default DiseasePage;
