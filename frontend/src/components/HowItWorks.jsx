import React from "react";
import { Sprout, Search, FileText, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom'; // Ensure this is imported

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Input Soil Data",
      desc: "Enter your field's N-P-K values, pH level, and local rainfall data into our smart form.",
      icon: <FileText size={32} className="text-emerald-700" />,
      color: "bg-blue-50",
    },
    {
      id: "02",
      title: "AI Analysis",
      desc: "Our trained Random Forest and CNN models process your data against thousands of agricultural data points.",
      icon: <Search size={32} className="text-emerald-700" />,
      color: "bg-emerald-50",
    },
    {
      id: "03",
      title: "Get Results",
      desc: "Receive an instant crop recommendation or a detailed diagnosis of any detected plant diseases.",
      icon: <Sprout size={32} className="text-emerald-700" />,
      color: "bg-lime-50",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">
              The Process
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              From Soil to Success in <br />{" "}
              <span className="text-emerald-600">Three Simple Steps</span>
            </h3>
          </div>
          <p className="text-gray-500 text-lg md:max-w-xs border-l-4 border-emerald-100 pl-6">
            Harnessing the power of Machine Learning to simplify complex
            agricultural decisions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 relative ">
          <div className=" hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-emerald-100 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div key={step.id} className=" relative group z-10">
              <div className="bg-green-100/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 hover:-translate-y-2 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className={`${step.color} p-5 rounded-2xl border border-white shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  <span className="text-5xl font-black text-green-200 group-hover:text-emerald-600 transition-colors select-none">
                    {step.id}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                  "{step.desc}"
                </p>
                <div className="mt-8 h-1 w-12 bg-emerald-500 rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>

              {index < 2 && (
                <div className="md:hidden flex justify-center py-4 text-emerald-200">
                  <ArrowRight size={32} className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- FIXED: Call to Action Anchor --- */}
        <div className="mt-20 text-center">
          <Link 
            to="/crop" 
            className="inline-flex items-center gap-2 text-emerald-700 font-extrabold hover:gap-4 transition-all group cursor-pointer"
          >
            <span>Launch Soil Analysis Tool</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;