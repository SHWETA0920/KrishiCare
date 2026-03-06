import React from 'react';

const TechStats = () => {
  const stats = [
    { label: "Disease Model Accuracy", value: "95.8%", detail: "CNN Architecture" },
    { label: "Crop Recommendation", value: "99.2%", detail: "Random Forest" },
    { label: "Processing Time", value: "< 2.0s", detail: "Real-time Inference" },
    { label: "Dataset Size", value: "20k+", detail: "Augmented Samples" }
  ];

  return (
    <section className="py-12 bg-emerald-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="border-r border-emerald-700 last:border-0">
              <p className="text-4xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-emerald-200 text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-emerald-400 text-xs mt-1 italic">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStats;