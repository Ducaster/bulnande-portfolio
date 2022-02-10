import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

export const MainWrapper = styled.div`
  size: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f6f6f6;
  gap: 25px;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  /* min-height: 800px; */
  /* background-color: #f8f8f8; */
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
