const ResultCard = ({ title, result, confidence, type }) => {
  if (!result) return null;

  const isCrop = type === "crop";

  return (
    <div className={`mt-6 p-6 rounded-xl border-l-8 shadow-sm ${
      isCrop ? "bg-blue-50 border-blue-500" : "bg-emerald-50 border-emerald-500"
    }`}>
      <h3 className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
        {title}
      </h3>
      <p className="text-2xl font-bold text-gray-800 mt-1 capitalize">
        {result}
      </p>
      {confidence && (
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Confidence Level</span>
            <span>{confidence}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-600 h-2 rounded-full" 
              style={{ width: confidence }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultCard;