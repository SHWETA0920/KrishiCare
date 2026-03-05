import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CropPage from "./pages/CropPage";
import DiseasePage from "./pages/DiseasePage";

function App() {
  return (
    <Router>
      
      <div className="min-h-screen bg-[#fcfdfa]">
        <Navbar />
        <main className="max-w-6xl mx-auto py-10 px-4">
          <Routes>
            <Route path="/" element={<CropPage />} />
            <Route path="/disease" element={<DiseasePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;