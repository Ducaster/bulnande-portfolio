import styled from "styled-components";
import { MainDiv } from "../components/singlePortfolioDetail";
import Layout from "./layout";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
`;

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
`;

export const AllTeam = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  /* border: solid 1px red; */
  margin: 20px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  // border: solid 3px red;
  border-radius: 70%;
  overflow: hidden;

  .profileImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* border: solid 1px red; */
`;

export const Name = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: right;
  /* border: solid 1px red; */
`;

export const Career = styled.div`
  /* border: solid 1px red; */
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: right;
  margin: 7px 0px 7px 0px;

  p {
    color: #a29797;
    margin-bottom: 0;
    font-size: 14px;
  }
`;

export const SubText = styled.div`
  display: flex;
  justify-content: right;
  font-size: 14px;
`;

export const ImageWarpper = styled.div`
  display: flex;
  justify-content: right;
  img {
    width: 20px;
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
        <ContentWrapper>
          <AllTeam>
            <Profile>
              <img
                className="profileImg"
                src="https://cdn.discordapp.com/attachments/938684956916449330/940071831719792740/photo_2022-02-07_11.29.31.jpeg"
              ></img>
            </Profile>
            <Content>
              <Name>
                <h5>
                  이민형
                  <span style={{ color: "#ee292f", fontWeight: "bold" }}>
                    {" "}
                    /{" "}
                  </span>{" "}
                  <span style={{ color: "#a29797" }}>대표</span>
                </h5>
              </Name>
              {/* <SubText>Minhyeong Lee</SubText> */}
              <Career>
                Career
                <p>前 강연플랫폼 AletheiaSchool 대표</p>
                <p>서울시립대 경영학부 전공</p>
              </Career>
              <Career>
                Contact
                <p>mlimshs@gmail.com</p>
              </Career>
            </Content>
          </AllTeam>
          <ImageWarpper>
            <img
              src="https://cdn.discordapp.com/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg"
              alt=""
            />
          </ImageWarpper>
        </ContentWrapper>
        <ContentWrapper>
          <AllTeam>
            <Profile>
              <img
                className="profileImg"
                src="https://cdn.discordapp.com/attachments/938684956916449330/940061727670829136/IMG_0691.JPG"
              ></img>
            </Profile>
            <Content>
              <Name>
                <h5>
                  최연호
                  <span style={{ color: "#ee292f", fontWeight: "bold" }}>
                    {" "}
                    /{" "}
                  </span>{" "}
                  <span style={{ color: "#A29797" }}>컨텐츠개발팀장</span>
                </h5>
              </Name>
              {/* <SubText>Yeonho Choi</SubText> */}
              <Career>
                Career
                <p>극단 틔움 연출</p>
                <p>서일대 연극학 전공</p>
              </Career>
              <Career>
                Contact
                <p>nznotg@gmail.com</p>
              </Career>
            </Content>
          </AllTeam>
          <ImageWarpper>
            <img
              src="https://cdn.discordapp.com/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg"
              alt=""
            />
          </ImageWarpper>
        </ContentWrapper>
      </MainDiv>
    </Layout>
  );
}

export default Team;
