import { Link } from "react-router-dom";
import styled from "styled-components";
import { baseBlack, pointColor } from "../GlobalStyle";

const MainDiv = styled.div`
  position: fixed;
  top: 100px;
  width: 90px;
  z-index: 2;
  background-color: ${baseBlack};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px 0px,
    rgba(0, 0, 0, 0.2) -5px -5px 10px 0px;
  margin-top: 4px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  color: white;
  font-size: 14px;

  :hover {
    color: ${pointColor};
  }
`;

function TeamDropDown() {
  return (
    <MainDiv>
      <Link to="/team">
        <Menu>Members</Menu>
      </Link>
      <Link to="/team/greeting">
        <Menu>Greeting</Menu>
      </Link>
    </MainDiv>
  );
}

export default TeamDropDown;
