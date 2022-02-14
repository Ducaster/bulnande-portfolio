import styled from "styled-components";
import { boaxFadeMove, MediaQuery, textAction } from "../GlobalStyle";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  animation: 0.6s ease-in-out ${boaxFadeMove};
  margin: 50px 0px 40px 0px;
`;

export const ContentWrapper = styled.div`
  width: 900px;
  padding: 50px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;

  ${MediaQuery.tablet} {
    width: 565px;
  }

  ${MediaQuery.mobile} {
    padding: 30px;
    width: 370px;
  }
`;

export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  animation: 1s ease-in-out ${textAction};
  margin-bottom: 7px;

  span {
    margin-right: 4px;
  }

  ${MediaQuery.mobile} {
    font-size: 18px;
  }
`;

export const SubDiv = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  img {
    max-width: 500px;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 1) 0px 10px 10px -10x;
  }
  img:hover {
  }

  ${MediaQuery.tablet} {
    flex-direction: column;
  }

  ${MediaQuery.mobile} {
    img {
      width: 310px;
    }
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentName = styled.div`
  width: 75px;
  background-color: #e9e9e9e9;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  font-size: 14px;
  color: white;
  background-color: #2f2f2f;
  box-shadow: rgba(50, 50, 93, 1) 2px 2px 0px;
  text-align: center;
  /* align-items: center; */

  ${MediaQuery.mobile} {
    width: 100px;
    font-size: 13px;
  }
`;

export const Content = styled.div`
  width: 187px;
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  font-size: 14px;
  box-shadow: rgba(50, 50, 93, 0.2) 1px 1px 0px;

  ${MediaQuery.tablet} {
    max-width: 450px;
    width: 370px;
  }

  ${MediaQuery.mobile} {
    width: 210px;
    font-size: 12px;
    /* margin: 0px; */
  }
`;

export const Text = styled.div`
  ${MediaQuery.mobile} {
    font-size: 14px;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${MediaQuery.tablet} {
    iframe {
      width: 512px;
      height: 288px;
    }
  }

  ${MediaQuery.mobile} {
    iframe {
      width: 336px;
      height: 189px;
    }
  }
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 5px;

  img {
    width: 180px;
  }

  ${MediaQuery.tablet} {
    grid-template-columns: 1fr 1fr;
    img {
      width: 230px;
    }
  }

  ${MediaQuery.mobile} {
    img {
      width: 150px;
    }
  }
`;
