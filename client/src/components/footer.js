import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: #2f2f2f;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const FooterDiv = styled.div`
  width: 1150px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  /* font-size: 15px; */
  /* color: #3b3b3b; */
  border: none;

  height: 120px;
  color: white;
`;

export const Left = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: right; */
  flex: 1 0 auto;
  /* padding-left: 50px; */

  img {
    width: 150px;
  }

  div {
    font-size: 11px;
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
  /* padding-right: 50px; */
  flex: 1 0 auto;
  font-size: 13px;
  a {
    /* margin-top: 40px; */
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const PathName = styled.div``;

function Footer() {
  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MainDiv>
      <FooterDiv>
        <Left>
          <img src="https://cdn.discordapp.com/attachments/938684956916449330/939045961383170068/white.png" />
          <div>Copyright © 2015-2020, Bulnande All Rights Reserved.</div>
        </Left>
        <Right>
          <Link to="/">
            <PathName onClick={handleTop}>About us</PathName>
          </Link>
          <Link to="/team">
            <PathName onClick={handleTop}>Team</PathName>
          </Link>
          <Link to="/portfolio">
            <PathName onClick={handleTop}>Portfolio</PathName>
          </Link>
          <Link to="/contact">
            <PathName onClick={handleTop}>Contact</PathName>
          </Link>
        </Right>
      </FooterDiv>
    </MainDiv>
  );
}

export default Footer;
