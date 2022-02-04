import styled from "styled-components";
import SinglePortfolio from "../components/singlePortfolio";
import { dummydata } from "../data/dummydata";
import Layout from "./layout";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

function Portfolio() {
  return (
    <Layout>
      <MainDiv>
        {dummydata.map((el, idx) => {
          return <SinglePortfolio key={idx} data={el} />;
        })}
      </MainDiv>
    </Layout>
  );
}

export default Portfolio;
