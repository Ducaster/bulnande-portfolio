import styled from "styled-components";
import SinglePortfolio from "../components/singlePortfolio";
import SinglePortfolioShort from "../components/singlePortfolioShort";
import { dummydata } from "../data/dummydata";
import { dummydataShort } from "../data/dummydataShort";
import Layout from "./layout";
import { boxFade, MediaQuery, pointColor } from "../GlobalStyle";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: 0.7s ease-in-out ${boxFade};
  margin: 35px 0px 25px 0px;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 1150px;
  height: 60px;
  background-color: white;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  padding: 5px 20px 5px 20px;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }

  input {
    padding: 5px;
    width: 1070px;
    border: none;
    border-radius: 5px;
  }

  input:focus {
    outline: 2px solid ${pointColor};
  }

  ${MediaQuery.middle} {
    width: 565px;
  }

  ${MediaQuery.mobile} {
    width: 370px;
    padding: 5px 20px 5px 20px;

    input {
      width: 310px;
    }
  }
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 20px;

  ${MediaQuery.middle} {
    display: flex;
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  color: #2f2f2f;
  width: 1150px;
  padding: 15px 30px 15px 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  font-size: 23px;
  font-weight: bold;

  img {
    width: 35px;
    margin-right: 1px;
  }

  div {
    font-style: normal;
    margin-top: 10px;
    font-size: 15px;
    color: #a29797;
  }

  ${MediaQuery.middle} {
    width: 565px;
  }

  ${MediaQuery.mobile} {
    width: 370px;
    font-size: 18px;
    padding: 15px 30px 15px 25px;

    img {
      width: 25px;
    }
  }
`;

function Project() {
  //장기프로젝트 데이터 상태
  const [data, setData] = useState(dummydata);

  //단기프로젝트 데이터 상태
  const [shortData, setShortData] = useState(dummydataShort);

  //프로젝트명으로 검색하는 함수
  const handlSearch = (e) => {
    let filtered = dummydata.filter((el) => {
      return el.title.indexOf(e.target.value) !== -1;
    });

    let filteredShort = dummydataShort.filter((el) => {
      return el.title.indexOf(e.target.value) !== -1;
    });

    setData(filtered);
    setShortData(filteredShort);
  };

  return (
    <Layout>
      <MainContainer>
        <SearchBar>
          <img
            src="https://cdn.discordapp.com/attachments/938684956916449330/941881851671363634/search_icon_1.png"
            alt=""
          />
          <input
            type="text"
            placeholder="프로젝트명을 입력하세요"
            onChange={handlSearch}
          />
        </SearchBar>
        <TextWrapper>
          <img
            src="https://cdn.discordapp.com/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg"
            alt=""
          />
          장기프로젝트
        </TextWrapper>
        <MainDiv className="mount">
          {data.map((el, idx) => {
            return <SinglePortfolio key={idx} data={el} />;
          })}
        </MainDiv>
        <TextWrapper>
          <img
            src="https://cdn.discordapp.com/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg"
            alt=""
          />
          단기프로젝트
        </TextWrapper>
        <MainDiv className="mount">
          {shortData.map((el, idx) => {
            return <SinglePortfolioShort key={idx} data={el} />;
          })}
        </MainDiv>
      </MainContainer>
    </Layout>
  );
}

export default Project;
