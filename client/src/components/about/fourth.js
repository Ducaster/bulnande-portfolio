import { Link } from "react-router-dom";
import styled from "styled-components";
import { boxFade } from "../../GlobalStyle";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 680px;
  animation: 0.7s ease-in-out ${boxFade};
  align-items: center;
`;

export const Concert = styled.div`
  display: flex;
  justify-content: center;
  animation: 0.7s ease-in-out ${boxFade};
  align-items: center;

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
    /* height: 500px; */
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
`;

export default function AboutFourth() {
  return (
    <ContentWrapper>
      <Concert>
        <div className="concertInfo">
          <div className="introLogoDiv">
            <div className="introLogo">
              <img
                src="https://cdn.discordapp.com/attachments/938684956916449330/941231446910185492/2017_.png"
                alt=""
              />
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
              그들의 꿈에 한발자국 더 다가갈 수 있도록
              <br />
              응원합니다.
            </p>
          </div>
        </div>
        <div className="concertImg">
          <div>
            <div>
              <Link to="project/detail/1">
                <img
                  name="하늘에별따기"
                  src="https://cdn.discordapp.com/attachments/938684956916449330/939322806498394192/bulbuConcert.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link to="project/detail/4">
                <img
                  name="1250project"
                  src="https://media.discordapp.net/attachments/938684956916449330/939783195367444490/concert.2.jpeg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Link to="project/detail/3">
                <img
                  name="시즌"
                  src="https://cdn.discordapp.com/attachments/938684956916449330/939783195673657364/concert1.jpeg"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link to="project/detail/2">
                <img
                  name="소통"
                  src="https://cdn.discordapp.com/attachments/938684956916449330/939783196034359296/concert3.jpeg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </Concert>
    </ContentWrapper>
  );
}
