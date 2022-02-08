import styled, { keyframes } from "styled-components";
import SinglePortfolio from "../components/singlePortfolio";
import { dummydata } from "../data/dummydata";
import Layout from "./layout";

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MainDiv = styled.div`
  /* width: 1000px; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  /* height: 100%; */
  gap: 20px;
  animation: 0.7s ease-in-out ${boxFade};
  /* background-color: white; */
  /* padding: 50px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px; */
`;

function Portfolio() {
  return (
    <Layout>
      <MainDiv className="mount">
        {dummydata.map((el, idx) => {
          return <SinglePortfolio key={idx} data={el} />;
        })}
      </MainDiv>
    </Layout>
  );
}

export default Portfolio;
