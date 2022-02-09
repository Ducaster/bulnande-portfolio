
import styled from "styled-components";
import Layout from "./layout";
import { useState } from "react";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 20px;
  border: solid 1px red;
`;

export const ImgDiv = styled.div`
  border: soild 1px red;
  width: 50%;
  height: 50%;

  img {
    width: 100%;
    height: 100%;
    over-fit: cover;
  }

`;

export const ContactDiv = styled.div`
  border: solid 1px red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 50%;

  .title {
    border: solid 1px red;
    margin: 20px;
    display: flex;
    justify-content: center;
    
  }

  input {
    width: 150px;
  }

  .input-group-text {
    width: 100px;
    text-align: center;
  }

  .contactForm {
    display: flex;
    justify-content: center;
    border: solid 1px red;
    margin: 20px;
  }

  // .contactForm > div {
  //   width: 30px;
  // }

  .submitBtn {
    display: flex;
    justify-content: center;
    border: solid 1px red;
    margin: 30px;

}
`

function Contact() {
  const sendMessage = () => {
    alert("문의 내용이 정상적으로 전달되었습니다.")
  }

  const [checkValue, setCheckValue] = useState(false);
  const [email, setEmail] = useState("직접입력");
  const inputValue = (e) => {
    if(e.target.value === "직접입력"){
      setCheckValue(true);
      setEmail(e.target.value);
    } else {
      setCheckValue(false);
      setEmail(e.target.value);
    }
  }


  return (
    <Layout>
      <MainDiv>
        <ContactDiv>
          <div className='title'>
            <h1>Contact us</h1>
          </div>
          <div className='contactForm'>
            <form onSubmit={(e) => e.preventDefault()}>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">NickName</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Email</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder={email} aria-label="Server"/>
                <select class="form-select" aria-label="Default select example" onChange={(e) => inputValue(e)}>
                  <option selected>직접입력</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                </select>
              </div>
              <div class="input-group">
                <span class="input-group-text">Title</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
              <div class="input-group">
                <span class="input-group-text">Message</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
              <div className='submitBtn'>
                <button type="submit" class="btn btn-dark" onClick={sendMessage}>Send Message</button>
              </div>
            </form>
          </div>
        </ContactDiv>
        <ImgDiv>
          <img src='https://cdn.discordapp.com/attachments/938684956916449330/938689047805698048/photo_2017-12-09_23-10-00.jpeg'></img>
        </ImgDiv>
      </MainDiv>
      
    </Layout>
  );
}

export default Contact;
