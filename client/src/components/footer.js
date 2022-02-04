import styled from "styled-components";

export const FooterDiv = styled.div`
  /* size: border-box; */
  align-items: center;
  text-align: center;
  padding: 0.7rem;
  font-size: 15px;
  color: #3b3b3b;
  border: none;
  background-color: none;
`;

function Footer() {
  return <FooterDiv>Copyright © Bulnande 2015 All Rights Reserved.</FooterDiv>;
}

export default Footer;
