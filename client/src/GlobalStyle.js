import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

//미디어쿼리 기준 설정
const LAYOUT_BREAK_POINT = {
  MOBILE: 450,
  TABLET: 900,
  MIDDLE: 1150,
  MAC: 1440,
};

//미디어쿼리 생성 함수
const createMediaQuery = (mediaPx) => {
  return `@media(max-width: ${mediaPx}px)`;
};

//미디어쿼리 생성
export const MediaQuery = {
  mobile: createMediaQuery(LAYOUT_BREAK_POINT.MOBILE),
  tablet: createMediaQuery(LAYOUT_BREAK_POINT.TABLET),
  middle: createMediaQuery(LAYOUT_BREAK_POINT.MIDDLE),
  mac: createMediaQuery(LAYOUT_BREAK_POINT.MAC),
};

//색상 바뀌는 애니메이션
export const textAction = keyframes`
  0% {
    color :black;
  }
  60%{
    color : #ee292f;
  }
  100%{
    color : black;
}
`;

//페이드되는 애니메이션
export const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

//움직이면서 페이드인되는 애니메이션
export const boaxFadeMove = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

//베이스색상
export const baseBlack = "#2f2f2f";
export const pointColor = "#ee292f";
export const background = "#f6f6f6;";
