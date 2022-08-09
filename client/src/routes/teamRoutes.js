import { Route, Routes } from "react-router-dom";
import Team from "../pages/team";

export default function TeamRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Team />} />
    </Routes>
  );
}
