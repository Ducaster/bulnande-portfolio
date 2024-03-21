import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { baseBlack, MediaQuery, pointColor } from "../style/GlobalStyle";
import { useEffect, useState } from "react";
import { FlexColumnDivCentered, FlexDiv } from "../style/utility.style";

export default function Header() {
  const navigate = useNavigate();

  //스크롤 포지션 상태
  const [scrollPosition, setScrollPosition] = useState(0);

  //스크롤 포지션 업데이트 함수
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  //페이지 이동 함수
  const movePage = (page) => {
    navigate(page);

    //*페이지 최상단으로 이동
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  //스크롤 될 때 마다 실행
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Background scrollPosition={scrollPosition}>
      <HeaderStyle>
        <Link to="/">
          <img
            className={
              scrollPosition < 100 ? "original_header" : "changed_header"
            }
            src={`${process.env.PUBLIC_URL}/assets/logo_redwhite.png`}
            alt=""
          />
        </Link>
      </HeaderStyle>
      <Navbar scrollPosition={scrollPosition}>
        <PathName
          className={window.location.pathname === "/" ? "active" : ""}
          onClick={() => movePage("/")}
        >
          About
        </PathName>
        <PathName
          className={
            window.location.pathname.indexOf("/team") !== -1 ? "active" : ""
          }
          onClick={() => movePage("/team")}
        >
          Team
        </PathName>
        <PathName
          className={
            window.location.pathname.indexOf("/project") !== -1 ? "active" : ""
          }
          onClick={() => movePage("/project")}
        >
          Project
        </PathName>
        <PathName
          className={window.location.pathname === "/contact" ? "active" : ""}
          onClick={() => movePage("/contact")}
        >
          Contact
        </PathName>
      </Navbar>
    </Background>
  );
}

const Background = styled(FlexColumnDivCentered)`
  width: calc(100vw - 20px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: ${(props) => (props.scrollPosition > 100 ? "50px" : "114px")};
  padding: ${(props) => (props.scrollPosition > 100 ? "0px" : "10px")};
  background-color: ${(props) =>
    props.scrollPosition > 100 ? "rgba(255, 255, 255, 0.9)" : baseBlack};
  box-shadow: ${(props) =>
    props.scrollPosition > 100 ? "rgba(0, 0, 0, 0.1) 0px 3px 2px 0px" : "none"};
`;

const HeaderStyle = styled(FlexDiv)`
  justify-content: center;

  .changed_header {
    display: none;
  }

  a {
    text-decoration: none;
    color: white;
  }
  img {
    width: 220px;
    margin: 10px;
  }

  ${MediaQuery.mobile} {
    img {
      width: 170px;
    }
  }
`;

const Navbar = styled(FlexDiv)`
  justify-content: center;
  gap: 20px;
  margin-top: ${(props) => (props.scrollPosition > 100 ? "10px" : "0px")};

  .active {
    color: #ee292f;
  }

  a {
    cursor: pointer;
    color: ${(props) => (props.scrollPosition > 100 ? baseBlack : "white")};
    text-decoration: none;
  }
  a:hover {
    color: ${pointColor};
  }

  ${MediaQuery.mobile} {
    font-size: 13px;
  }
`;

const PathName = styled.a`
  margin-bottom: 15px;
`;
