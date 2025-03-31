// * Components
import Home from "./pages/Home";
import MainPricing from "./components/Pricing";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AboutUs from "./pages/About.js";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<MainPricing />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

// Git debug comment

export default App;