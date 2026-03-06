import React, { useState } from "react";
import { schemesData } from "../data/schemesData";
import {
  Search,
  ExternalLink,
  CheckCircle,
  MapPin,
  Share2,
  Phone,
  Users,
  ArrowRight,
} from "lucide-react";

const SchemesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedState, setSelectedState] = useState("All India");

  const categories = [
    "All",
    "Financial",
    "Irrigation",
    "Infrastructure",
    "Insurance",
    "Pension",
    "Organic",
  ];
  const statesList = [
    "All India",
    "Odisha",
    "Punjab",
    "Haryana",
    "Maharashtra",
    "Uttar Pradesh",
  ];

  const filteredSchemes = schemesData.filter((scheme) => {
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || scheme.category === activeCategory;
    const matchesState =
      selectedState === "All India" || scheme.state === selectedState;

    return matchesSearch && matchesCategory && matchesState;
  });

  const handleShare = (scheme) => {
    const message = `*Government Scheme Alert: ${scheme.name}*\n\n${scheme.description}\n\nApply here: ${scheme.applyLink}\n\nShared via KrishiCare`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 font-sans">
      {/* Dynamic Header Section */}
      <div className="relative overflow-hidden bg-white pt-32 pb-20 px-6 border-b border-slate-200">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Financial Aid & Subsidies
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
            Government{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">
              Schemes
            </span>{" "}
            Hub
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Empowering farmers with instant access to subsidies, crop insurance,
            and financial programs.
          </p>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Refined Search Bar */}
              <div className="relative w-full max-w-lg group">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-500 transition-colors"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by name, crop or keyword..."
                  className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all shadow-sm"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* State Filter */}
              <div className="relative w-full md:w-56">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
                  size={18}
                />
                <select
                  className="w-full pl-11 pr-10 py-4 rounded-2xl border border-slate-200 bg-slate-50 font-bold text-slate-700 outline-none focus:ring-4 focus:ring-green-500/10 appearance-none shadow-sm cursor-pointer transition-all"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  {statesList.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Category Filter Chips - Improved Scroll & UI */}
            <div className="flex gap-3 overflow-x-auto justify-start md:justify-center no-scrollbar pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-200 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-green-500 hover:text-green-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expert Support - Modernized Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 grid md:grid-cols-2 gap-6 relative z-20">
        <a
          href="tel:18001801551"
          className="group flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="bg-green-600 p-4 rounded-2xl text-white shadow-lg shadow-green-200 group-hover:rotate-12 transition-transform">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase text-green-600 mb-1">
                24/7 Toll-Free
              </p>
              <h4 className="text-xl font-bold text-slate-900">
                Kisan Call Center
              </h4>
            </div>
          </div>
          <div className="text-right hidden sm:block font-black text-slate-800 text-lg">
            1800-180-1551
          </div>
        </a>

        <button
          onClick={() =>
            window.open("https://odisha.gov.in/agriculture", "_blank")
          }
          className="group flex items-center justify-between bg-slate-900 p-6 rounded-3xl shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="bg-white/10 p-4 rounded-2xl text-white backdrop-blur-md group-hover:rotate-12 transition-transform">
              <Users size={24} />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase text-green-400 mb-1">
                Local Support
              </p>
              <h4 className="text-xl font-bold text-white">
                Agri-Block Office
              </h4>
            </div>
          </div>
          <div className="bg-green-500 text-white px-4 py-2 rounded-xl font-black text-xs group-hover:bg-white group-hover:text-green-600 transition-colors">
            LOCATE OFFICE
          </div>
        </button>
      </div>

      {/* Schemes Main Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid lg:grid-cols-2 gap-10">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative group flex flex-col min-h-137.5"
          >
            {/* Elegant Floating Badge */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-red-50 text-red-600 text-[10px] font-black px-3 py-1 rounded-full border border-red-100">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
              LATEST UPDATE
            </div>

            <div className="flex justify-between items-start mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-600 bg-green-50/50 border border-green-100 px-4 py-1.5 rounded-lg">
                {scheme.category}
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => handleShare(scheme)}
                  className="p-2.5 bg-slate-50 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                  title="Share to WhatsApp"
                >
                  <Share2 size={18} />
                </button>
                <a
                  href={scheme.applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <h3 className="text-3xl font-black text-slate-800 mb-4 group-hover:text-green-600 transition-colors tracking-tight leading-tight">
              {scheme.name}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed mb-10 grow">
              {scheme.description}
            </p>

            {/* Content Split: Benefits & Video */}
            <div className="grid md:grid-cols-2 gap-8 items-start mt-auto bg-slate-50/50 p-6 rounded-4xl border border-slate-100">
              <div className="space-y-4">
                <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest flex items-center gap-2">
                  <div className="w-4 h-1 bg-green-500 rounded-full"></div>
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {scheme.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-snug"
                    >
                      <CheckCircle
                        size={16}
                        className="text-green-500 shrink-0 mt-0.5"
                      />
                      <span className="wrap-break-word">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-white border-4 border-white shadow-xl group-hover:shadow-green-100 transition-all duration-500">
                <iframe
                  className="w-full h-full object-cover"
                  src={scheme.videoUrl}
                  title={scheme.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <a
              href={scheme.applyLink}
              target="_blank"
              rel="noreferrer"
              className="mt-10 w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-green-200 active:scale-[0.98]"
            >
              Start Registration
              <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple helper icon for the select dropdown
const ChevronDown = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default SchemesPage;
