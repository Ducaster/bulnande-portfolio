import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-color: #2f2f2f;
  padding: 10px;
`;
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: white;
  }
  img {
    width: 220px;
    margin: 10px;
    /* height: 40px; */
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;

  .active {
    color: #ee292f;
  }

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #ee292f;
  }
`;

export const PathName = styled.p`
  .navPath {
  }
`;

function Header() {
  return (
    <Background>
      <HeaderStyle>
        <Link to="/">
          <img src="https://cdn.discordapp.com/attachments/938684956916449330/939064243133775902/whitered.png" />
        </Link>
      </HeaderStyle>
      <Navbar>
        <Link to="/">
          <PathName
            className={window.location.pathname === "/" ? "active" : ""}
          >
            About us
          </PathName>
        </Link>
        <Link to="/team">
          <PathName
            className={window.location.pathname === "/team" ? "active" : ""}
          >
            Team
          </PathName>
        </Link>
        <Link to="/portfolio">
          <PathName
            className={
              window.location.pathname.indexOf("/portfolio") !== -1
                ? "active"
                : ""
            }
          >
            Portfolio
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
