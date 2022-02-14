import styled from "styled-components";
import { boxFade } from "../../GlobalStyle";
// import ImageSlider from "../slider";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 630px;
  flex-direction: column;
  /* padding: 50px; */
  animation: 0.7s ease-in-out ${boxFade};
  background-image: url("https://cdn.discordapp.com/attachments/938684956916449330/941198256132739102/photo_2022-02-10_14.05.38.jpeg");
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
`;

export const ImageTrans = styled.div`
  display: flex;
  justify-content: center;
  // background-color: #6581A6;
  // : 1px solid red;
  /* width: 70%;
  height: 70%; */
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
  /* margin-left: 20px; */
  margin-bottom: 30px;
  flex-direction: column;
  animation: 0.7s ease-in-out ${boxFade};
  color: white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  padding: 0px 40px 0px 40px;

  .introTitle {
    font-size: 28px;
    /* color: black; */
    // text-align: center;
  }

  .introContent {
    font-size: 18px;
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
            <b>불난데 부채질</b>은<br />
            세상을 바꾸는 문화기업입니다.
          </p>
        </div>
        <div className="introContent">
          <p>
            우리는 사회적 기업으로서,
            <br />
            문화를 사랑하는 많은 청춘들과 함께 성장하고 있습니다.
          </p>
        </div>
      </TextArea>
    </ContentWrapper>
  );
}
