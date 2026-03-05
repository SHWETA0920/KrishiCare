const ResultCard = ({ title, result, confidence, type }) => {
  if (!result) return null;

  const isCrop = type === "crop";

  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className={`relative overflow-hidden rounded-2xl border-2 p-6 transition-all ${
        isCrop ? "bg-blue-50/50 border-blue-200" : "bg-emerald-50/50 border-emerald-200"
      }`}>
        {/* Background Accent Decor */}
        <div className="absolute -right-4 -top-4 text-6xl opacity-10 select-none">
          {isCrop ? "🌾" : "🔬"}
        </div>

        <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">
          {title}
        </h3>
        
        <div className="flex items-end justify-between">
          <p className={`text-4xl font-black capitalize ${isCrop ? "text-blue-700" : "text-emerald-700"}`}>
            {result}
          </p>
          {confidence && (
            <div className="text-right">
              <span className="text-sm font-bold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                {confidence} Match
              </span>
            </div>
          )}
        </div>

        {confidence && (
          <div className="mt-4">
            <div className="w-full bg-gray-200/50 rounded-full h-3 overflow-hidden border border-gray-100">
              <div 
                className={`h-full transition-all duration-1000 ease-out ${isCrop ? "bg-blue-500" : "bg-emerald-500"}`}
                style={{ width: confidence }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;