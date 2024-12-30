import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import "@fortawesome/fontawesome-free/css/all.css";
import Materials from "./pages/Materials";
import Footer from "./components/Footer"; // Import the Footer component
import AboutUs from "./pages/AboutUs"; // Import the AboutUs page
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} /> {/* AboutUs Route */}
            <Route path="/materials" element={<Materials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
