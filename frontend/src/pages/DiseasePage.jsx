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
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict-disease", formData);
      setData(res.data);
    } catch { 
      // Removed 'err' entirely since it wasn't being used
      alert("AI Service is currently offline. Please check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-emerald-900 mb-4">Plant Health Scanner</h2>
        <p className="text-gray-600 max-w-xl mx-auto">Upload a photo of your plant's leaf and our computer vision model will diagnose potential diseases and suggest treatments.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-emerald-900/10 border border-gray-50">
        <input type="file" id="upload" hidden onChange={handleImage} accept="image/*" />
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <label
            htmlFor="upload"
            className={`group relative overflow-hidden h-80 cursor-pointer border-3 border-dashed rounded-3xl flex flex-col items-center justify-center transition-all ${
              preview ? "border-emerald-500 bg-emerald-50" : "border-gray-200 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            {preview ? (
              <>
                <img src={preview} className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform group-hover:scale-105" alt="Leaf Preview" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white font-bold bg-black/50 px-4 py-2 rounded-full">Change Image</p>
                </div>
              </>
            ) : (
              <div className="text-center p-6">
                <div className="text-6xl mb-4 grayscale group-hover:grayscale-0 transition-all">📸</div>
                <p className="text-gray-500 font-medium">Click to capture or upload leaf photo</p>
              </div>
            )}
          </label>

          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2 underline decoration-emerald-200">Instructions:</h4>
              <ul className="text-sm text-emerald-700 space-y-2 list-disc list-inside">
                <li>Ensure high light visibility</li>
                <li>Keep the leaf centered in frame</li>
                <li>Focus on the infected area</li>
              </ul>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!image || loading}
              className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 disabled:opacity-30 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
            >
              {loading ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> : "Run Diagnosis"}
            </button>
          </div>
        </div>

        {data && (
          <ResultCard
            title="AI Diagnosis Result"
            result={data.disease_class}
            confidence={data.confidence}
            type="disease"
          />
        )}
      </div>
    </div>
  );
}

export default DiseasePage;