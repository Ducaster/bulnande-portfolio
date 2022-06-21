import { Route, Routes } from "react-router-dom";
import Team from "../pages/team";

function TeamRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Team />} />
    </Routes>
  );
}

export default TeamRoutes;
