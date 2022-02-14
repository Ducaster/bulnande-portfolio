import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { background } from "../GlobalStyle";

export const MainWrapper = styled.div`
  size: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${background};
  /* gap: 25px; */
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
  /* margin-bottom: 15px; */
`;

function Layout({ children, title }) {
  return (
    <MainWrapper>
      <Header />
      <MainDiv>{children}</MainDiv>
      <Footer />
    </MainWrapper>
  );
}

export default Layout;
