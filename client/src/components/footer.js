import { Link } from "react-router-dom";
import styled from "styled-components";
import { baseBlack, MediaQuery } from "../GlobalStyle";

export const MainDiv = styled.div`
  background-color: ${baseBlack};
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
  border: none;
  height: 120px;
  color: white;

  ${MediaQuery.mobile} {
    width: 360px;
    height: 80px;
  }
`;

export const Left = styled.div`
  flex: 1 0 auto;

  img {
    width: 150px;
  }

  div {
    font-size: 11px;
  }

  ${MediaQuery.mobile} {
    img {
      width: 100px;
    }
    div {
      display: none;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
  flex: 1 0 auto;
  font-size: 13px;

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }

  ${MediaQuery.mobile} {
    a {
      font-size: 11px;
    }
  }
`;

export const PathName = styled.div``;

function Footer() {
  // 클릭하면 스크롤이 위로 올라가는 함수
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MainDiv>
      <FooterDiv>
        <Left>
          <img
            src="https://cdn.discordapp.com/attachments/938684956916449330/939045961383170068/white.png"
            alt=""
          />
          <div>Copyright © 2015-2020, Bulnande All Rights Reserved.</div>
        </Left>
        <Right>
          <Link to="/">
            <PathName onClick={handleTop}>About us</PathName>
          </Link>
          <Link to="/team">
            <PathName onClick={handleTop}>Team</PathName>
          </Link>
          <Link to="/project">
            <PathName onClick={handleTop}>Project</PathName>
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
