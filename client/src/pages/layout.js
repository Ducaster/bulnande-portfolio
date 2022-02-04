import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const MainDiv = styled.div``;

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
