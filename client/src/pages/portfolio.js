import styled from "styled-components";
import SinglePortfolio from "../components/singlePortfolio";
import { dummydata } from "../data/dummydata";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

function Portfolio() {
  return (
    <MainDiv>
      {dummydata.map((el, idx) => {
        return <SinglePortfolio key={idx} data={el} />;
      })}
    </MainDiv>
  );
}

export default Portfolio;