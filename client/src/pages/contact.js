
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

export const ContentWrapper = styled.div`
  display: flex;
  width: 1150px;
  height: 600px;
  padding: 50px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
`;

export const ImgDiv = styled.div`
  border: solid 1px red;
  width: 50%;
  height: 100%;
  margin-left: 10px;
  

  img {
    width: 100%;
    height: 100%;
    over-fit: cover;
  }

`;

export const ContactDiv = styled.div`
  border: solid 1px red;
  // display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  

  .contactForm {
    display: flex;
    justify-content: center;
    border: solid 1px red;
    margin: 20px;
  }

  .title {
    border: solid 1px red;
    margin: 20px;
    display: flex;
    justify-content: center;
    
  }

  input {
    width: 100%;
    font-size: 1vmin;
  }
  
  .input-group-text {
    width: 80px;
    font-size: 1.3vmin;
    justify-content: center;
  }
  .span {
    display: inline-block;
    width: 20px;
    text-align: center;
    
  }


  .form-select {
    font-size: 1vmin;
  }

  .textarea {
    margin-bottom: 10px;
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
      <ContentWrapper>
        <ContactDiv>
          <div className='title'>
            <h1>Contact us</h1>
          </div>
          <div className='contactForm'>
            <form onSubmit={(e) => e.preventDefault()}>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Nickname</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Email</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
                <span class="span input-group-text">@</span>
                {checkValue ? <input type="text" class="form-control" placeholder={email} aria-label="Server" value=" "/> : <input type="text" class="form-control" value={email}/>}
                <select class="form-select" aria-label="Default select example" onChange={(e) => inputValue(e)}>
                  <option selected>직접입력</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Title</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
              </div>
              <div class="input-group">
                <span class="input-group-text">Message</span>
                <textarea class="form-control" aria-label="With textarea" cols='1'></textarea>
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
      </ContentWrapper>
      
    </Layout>
  );
}

export default Contact;
