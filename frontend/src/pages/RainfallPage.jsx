import React, { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";
import { CloudRain, Globe, Calendar, MapPin, Search } from "lucide-react";

function RainfallPage() {
  const [form, setForm] = useState({
    year: new Date().getFullYear(),
    month: "1",
    division_code: "30", // Default selection
  });
  
  const [selectedRegionName, setSelectedRegionName] = useState("Vidarbha");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Standard Indian Subdivisions Mapping
  const subdivisions = [
    { name: "Vidarbha", code: "30" },
    { name: "Odisha", code: "13" },
    { name: "Punjab", code: "5" },
    { name: "West Rajasthan", code: "8" },
    { name: "Coastal Karnataka", code: "33" },
    { name: "Kerala", code: "35" },
    { name: "Gangetic West Bengal", code: "10" },
    { name: "Assam & Meghalaya", code: "2" }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Instantly update UI label when location changes
    if (name === "division_code") {
      const region = subdivisions.find(s => s.code === value);
      setSelectedRegionName(region ? region.name : "Selected Region");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Payload includes all 3 parameters to ensure output changes by location
      const payload = {
        year: parseInt(form.year),
        month: parseInt(form.month),
        division_code: parseInt(form.division_code),
      };

      const res = await axios.post("http://127.0.0.1:5000/predict-rainfall", payload);
      setResult(res.data.predicted_rainfall);
    } catch (err) {
      console.error("Rainfall API Error:", err);
      alert("Connectivity Issue: Please ensure Flask backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* ── HEADER ── */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 leading-tight">
          <CloudRain className="text-cyan-600" size={42} />
          Regional Precipitation Forecast
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Location-Agnostic Engine
          </span>
          <span className="text-gray-400 text-sm">Currently Viewing: <strong>{selectedRegionName}</strong></span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* ── MAIN INPUT AREA ── */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* LOCATION SELECTOR */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                <MapPin size={18} className="text-cyan-600" /> Target Subdivision
              </label>
              <select
                name="division_code"
                value={form.division_code}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50 outline-none transition-all cursor-pointer bg-gray-50/50"
              >
                {subdivisions.map((sub) => (
                  <option key={sub.code} value={sub.code}>{sub.name}</option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* YEAR INPUT */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Calendar size={18} className="text-cyan-600" /> Forecast Year
                </label>
                <input
                  type="number"
                  name="year"
                  min="2020"
                  max="2050"
                  value={form.year}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50 outline-none transition-all bg-gray-50/50"
                  required
                />
              </div>

              {/* MONTH SELECTOR */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Calendar size={18} className="text-cyan-600" /> Prediction Month
                </label>
                <select
                  name="month"
                  value={form.month}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50 outline-none transition-all cursor-pointer bg-gray-50/50"
                >
                  {months.map((m, i) => (
                    <option key={i + 1} value={i + 1}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-5 rounded-2xl font-black text-white text-lg shadow-xl transition-all active:scale-95 ${
                loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-cyan-200"
              }`}
              disabled={loading}
            >
              {loading ? "Crunching Regional Data..." : "Generate Local Forecast"}
            </button>
          </form>

          {/* RESULT DISPLAY */}
          <div className="mt-4">
            <ResultCard title={`Predicted Rainfall for ${selectedRegionName}`} result={result} type="rainfall" />
          </div>
        </div>

        {/* ── SIDEBAR: ANALYTICS INFO ── */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
              <Globe size={120} />
            </div>
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
              <Search size={22} className="text-cyan-400" /> Engine Logic
            </h3>
            
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong>Spatial Variance:</strong> The model adjusts weights based on the unique climatic history of the selected subdivision.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong>Temporal Patterns:</strong> Handles seasonality shifts across different years to predict outliers like droughts or heavy monsoons.
                </p>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-cyan-400/60 font-medium tracking-widest uppercase">
              Part of KrishiCare AI Suite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RainfallPage;