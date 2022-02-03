import { Route, Routes } from "react-router-dom";
import SinglePortfolioDetail from "../components/singlePortfolioDetail";
import Portfolio from "../pages/portfolio";

function PortfolioRoute() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/detail/:id" element={<SinglePortfolioDetail />} />
    </Routes>
  );
}

export default PortfolioRoute;
