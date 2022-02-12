import styled from "styled-components";
import { MediaQuery, textAction } from "../GlobalStyle";

export const MainDiv = styled.div`
  width: 565px;
  height: 340px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  padding: 40px 0px 40px 0px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;

  ${MediaQuery.mobile} {
    padding: 20px 0px 20px 0px;
    width: 370px;
    height: 450px;
  }
`;

export const MainTitle = styled.div`
  font-size: 20px;
  color: #2f2f2f;
  font-weight: bold;
  margin-left: 30px;
  animation: 1s ease-in-out ${textAction};
  cursor: pointer;

  :hover {
    color: #ee292f;
  }

  ${MediaQuery.mobile} {
    margin-left: 40px;
    font-size: 17px;
  }
`;

export const SeeMore = styled.div`
  font-size: 10px;
  display: flex;
  margin-top: 10px;
  justify-content: right;
  cursor: pointer;

  :hover {
    color: #ee292f;
  }
`;

export const ContentWarpper = styled.div`
  display: flex;
  img {
    width: 300px;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    margin: 0 20px 0 30px;
    box-shadow: rgba(50, 50, 93, 1) 0px 10px 10px -10x;
  }
  img:hover {
    transform: scale(1.05) translateY(-5px);
  }

  ${MediaQuery.mobile} {
    flex-direction: column;
    align-items: center;

    img {
      margin: 0px 0px 10px 0px;
      width: 285px;
    }
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;

  ${MediaQuery.mobile} {
    align-items: center;
    margin-right: 0px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentName = styled.div`
  width: 65px;
  background-color: #2f2f2f;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  font-size: 12px;
  color: white;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 1) 2px 2px 0px;
`;

export const Content = styled.div`
  width: 100px;
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  font-size: 12px;
  box-shadow: rgba(50, 50, 93, 0.2) 1px 1px 0px;

  ${MediaQuery.mobile} {
    width: 200px;
  }
`;
