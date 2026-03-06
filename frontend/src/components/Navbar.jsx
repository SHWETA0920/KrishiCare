import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, CloudRain } from "lucide-react"; // Added CloudRain for Rainfall icon

const Navbar = () => {
  const [showAIMenu, setShowAIMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowAIMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setShowAIMenu(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  // Smooth scroll handler helper to avoid repeating code
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-green-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white text-base">🌿</span>
          </div>
          <span className="text-lg font-black tracking-tight text-gray-800">
            Krishi<span className="text-green-600">Care</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 font-semibold text-sm text-gray-700">
          <Link
            to="/"
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive("/") ? "bg-green-600 text-white" : "hover:text-green-600"
            }`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </Link>

          <Link
            to="/#about"
            className="hover:text-green-600 transition-colors"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </Link>

          <Link
            to="/#howitwork"
            className="px-4 py-2 rounded-md hover:text-green-600 transition-colors"
            onClick={() => scrollToSection("howitwork")}
          >
            HowItWorks
          </Link>

          <Link
            to="/#services"
            className="hover:text-green-600 transition-colors"
            onClick={() => scrollToSection("services")}
          >
            Services
          </Link>

          {/* AI Tools Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowAIMenu((p) => !p)}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-1 ${
                isActive("/crop") ||
                isActive("/disease") ||
                isActive("/rainfall")
                  ? "bg-green-600 text-white"
                  : "hover:text-green-600"
              }`}
            >
              AI Tools{" "}
              <ChevronDown
                size={14}
                className={`transition-transform ${showAIMenu ? "rotate-180" : ""}`}
              />
            </button>

            {showAIMenu && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                <p className="px-4 pt-2 pb-1 text-[9px] uppercase font-black text-gray-400 tracking-widest">
                  ML Features
                </p>
                <Link
                  to="/crop"
                  onClick={() => setShowAIMenu(false)}
                  className={`flex items-center gap-3 px-4 py-3 font-semibold transition-colors ${
                    isActive("/crop")
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  🌾 Crop Prediction
                </Link>
                <Link
                  to="/disease"
                  onClick={() => setShowAIMenu(false)}
                  className={`flex items-center gap-3 px-4 py-3 font-semibold transition-colors ${
                    isActive("/disease")
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  🔬 Disease Detection
                </Link>
                {/* NEW: Rainfall Prediction Integration */}
                <Link
                  to="/rainfall"
                  onClick={() => setShowAIMenu(false)}
                  className={`flex items-center gap-3 px-4 py-3 font-semibold transition-colors ${
                    isActive("/rainfall")
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  🌧️ Rainfall Forecast
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive("/contact")
                ? "bg-green-600 text-white"
                : "hover:text-green-600"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Replace the CTA in the Desktop section */}
        <div className="hidden lg:block">
          <Link
            to="/schemes" // Change this from /crop to /schemes
            className="bg-green-600 text-white px-5 py-2.5 rounded-md font-bold text-sm hover:bg-gray-900 transition-all shadow hover:shadow-green-100 flex items-center gap-2"
          >
            Govt Schemes 🏛️
          </Link>
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg font-semibold text-gray-700 text-sm">
          <Link to="/" className="block py-2 hover:text-green-600">
            Home
          </Link>
          <Link
            to="/#about"
            className="block py-2 hover:text-green-600"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </Link>
          <div className="pl-3 border-l-2 border-green-200 space-y-1 my-1">
            <p className="text-[10px] uppercase text-gray-400 font-black tracking-widest pt-1">
              AI Tools
            </p>
            <Link to="/crop" className="block py-2 hover:text-green-600">
              🌾 Crop Prediction
            </Link>
            <Link to="/disease" className="block py-2 hover:text-green-600">
              🔬 Disease Detection
            </Link>
            {/* Mobile Rainfall Link */}
            <Link to="/rainfall" className="block py-2 hover:text-green-600">
              🌧️ Rainfall Forecast
            </Link>
          </div>
          <Link
            to="/contact"
            className={`block py-2 ${isActive("/contact") ? "text-green-600 font-bold" : "hover:text-green-600"}`}
          >
            Contact
          </Link>
          {/* Replace the button at the bottom of the Mobile Menu */}
          <Link
            to="/schemes"
            className="block bg-green-600 text-white text-center py-3 rounded-md mt-3 hover:bg-green-700 transition-colors font-bold"
          >
            View Govt Schemes
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
