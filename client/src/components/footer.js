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
          <img src="assets/logo_white.png" alt="" />
          <TextWrapper>
            <SmallTextWrapper>
              <SmallText>사업자번호 : 228-21-12021</SmallText>
              <SmallText className="bar">|</SmallText>
              <SmallText>대표 : 한승목</SmallText>
            </SmallTextWrapper>
            <SmallTextWrapper>
              <SmallText>주소 : 노원구 동일로 1352 4F </SmallText>
              <SmallText className="bar">|</SmallText>
              <SmallText> 문의 : bulnande@naver.com</SmallText>
            </SmallTextWrapper>
          </TextWrapper>
          <Copyright>Copyright © Bulnande All Rights Reserved.</Copyright>
        </Left>
        <Right>
          <Link to="/">
            <PathName onClick={handleTop}>About</PathName>
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
  justify-content: space-between;

  ${MediaQuery.mobile} {
    width: 100vw;
    height: 150px;
    padding: 10px;
  }
`;

const Left = styled.div`
  /* flex: 1 0 auto; */

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
  }
`;

const Right = styled(FlexDiv)`
  gap: 10px;
  justify-content: right;
  /* flex: 1 0 auto; */
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

const Copyright = styled.div`
  color: #777777;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  ${MediaQuery.mobile} {
    /* display: none; */
  }
`;

const TextWrapper = styled.div`
  margin: 6px 0px 3px 0px;

  ${MediaQuery.mobile} {
    &.top {
      display: flex;
      gap: 10px;
    }
  }
`;

const SmallTextWrapper = styled.div`
  display: flex;
  gap: 5px;

  ${MediaQuery.mobile} {
    flex-direction: column;
    gap: 0px;
  }
`;

const SmallText = styled.div`
  font-weight: 300;
  font-size: 9px;
  line-height: 16px;
  color: white;

  ${MediaQuery.mobile} {
    &.bar {
      display: none;
    }
    /* width: 80px; */
  }
`;
