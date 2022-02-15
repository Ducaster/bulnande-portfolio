import { Link } from "react-router-dom";
import styled from "styled-components";
import { boxFade, MediaQuery } from "../../GlobalStyle";
import ImageSlider from "../slider";
import Fade from "@stahl.luke/react-reveal/Fade";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 650px;
  padding: 50px 0px 50px 0px;
  animation: 0.7s ease-in-out ${boxFade};
  background-color: white;
  align-items: center;

  ${MediaQuery.mobile} {
    height: 600px;
    padding: 40px 0px 40px 0px;
  }
`;

export const Musician = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 0.7s ease-in-out ${boxFade};

  .introLogoDiv {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    //*** solid 1px red;
  }

  .introLogo {
    display: flex;
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .musician_img {
    display: flex;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -40px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;

    img {
      margin: 5px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .detail_comment {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 30px;
  }

  .musician_comment {
    display: flex;
    flex-direction: column;
    width: 500px;

    .title {
      font-size: 28px;
    }

    p {
      margin-top: 25px;
      font-size: 18px;
    }
  }

  .portfolio_btn {
    display: flex;
    justify-content: center;
  }

  ${MediaQuery.mobile} {
    flex-direction: column;
    padding: 30px 0px 30px 0px;

    .musician_comment {
      width: 250px;

      .title {
        font-size: 20px;
      }

      p {
        margin-top: 20px;
        font-size: 14px;
      }
    }
  }
`;

export default function AboutThird() {
  // 클릭하면 스크롤이 위로 올라가는 함수
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <ContentWrapper>
      <Musician>
        {/* <div className="musician_img">
          <img src="https://cdn.discordapp.com/attachments/938684956916449330/939061482900049950/musician.jpeg"></img>
        </div> */}
        <Fade left>
          <ImageSlider />
        </Fade>
        <Fade right>
          <div className="detail_comment">
            <div className="introLogoDiv">
              <div className="introLogo">
                <img
                  src="https://cdn.discordapp.com/attachments/938684956916449330/941231446910185492/2017_.png"
                  alt=""
                />
              </div>
            </div>
            <div className="musician_comment">
              <div className="title">
                <b>아티스트</b>의 <b>가치를 발견</b>하다.
              </div>
              <p>
                불난데 부채질은 아티스트를 지원합니다.
                <br />
                그들의 재능이 사회에 빛을 발할 수 있도록
                <br />
                그들의 이야기를 공연으로 만들어
                <br />
                관객에게 전달합니다.
              </p>
            </div>
            <div className="portfolioMove">
              <div className="portfolio_btn">
                <Link to="project" onClick={handleTop}>
                  <button type="button" class="btn btn-dark">
                    Show Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </Musician>
    </ContentWrapper>
  );
}
