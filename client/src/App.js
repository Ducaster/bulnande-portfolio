import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import "bootstrap/dist/css/bootstrap.css";
import Team from "./pages/team";
import { GlobalStyle } from "./GlobalStyle";
import ProjectRoute from "./routes/projectRoutes";
import Test from "./pages/test";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/project/*" element={<ProjectRoute />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  );
}

export default App;
