import styled from "styled-components";
import { boxFade, MediaQuery } from "../../GlobalStyle";
import Fade from "@stahl.luke/react-reveal/Fade";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 560px;
  /* background-color: #f7e9e9; */
  animation: 0.7s ease-in-out ${boxFade};

  ${MediaQuery.mobile} {
    height: 450px;
  }
`;

export const ValueList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  animation: 0.7s ease-in-out ${boxFade};

  .valueTitle {
    display: flex;
    font-size: 28px;
    margin-bottom: 20px;

    img {
      width: 50px;
    }
  }

  div:nth-child(2) {
    display: flex;
  }
`;

export const BlackContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 230px;
  height: 310px;
  padding: 30px 30px 20px 30px;
  margin-right: 50px;
  margin-left: 50px;
  background-color: #4b4948;
  box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border-radius: 10px;

  ${MediaQuery.mobile} {
    padding: 15px;
    width: 100px;
    height: 250px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const ValueImgDiv = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const ValueImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  animation: 0.7s ease-in-out ${boxFade};

  .logo {
    width: 100px;
    height: 100px;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .maintitle {
    color: white;
    font-weight: bold;
    margin-bottom: 3px;
    font-size: 18px;
  }

  .title {
    //*** solid 1px red;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
  }

  p {
    font-size: 13px;
  }

  ${MediaQuery.mobile} {
    .logo {
      width: 55px;
      height: 55px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .maintitle {
      font-size: 13px;
    }

    p {
      font-size: 10px;
    }
  }
`;

export default function AboutSecond() {
  return (
    <ContentWrapper>
      <ValueList>
        {/* <div className="valueTitle">
          <img
            src="https://cdn.discordapp.com/attachments/938684956916449330/941231446910185492/2017_.png"
            alt=""
          />
          <b>불난데 부채질</b>은 사람의 가치를 발견합니다.
        </div> */}
        <Fade bottom>
          <ValueImgDiv>
            <BlackContentWrapper>
              <ValueImg>
                <div className="logo">
                  <img
                    src="https://cdn.discordapp.com/attachments/938684956916449330/941238521065267200/festival_negative.png"
                    alt=""
                  />
                </div>
                <div className="maintitle">Culture Sharing</div>
                <div className="title">
                  <p>
                    우리는 문화를 나누고 함께하는 문화 나눔(Culture Sharing)을
                    적극 실천합니다.
                  </p>
                </div>
              </ValueImg>
            </BlackContentWrapper>
            <BlackContentWrapper>
              <ValueImg>
                <div className="logo">
                  <img
                    src="https://cdn.discordapp.com/attachments/938684956916449330/941238520499044352/orchestra_negative.png"
                    alt=""
                  />
                </div>
                <div className="maintitle">Artist</div>
                <div className="title">
                  <p>
                    잠재력 있는 아티스트를 발굴하여 다양한 문화공연을 진행하고
                    있습니다.
                  </p>
                </div>
              </ValueImg>
            </BlackContentWrapper>
            <BlackContentWrapper>
              <ValueImg>
                <div className="logo">
                  <img
                    src="https://cdn.discordapp.com/attachments/938684956916449330/941238520851341362/business-people_negative.png"
                    alt=""
                  />
                </div>
                <div className="maintitle">Connect</div>
                <div className="title">
                  <p>
                    너와 내가 모여 <b>우리</b>가 되고,
                    <br />
                    우리가 <b>나누는 문화</b>를 통해 더 나은 사회를 만들어
                    갑니다.
                  </p>
                </div>
              </ValueImg>
            </BlackContentWrapper>
          </ValueImgDiv>
        </Fade>
      </ValueList>
    </ContentWrapper>
  );
}
