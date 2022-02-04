import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import PortfolioRoute from "./routes/portfolioRoutes";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio/*" element={<PortfolioRoute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
