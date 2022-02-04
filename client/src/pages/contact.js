import styled from "styled-components";
import Layout from "./layout";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
`;

function Contact() {
  return (
    <Layout>
      <MainDiv>outclassstudio@gmail.com</MainDiv>
    </Layout>
  );
}

export default Contact;
