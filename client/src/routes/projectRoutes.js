import { Route, Routes } from "react-router-dom";
import Project from "../pages/project";
import SinglePortfolioDetail from "../components/project/singlePortfolioDetail";
import SinglePortfolioShortDetail from "../components/project/singlePortfolioShortDetail";

export default function ProjectRoute() {
  return (
    <Routes>
      <Route path="/" element={<Project />} />
      <Route path="/detail/:id" element={<SinglePortfolioDetail />} />
      <Route path="/sdetail/:id" element={<SinglePortfolioShortDetail />} />
    </Routes>
  );
}
