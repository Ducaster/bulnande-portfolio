import { Route, Routes } from "react-router-dom";
import Greeting from "../components/greeeting";
import Team from "../pages/team";

function TeamRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Team />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  );
}

export default TeamRoutes;
