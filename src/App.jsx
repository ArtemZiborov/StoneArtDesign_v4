import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import "@fortawesome/fontawesome-free/css/all.css";
import Materials from "./pages/Materials";
// import Contact from "./pages/Contact"; // Import the Contact component
import Footer from "./components/Footer"; // Import the Footer component
import AboutUs from "./pages/AboutUs"; // Import the AboutUs page
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<AboutUs />} /> {/* AboutUs Route */}
            <Route path="materials" element={<Materials />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer /> {Footer}
      </div>
    </BrowserRouter>
  );
}

export default App;
