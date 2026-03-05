import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 p-4 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🌱 KrishiCare AI
        </h1>
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-green-200 transition">Crop Prediction</Link>
          <Link to="/disease" className="hover:text-green-200 transition">Disease Detection</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
