import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Cpu,
  Sprout,
  ShieldCheck,
  CloudSun,
} from "lucide-react";
import HowItWorks from "../components/HowItWorks";
import TechStats from "../components/TechStats";

const services = [
  {
    icon: <Cpu className="text-green-400" />,
    title: "Precision Soil Analysis",
    desc: "We analyze NPK and pH levels using machine learning to determine the perfect nutrient balance for your specific land.",
  },
  {
    icon: <Sprout className="text-green-400" />,
    title: "Predictive Crop Advisory",
    desc: "Receive data-backed recommendations for the best crops to plant based on your specific soil and climatic conditions.",
  },
  {
    icon: <ShieldCheck className="text-green-400" />,
    title: "AI Disease Identification",
    desc: "Instantly detect leaf infections by uploading a photo. Our CNN models identify the issue and suggest recovery steps.",
  },
  {
    icon: <CloudSun className="text-green-400" />,
    title: "Climate-Smart Insights",
    desc: "Our models factor in temperature, humidity, and rainfall to ensure your crops are perfectly matched to your environment.",
  },
];

const Dashboard = () => {
  return (
    <div className="bg-white">
      {/* ── 01. HERO ── */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1920"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Agriculture Hero"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.5em] text-xs font-bold mb-5 opacity-90">
            Intelligent Digital Farming Assistant
          </p>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-tight drop-shadow-lg">
            Data-Driven Farming <br /> Made Simple
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/crop"
              className="bg-green-600 px-8 py-3.5 rounded-md font-bold text-sm hover:bg-green-700 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Launch AI Tools
            </Link>
            <Link
              to="/about"
              className="border-2 border-white px-8 py-3.5 rounded-md font-bold text-sm hover:bg-white hover:text-gray-900 transition-all"
            >
              Learn the Science
            </Link>
          </div>
        </div>
      </section>

      {/* ── 02. TECH STATS (New Section) ── */}
      <TechStats />

      {/* ── 03. ABOUT ZIGZAG GRID ── */}
      <section
        id="about"
        className="bg-green-200/50 pt-32 pb-20 px-6 overflow-hidden scroll-mt-5"
      >
        <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Zigzag Organic Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 relative">
            {/* Image 1: Top Left - Slightly tilted */}
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1642683413651-4e9328dcb494?w=800&auto=format&fit=crop&q=60"
                className="organic-shape w-full h-64 object-cover shadow-2xl border-4 border-white"
                alt="Farming Technology"
              />
              <div className="absolute -top-4 -left-4 text-green-200 opacity-20 text-6xl font-black">
                01
              </div>
            </div>

            {/* Image 2: Top Right - Pushed Down (Zig) */}
            <div className="relative mt-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&auto=format&fit=crop&q=60"
                className="organic-shape w-full h-56 object-cover shadow-xl border-4 border-white"
                alt="Greenhouse"
              />
            </div>

            {/* Image 3: Bottom Left - Pushed Up (Zag) */}
            <div className="relative -mt-11 transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1744726010540-bf318d4a691f?w=800&auto=format&fit=crop&q=60"
                className="organic-shape w-full h-60 object-cover shadow-xl border-4 border-white"
                alt="Crop Analysis"
              />
            </div>

            {/* Image 4: Bottom Right - Standard with rotation */}
            <div className="relative mt-1 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
              <img
                src="https://media.istockphoto.com/id/2158369083/photo/young-cucumber-seedlings-on-a-tray-in-a-greenhouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=O8oG-bbxP_pYzqNwhMo5nD9RdLh_3Pw9fNuo5b2WqMs="
                className="organic-shape w-full h-72 object-cover shadow-2xl border-4 border-white"
                alt="Fresh Produce"
              />
            </div>

            {/* Center Floating Icon to tie the zigzag together */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white p-2 rounded-full shadow-xl">
                <div className="bg-green-100 text-green-700 p-4 rounded-full animate-pulse">
                  <Sprout size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content (Remains aligned to the right) */}
          <div className="md:border-l-2 md:border-green-50 md:pl-23 ">
            <p className="text-green-600 font-bold text-xs uppercase tracking-widest mb-3">
              About KrishiCare
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Farmers with Artificial Intelligence
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              KrishiCare uses machine learning to bridge the gap between
              technology and the field. Our platform provides real-time,
              data-backed insights to maximize yield and ensure sustainable
              farming practices.
            </p>

            <div className="grid grid-cols-2 gap-y-3 gap-x-4 font-semibold text-gray-800 text-sm mb-10">
              {[
                "AI Crop Prediction",
                "Disease Diagnosis",
                "Rainfall Prediction",
                "Climate Analysis",
                "Sustainable Practices",
                "Government Schemes",
                 // Kept even to maintain grid alignment
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" /> {item}
                </div>
              ))}
            </div>

            <Link
              to="/crop"
              className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200 active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ── 04. HOW IT WORKS (New Section) ── */}
      <section id="howitwork">
        <HowItWorks />
      </section>

      {/* ── 05. SERVICES ── */}
      <section
        id="services"
        className="relative py-24 px-6 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-400 font-bold text-xs uppercase tracking-widest mb-3">
              Core Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Advanced Solutions For <br /> Precision Agriculture
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/15 transition-all group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <Link
                  to="/crop"
                  className="text-green-400 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Try Tool <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. FOOTER ── */}
      <div className="bg-gray-900 text-white/50 text-center py-6 text-xs">
        © {new Date().getFullYear()} KrishiCare AI. 
      </div>
    </div>
  );
};

export default Dashboard;
