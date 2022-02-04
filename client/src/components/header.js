import styled from "styled-components";
import logo from '../_images/logo.png';
import {Link} from 'react-router-dom';


export const Background = styled.div`
  background-color: #414040;
`;
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: white;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap : 20px;

  a { 
    color: white;
    text-decoration: none;
  }
`;
function Header() {
  //jsx문법
  return (
    <Background>
    <HeaderStyle>
      <div className="header">
        <a href="/"><img src={ logo }></img>bulnande</a>
      </div>
    </HeaderStyle>
    <Navbar>
      <Link to="/">
        <p className="navPath">About us</p>
      </Link>
      <Link to="portfolio">
        <p className="navPath">Portfolio</p>
      </Link>
      <Link to="contact">
        <p className="navPath">Contact</p>
      </Link>
    </Navbar>
    </Background>
  );
}

export default Header;
