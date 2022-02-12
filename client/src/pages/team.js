import styled from "styled-components";
import { MainDiv } from "../style/detail.style";
import SingleMember from "../components/singleMember";
import { teamMember } from "../data/teamMember";
import { MediaQuery } from "../GlobalStyle";
import Layout from "./layout";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 30px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  font-style: italic;
  font-size: 17px;

  div {
    font-style: normal;
    margin-top: 10px;
    font-size: 15px;
    color: #a29797;
  }

  ${MediaQuery.mobile} {
    max-width: 370px;
    font-size: 15px;

    div {
      font-size: 13px;
    }
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px 30px 30px 30px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  font-size: 23px;
  font-weight: bold;
  align-items: center;

  div {
    width: 540px;
    display: flex;
    justify-content: left;
    margin-bottom: 10px;
  }

  ${MediaQuery.mobile} {
    max-width: 370px;

    div {
      max-width: 340px;
      font-size: 15px;
    }

    iframe {
      width: 336px;
      height: 189px;
    }
  }
`;

function Team() {
  return (
    <Layout>
      <MainDiv>
        <TextWrapper>
          많은 사람들은 실패를 두려워해 아예 시작조차 않는 경우가 많다. 그러나
          내가 보기엔 실패란 시도조차 하지 않는 것을 의미한다.
          <div>- 마리아 나브라틸로바</div>
        </TextWrapper>
        {teamMember.map((el, idx) => {
          return <SingleMember key={idx} data={el} />;
        })}
        <CategoryWrapper>
          <div>팀 소개 영상</div>
          <iframe
            width="528"
            height="297"
            src="https://www.youtube.com/embed/tpjze3tf5WY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </CategoryWrapper>
      </MainDiv>
    </Layout>
  );
}

export default Team;
