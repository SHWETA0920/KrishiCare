import React from "react";

const ResultCard = ({ title, result, confidence, type }) => {
  if (!result) return null;

  const isCrop = type === "crop";
  const isRainfall = type === "rainfall";

  // Logic to determine theme based on rainfall intensity
  const getRainfallTheme = (value) => {
    const amount = parseFloat(value);
    // Light Rain / Dry Season
    if (amount < 50) return "bg-cyan-50/50 border-cyan-200 text-cyan-700 accent-cyan-400 icon-💧";
    // Moderate Rain
    if (amount < 200) return "bg-blue-100/50 border-blue-300 text-blue-800 accent-blue-600 icon-🌧️";
    // Heavy Monsoon
    return "bg-slate-900 border-slate-700 text-cyan-400 accent-cyan-500 icon-⛈️ dark-theme";
  };

  const getThemeClasses = () => {
    if (isCrop) return "bg-blue-50/50 border-blue-200 text-blue-700 accent-blue-500 icon-🌾";
    if (isRainfall) return getRainfallTheme(result);
    // Default / Disease Detection
    return "bg-emerald-50/50 border-emerald-200 text-emerald-700 accent-emerald-500 icon-🔬";
  };

  const theme = getThemeClasses();
  const isDark = theme.includes("dark-theme");

  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className={`relative overflow-hidden rounded-2xl border-2 p-6 transition-all duration-700 ${theme.split(' accent')[0]}`}>
        
        {/* Dynamic Background Icon */}
        <div className="absolute -right-4 -top-4 text-6xl opacity-10 select-none">
          {theme.split('icon-')[1]}
        </div>

        <h3 className={`text-xs uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? "text-cyan-200/50" : "text-gray-500"}`}>
          {title}
        </h3>
        
        <div className="flex items-end justify-between">
          <p className={`text-4xl font-black capitalize ${theme.split(' ')[2]}`}>
            {result}
          </p>
          {confidence && (
            <div className="text-right">
              <span className={`text-sm font-bold px-3 py-1 rounded-full shadow-sm border ${
                isDark ? "bg-slate-800 text-cyan-300 border-slate-700" : "bg-white text-gray-600 border-gray-100"
              }`}>
                {confidence} Match
              </span>
            </div>
          )}
        </div>

        {/* Progress Bar for Confidence (used in Disease Detection) */}
        {confidence && (
          <div className="mt-4">
            <div className={`w-full rounded-full h-3 overflow-hidden border ${isDark ? "bg-slate-800 border-slate-700" : "bg-gray-200/50 border-gray-100"}`}>
              <div 
                className={`h-full transition-all duration-1000 ease-out ${theme.split('accent-')[1].split(' ')[0]}`}
                style={{ width: confidence }}
              ></div>
            </div>
          </div>
        )}

        {/* Monsoon Alert Label */}
        {isRainfall && parseFloat(result) > 200 && (
          <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            High Intensity Monsoon Predicted
          </p>
        )}
      </div>
    </div>
  );
};

export default ResultCard;