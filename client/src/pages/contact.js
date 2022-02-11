import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Layout from "./layout";
import emailjs from "@emailjs/browser";

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 650px;
  animation: 0.7s ease-in-out ${boxFade};
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  padding: 10px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1150px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;

  p {
    margin: 0px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  overflow: hidden;
  border-radius: 15px;
  width: 540px;
  height: 455px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;

  img {
    /* height: 100%; */
    /* overflow: hidden; */
    /* height: 100%; */
    /* over-fit: cover; */
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* width: 50%; */
  /* height: 500px; */

  .form-control {
    width: 300px;
    min-height: 35px;
  }

  .contactForm {
    display: flex;
    justify-content: center;
    margin: 40px 20px 0px 20px;
  }

  .title {
    margin: 10px;
    display: flex;
    justify-content: center;
    font-size: 23px;
    font-weight: bold;
    /* color: #ee292f; */
  }

  input {
    width: 100%;
    font-size: 1vmin;
  }

  .input-group-text {
    display: flex;
    flex-direction: column;
    width: 100px;
    /* height: 50px; */
    font-size: 1.3vmin;
    justify-content: center;
  }
  .span {
    /* display: inline-block; */
    width: 20px;
    text-align: center;
  }

  .form-select {
    font-size: 1vmin;
  }

  .textarea {
    margin-bottom: 10px;
  }

  .submitBtn {
    display: flex;
    justify-content: center;
    /* border: solid 1px red; */
    margin: 30px;
    /* width: 400px; */
    /* font-size: 20px; */
  }
`;

function Contact() {
  const form = useRef();

  //메일보내는 함수
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h52sk4m",
        "bulbu_contact",
        form.current,
        "user_8qHaapmo2rFmpMZ2GoV0k"
      )
      .then(
        (result) => {
          alert("문의 내용이 정상적으로 전달되었습니다.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      <MainContainer>
        <TextWrapper>
          <p>저희 단체는 현재 운영이 중단되었습니다.</p>
          <p>
            불난데부채질과 관련한 특별한 문의사항이 있을 시 아래로 연락
            부탁드립니다.
          </p>
        </TextWrapper>
        <MainDiv>
          <MainWrapper>
            <ContentWrapper>
              <ContactDiv>
                <div className="title">Contact Us</div>
              </ContactDiv>
            </ContentWrapper>
            <ContentWrapper>
              <ContactDiv>
                <div className="contactForm">
                  <form ref={form} onSubmit={sendEmail}>
                    <div class="input-group mb-3">
                      <label class="input-group-text" id="basic-addon3">
                        Name
                      </label>
                      <input
                        class="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <label class="input-group-text" id="basic-addon3">
                        Email
                      </label>
                      <input
                        class="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        type="email"
                        name="email"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <label class="input-group-text">Title</label>
                      <input
                        class="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        type="text"
                        name="title"
                      />
                    </div>
                    <div class="input-group">
                      <label class="input-group-text">Message</label>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        cols="1"
                        name="message"
                      />
                    </div>
                    <div className="submitBtn">
                      <input class="btn btn-dark" type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              </ContactDiv>
            </ContentWrapper>
          </MainWrapper>
          <ImgDiv>
            <img src="https://cdn.discordapp.com/attachments/938684956916449330/941196311561125889/photo_2022-02-10_13.57.46.jpeg"></img>
          </ImgDiv>
        </MainDiv>
      </MainContainer>
    </Layout>
  );
}

export default Contact;
