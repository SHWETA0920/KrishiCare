import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navLinkClass = (path) => 
    `px-4 py-2 rounded-full transition-all duration-300 ${
      location.pathname === path 
      ? "bg-white text-green-800 shadow-md" 
      : "hover:bg-green-600/50 text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-green-800/90 border-b border-green-700 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <span className="text-xl">🌱</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            KRISHI<span className="text-green-300">CARE</span> <span className="text-xs font-light block leading-none">AI SOLUTIONS</span>
          </h1>
        </Link>
        
        <div className="flex gap-2 font-semibold">
          <Link to="/" className={navLinkClass("/")}>Crop Prediction</Link>
          <Link to="/disease" className={navLinkClass("/disease")}>Disease Detection</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;