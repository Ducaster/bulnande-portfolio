import { Route, Routes } from "react-router-dom";
import SinglePortfolioDetail from "../components/singlePortfolioDetail";
import SinglePortfolioShortDetail from "../components/singlePortfolioShortDetail";
import Project from "../pages/project";
// import Portfolio from "../pages/project";

function ProjectRoute() {
  return (
    <Routes>
      <Route path="/" element={<Project />} />
      <Route path="/detail/:id" element={<SinglePortfolioDetail />} />
      <Route path="/sdetail/:id" element={<SinglePortfolioShortDetail />} />
    </Routes>
  );
}

export default ProjectRoute;
