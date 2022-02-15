import styled from "styled-components";
import { Link } from "react-router-dom";
import { baseBlack, MediaQuery, pointColor } from "../GlobalStyle";
import { useEffect, useState } from "react";
// import TeamDropDown from "./teamDropdown";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${(props) => (props.scrollPosition > 100 ? "0px" : "10px")};
  background-color: ${(props) =>
    props.scrollPosition > 100 ? "rgba(255, 255, 255, 0.9)" : baseBlack};
  box-shadow: ${(props) =>
    props.scrollPosition > 100 ? "rgba(0, 0, 0, 0.1) 0px 3px 2px 0px" : "none"};
`;

export const HeaderStyle = styled.div`
  display: flex;
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
    /* height: 40px; */
  }

  ${MediaQuery.mobile} {
    img {
      width: 170px;
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  margin-top: ${(props) => (props.scrollPosition > 100 ? "10px" : "0px")};

  .active {
    color: #ee292f;
  }

  a {
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

export const PathName = styled.p`
  .navPath {
  }
`;

export const DropdownBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
`;

function Header() {
  // const navigate = useNavigate();
  // const [teamDropDown, setTeamDropDown] = useState(false);

  //스크롤 포지션 상태
  const [scrollPosition, setScrollPosition] = useState(0);

  //스크롤 포지션 업데이트 함수
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
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
            src="https://cdn.discordapp.com/attachments/938684956916449330/939064243133775902/whitered.png"
            alt=""
          />
        </Link>
      </HeaderStyle>
      <Navbar scrollPosition={scrollPosition}>
        <Link to="/">
          <PathName
            className={window.location.pathname === "/" ? "active" : ""}
          >
            About us
          </PathName>
        </Link>
        <Link to="/team">
          <PathName
            className={
              window.location.pathname.indexOf("/team") !== -1 ? "active" : ""
            }
          >
            Team
            {/* {teamDropDown ? (
              <>
                <TeamDropDown />
                <DropdownBackGround
                  onClick={() => setTeamDropDown(false)}
                ></DropdownBackGround>
              </>
            ) : (
              ""
            )} */}
          </PathName>
        </Link>
        <Link to="/project">
          <PathName
            className={
              window.location.pathname.indexOf("/project") !== -1
                ? "active"
                : ""
            }
          >
            Project
          </PathName>
        </Link>
        <Link to="/contact">
          <PathName
            className={window.location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </PathName>
        </Link>
      </Navbar>
    </Background>
  );
}

export default Header;
