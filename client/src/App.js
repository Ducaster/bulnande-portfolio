import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import PortfolioRoute from "./routes/portfolioRoutes";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio/*" element={<PortfolioRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
