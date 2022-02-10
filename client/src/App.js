import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import PortfolioRoute from "./routes/portfolioRoutes";
import Contact from "./pages/contact";
import "bootstrap/dist/css/bootstrap.css";
import Team from "./pages/team";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio/*" element={<PortfolioRoute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
