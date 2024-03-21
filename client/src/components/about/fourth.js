import { Link } from "react-router-dom";
import styled from "styled-components";
import { MediaQuery } from "../../style/GlobalStyle";
import Zoom from "@stahl.luke/react-reveal/Fade";
import { FlexDivCentered } from "../../style/utility.style";

export default function AboutFourth() {
  // 클릭하면 스크롤이 위로 올라가는 함수
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <ContentWrapper>
      <Zoom bottom>
        <Concert>
          <div className="concertInfo">
            <div className="introLogoDiv">
              <div className="introLogo">
                <img src="assets/bulbu_symbol.png" alt="" />
              </div>
            </div>
            <div className="concertTitleDiv">
              <b>청춘</b>의 <b>열정</b>을 <b>응원</b>합니다.
            </div>
            <div className="concertContentDiv">
              <p>
                <br />
                불난데 부채질의 <b>Culture Sharing</b>은
                <br />
                청춘들의 열정에 불을 지피고
                <br />
                그들의 꿈이 실현되도록 돕습니다.
              </p>
            </div>
          </div>
          <div className="concertImg">
            <div>
              <div>
                <Link to="project/detail/1" onClick={handleTop}>
                  <img name="하늘에별따기" src="assets/habyul.jpeg" alt="" />
                </Link>
              </div>
              <div>
                <Link to="project/detail/3" onClick={handleTop}>
                  <img
                    name="1250project"
                    src="assets/1250project.jpeg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div>
              <div>
                <Link to="project/detail/2" onClick={handleTop}>
                  <img name="시즌" src="assets/season_concert.png" alt="" />
                </Link>
              </div>
              <div>
                <Link to="project/sdetail/3" onClick={handleTop}>
                  <img name="소통" src="assets/soul_concert.jpeg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Concert>
      </Zoom>
    </ContentWrapper>
  );
}

const ContentWrapper = styled(FlexDivCentered)`
  height: 720px;

  ${MediaQuery.mobile} {
    height: 650px;
  }
`;

const Concert = styled(FlexDivCentered)`
  .concertInfo {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 500px;
    font-size: 20px;
  }

  .introLogoDiv {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
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

  .concertTitleDiv {
    font-size: 28px;
  }

  .concertContentDiv {
    p {
      font-size: 20px;
    }
  }

  .concertImg {
    margin: 10px;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -40px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  }

  .concertImg > div > div {
    width: 200px;
    height: 275px;
    overflow: hidden;
  }

  .concertImg img {
    width: 100%;
    height: 100%;
    transition: all 0.2s linear;
    object-fit: cover;
  }

  .concertImg img:hover {
    transform: scale(1.05);
  }

  ${MediaQuery.mobile} {
    flex-direction: column-reverse;

    .concertImg {
      margin-bottom: 20px;
    }

    .concertTitleDiv {
      font-size: 20px;
    }

    .concertContentDiv {
      p {
        font-size: 14px;
      }
    }

    .concertInfo {
      width: 250px;
    }

    .concertImg > div > div {
      width: 100px;
      height: 140px;
      overflow: hidden;
    }

    .introLogoDiv {
      margin-bottom: 5px;
    }
  }
`;
