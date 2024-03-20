import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { MediaQuery } from "../../style/GlobalStyle";

export default function SimpleSlider() {
  const sourceImg = [
    "assets/slider_1.jpeg",
    "assets/slider_2.jpeg",
    "assets/slider_3.jpeg",
    "assets/slider_4.jpeg",
    "assets/slider_5.jpeg",
  ];

  const settings = {
    dots: true, // 밑에 dot으로 사진 갯수 표현
    infinite: true, // 사진의 마지막에서 1번째 사진으로 넘어갈지 말지 설정
    speed: 500, // 넘어갈 때 속도
    slidesToShow: 1, // 화면에 몇 개를 보여줄 지
    slidesToScroll: 1, // 넘어갈 때 n개만큼 넘어감
    autoplay: true, //자동으러 넘어가기 설정
    autoplaySpeed: 5000, // 자동으로 넘어가는 시간
  };

  return (
    <SliderDiv>
      <Slider {...settings}>
        {sourceImg.map((el, idx) => {
          return <img src={el} key={idx} alt="" />;
        })}
      </Slider>
    </SliderDiv>
  );
}

const SliderDiv = styled.div`
  margin: 60px 50px 20px 50px;
  justify-content: center;
  width: 600px;
  height: 460px;

  div {
    box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -40px;
  }

  img {
    width: 600px;
    height: 405px;
  }

  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }

  ${MediaQuery.mobile} {
    width: 250px;
    height: 150px;
    margin-bottom: 50px;

    img {
      width: 250px;
      height: 150px;
    }
  }
`;
