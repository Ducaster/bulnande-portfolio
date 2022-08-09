import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import "bootstrap/dist/css/bootstrap.css";
import ProjectRoute from "./routes/projectRoutes";
import TeamRoutes from "./routes/teamRoutes";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team/*" element={<TeamRoutes />} />
        <Route path="/project/*" element={<ProjectRoute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
