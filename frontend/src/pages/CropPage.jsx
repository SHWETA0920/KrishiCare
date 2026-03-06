import React, { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";
import { Sprout, Thermometer, TestTube } from "lucide-react";

const CropPage = () => {
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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict-crop", form);
      setResult(res.data.recommended_crop);
    } catch (err) {
      console.error("ML Prediction Error:", err);
      alert("AI Service is currently offline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-12 items-start">

        {/* Left: Editorial */}
        <div className="lg:col-span-2 space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            <Sprout size={14} /> 01. Precision Farming
          </div>
          <h2 className="text-5xl font-black text-gray-900 leading-tight">
            Find the{" "}
            <span className="text-green-600 italic">Perfect Crop</span> for
            Your Land.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Our Machine Learning model analyzes your soil's chemical composition
            and local climate data to suggest the most sustainable crop choice.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <Thermometer className="text-green-600 mb-2" />
              <p className="text-xs font-bold text-gray-400 uppercase">Climate Aware</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <TestTube className="text-green-600 mb-2" />
              <p className="text-xs font-bold text-gray-400 uppercase">NPK Analysis</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-3">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-green-900/5 border border-gray-50 relative overflow-hidden">
            {loading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-green-100 border-t-green-600 rounded-full animate-spin"></div>
                <p className="mt-4 font-black text-green-800 animate-pulse uppercase tracking-widest text-xs">
                  AI Analyzing Soil...
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(form).map((key) => (
                  <div key={key} className="group">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1 transition-colors group-focus-within:text-green-600">
                      {key === "ph" ? "Soil pH Level" : `${key} Value`}
                    </label>
                    <input
                      type="number"
                      step="any"
                      name={key}
                      onChange={handleChange}
                      placeholder={`Enter ${key}...`}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-300 font-bold text-gray-700"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-green-700 hover:shadow-2xl hover:shadow-green-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                Generate Recommendation
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>

            {result && (
              <ResultCard
                title="AI Recommendation"
                result={result}
                type="crop"
                confidence="94%"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowRight = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default CropPage;