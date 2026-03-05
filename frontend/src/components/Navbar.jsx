import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoreVertical, Sprout, Camera } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking anywhere outside the dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-full px-8 py-3 shadow-2xl border border-gray-100 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-green-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <span className="text-white text-lg font-bold">🌱</span>
          </div>
          <h1 className="text-xl font-black tracking-tighter text-gray-800">
            KRISHI<span className="text-green-600">CARE</span>
          </h1>
        </Link>

        {/* Central Navigation */}
        <div className="hidden md:flex gap-8 font-bold text-gray-600">
          <Link to="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-600 transition-colors">
            About Us
          </Link>
          <Link to="/services" className="hover:text-green-600 transition-colors">
            Services
          </Link>
        </div>

        {/* Three-Dot Dropdown — fixed with useRef instead of onBlur */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-800 focus:ring-2 focus:ring-green-500"
            aria-label="Toggle AI Tools"
          >
            <MoreVertical size={24} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-4 w-60 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50">
              <p className="px-4 py-2 text-[10px] uppercase font-black text-gray-400 tracking-widest">
                AI Tools
              </p>

              <Link
                to="/crop"
                onClick={() => setShowMenu(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 font-bold text-gray-700 transition-colors"
              >
                <Sprout size={18} className="text-green-600" />
                Crop Prediction
              </Link>

              <Link
                to="/disease"
                onClick={() => setShowMenu(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 font-bold text-gray-700 transition-colors"
              >
                <Camera size={18} className="text-green-600" />
                Disease Detection
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;