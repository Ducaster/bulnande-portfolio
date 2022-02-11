import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const LAYOUT_BREAK_POINT = {
  MOBILE: 450,
  MIDDLE: 768,
  MAC: 1440,
};

const createMediaQuery = (mediaPx) => {
  return `@media(max-width: ${mediaPx}px)`;
};

export const MediaQuery = {
  mobile: createMediaQuery(LAYOUT_BREAK_POINT.MOBILE),
  mac: createMediaQuery(LAYOUT_BREAK_POINT.MAC),
};
