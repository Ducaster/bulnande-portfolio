import { Link } from "react-router-dom";
import styled from "styled-components";
import { baseBlack, MediaQuery } from "../style/GlobalStyle";
import { FlexDiv, FlexDivCentered } from "../style/utility.style";

export default function Footer() {
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
          <div>Copyright © Bulnande All Rights Reserved.</div>
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

const MainDiv = styled(FlexDiv)`
  justify-content: center;
  background-color: ${baseBlack};
  margin: 0;
`;

const FooterDiv = styled(FlexDivCentered)`
  width: 1150px;
  height: 120px;
  margin: 0;
  border: none;
  color: white;

  ${MediaQuery.mobile} {
    width: 360px;
    height: 80px;
  }
`;

const Left = styled.div`
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

const Right = styled(FlexDiv)`
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

const PathName = styled.div``;
