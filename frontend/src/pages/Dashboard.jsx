import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-white">
      {/* 01. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Gardening Hero" 
        />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-xs font-bold mb-4">Beautiful Gardening</p>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-tight">
            Planet - Friendly <br/> Gardening
          </h1>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-600 px-8 py-3 rounded-md font-bold hover:bg-green-700 transition">Explore More</button>
            <button className="border border-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-black transition">How It Works</button>
          </div>
        </div>
      </section>

      {/* 02. ABOUT SECTION (Cloud Divider Start) */}
      <section className="cloud-divider pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex gap-4">
            <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80" 
                 className="organic-shape w-2/3 h-80 object-cover shadow-2xl" alt="Plant 1" />
            <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80" 
                 className="organic-shape w-1/3 h-64 object-cover mt-20 shadow-xl" alt="Plant 2" />
          </div>

          <div>
            <p className="text-green-600 font-bold text-sm uppercase mb-2">About Gardening</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">We'll Help You To Create Your Dream Garden</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our AI solutions help you maintain a sustainable ecosystem. Whether you need to detect diseases or find the perfect crop for your soil, KrishiCare is your digital gardener.
            </p>
            <div className="grid grid-cols-2 gap-y-4 font-bold text-gray-800 mb-10">
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600"/> Crop Prediction</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600"/> Disease Detection</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600"/> Indoor Plantation</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600"/> Vegetable Gardening</div>
            </div>
            <button className="bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition shadow-lg">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;