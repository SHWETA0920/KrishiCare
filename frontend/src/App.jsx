import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CropPage from "./pages/CropPage";
import DiseasePage from "./pages/DiseasePage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#fcfdfa]">
        <Navbar />
        {/* pt-28 gives clearance below the fixed navbar */}
        <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/crop" element={<CropPage />} />
            <Route path="/disease" element={<DiseasePage />} />
            <Route
              path="*"
              element={
                <div className="text-center text-4xl pt-20">
                  404: Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;