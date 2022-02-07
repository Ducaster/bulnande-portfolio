
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

export const Name = styled.div`
  display: flex;
  justify-content: center;
`

function Contact() {
  return (
    <Layout>
      {/* <MainDiv>outclassstudio@gmail.com</MainDiv> */}
      <Profile>
        <img className='profileImg' src='https://cdn.discordapp.com/attachments/938684956916449330/940061727670829136/IMG_0691.JPG'></img>
      </Profile>
      <Name>
        <p>최연호 | 컨텐츠개발팀장</p>

      </Name>
    </Layout>
  );
}

export default Contact;
