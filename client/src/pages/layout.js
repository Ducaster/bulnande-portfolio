import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { background } from "../style/GlobalStyle";
import { FlexColumnDiv, FlexDiv } from "../style/utility.style";

export default function Layout({ children, title }) {
  return (
    <MainWrapper>
      <Header />
      <MainDiv>{children}</MainDiv>
      <Footer />
    </MainWrapper>
  );
}

const MainWrapper = styled(FlexColumnDiv)`
  background-color: ${background};
`;

const MainDiv = styled(FlexDiv)`
  margin-top: 110px;
`;
