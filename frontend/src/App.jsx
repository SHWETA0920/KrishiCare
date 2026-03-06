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
import RainfallPage from "./pages/RainfallPage"; // New Import
import SchemesPage from "./pages/SchemesPage";
import ContactPage from "./components/ContactPage";

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
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/crop"
              element={
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <CropPage />
                </div>
              }
            />
            <Route
              path="/disease"
              element={
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <DiseasePage />
                </div>
              }
            />
            {/* NEW: Rainfall Prediction Route */}
            <Route
              path="/rainfall"
              element={
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <RainfallPage />
                </div>
              }
            />
            {/* NEW: Government Schemes Route */}
            <Route
              path="/schemes"
              element={
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <SchemesPage />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <ContactPage />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div className="text-center text-4xl pt-20 pb-20">
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
