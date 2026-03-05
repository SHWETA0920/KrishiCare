import React, { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

function CropPage() {
  const [form, setForm] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API call to your Flask backend
      const res = await axios.post("http://127.0.0.1:5000/predict-crop", form);
      setResult(res.data.recommended_crop);
    } catch {
      alert("Error connecting to the AI model.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        Crop Recommendation
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-600 capitalize">
              {key}
            </label>
            <input
              type="number"
              name={key}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        ))}
        <button
          className="col-span-2 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? "Processing..." : "Predict Best Crop"}
        </button>
      </form>

      <ResultCard title="Recommended Crop" result={result} type="crop" />
    </div>
  );
}

export default CropPage;
