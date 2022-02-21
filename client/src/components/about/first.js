import styled from "styled-components";
import { boxFade, MediaQuery } from "../../GlobalStyle";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  flex-direction: column;
  animation: 0.7s ease-in-out ${boxFade};
  background-image: url("https://cdn.discordapp.com/attachments/938684956916449330/943107159523221524/pexels-josh-sorenson-976862.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .introLogoDiv {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    flex-direction: column;
    color: white;
    align-items: center;
    font-weight: 300;
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

  ${MediaQuery.mobile} {
    height: 680px;
  }
`;

export const ImageTrans = styled.div`
  display: flex;
  justify-content: center;
  animation: 0.7s ease-in-out ${boxFade};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-direction: column;
  animation: 0.7s ease-in-out ${boxFade};
  color: white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  padding: 0px 40px 0px 35px;

  .introTitle {
    font-size: 28px;
  }

  .introContent {
    font-size: 18px;
  }

  ${MediaQuery.mobile} {
    padding: 0px 30px 0px 30px;
    .introTitle {
      font-size: 22px;
    }

    .introContent {
      font-size: 14px;
    }
  }
`;

export default function AboutFirst() {
  return (
    <ContentWrapper>
      {/* <ImageTrans>
        <ImageSlider />
      </ImageTrans> */}
      <div className="introLogoDiv">
        <div className="introLogo">
          <img
            src="https://cdn.discordapp.com/attachments/938684956916449330/941231446910185492/2017_.png"
            alt=""
          />
        </div>
      </div>
      <TextArea>
        <div className="introTitle">
          <p>
            <b>불난데 부채질</b>은 <b>문화의 힘</b>을 <br />
            믿는 사람들이 만들어 갑니다.
          </p>
        </div>
        <div className="introContent">
          <p>
            우리는 세상을 더 나은 곳으로 만들고 싶은
            <br />
            문화를 사랑하는 많은 청춘들과 함께합니다.
          </p>
        </div>
      </TextArea>
    </ContentWrapper>
  );
}
