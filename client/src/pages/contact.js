import { useState } from "react";
import styled from "styled-components";
import Layout from "./layout";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  // border: solid 3px red;
  border-radius: 70%;
  overflow: hidden;

  .profileImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Box = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 100px;
  background-color: white;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
`;

function Contact() {
  return (
    <Layout>
      <MainDiv>outclassstudio@gmail.com</MainDiv>
    </Layout>
  );
}

export default Contact;
