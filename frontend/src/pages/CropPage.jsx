import React, { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

function CropPage() {
  const [form, setForm] = useState({
    N: "", P: "", K: "", temperature: "", humidity: "", ph: "", rainfall: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict-crop", form);
      setResult(res.data.recommended_crop);
    } catch {
      alert("Error connecting to the AI model.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-12 items-start">
      <div className="lg:col-span-2 space-y-6">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">Precision Farming</span>
        <h2 className="text-5xl font-black text-gray-900 leading-tight">
          Find the <span className="text-green-600 underline decoration-green-200 underline-offset-8">Perfect Crop</span> for Your Land.
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our AI analyzes soil nutrients and climate patterns to provide scientifically backed crop recommendations, ensuring maximum yield.
        </p>
      </div>

      <div className="lg:col-span-3 bg-white p-8 rounded-3xl shadow-xl shadow-green-900/5 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(form).map((key) => (
              <div key={key} className="relative">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">
                  {key} Value
                </label>
                <input
                  type="number"
                  name={key}
                  onChange={handleChange}
                  placeholder={`Enter ${key}...`}
                  required
                  className="w-full bg-gray-50 border-2 border-gray-100 p-3 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-300"
                />
              </div>
            ))}
          </div>
          
          <button
            className="w-full bg-green-700 text-white py-4 rounded-xl font-black text-lg hover:bg-green-800 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:translate-y-0 flex items-center justify-center gap-3"
            disabled={loading}
          >
            {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : "✨ Analyze Soil Data"}
          </button>
        </form>

        <ResultCard title="Precision Recommendation" result={result} type="crop" />
      </div>
    </div>
  );
}

export default CropPage;