import { useRef } from "react";
import styled from "styled-components";
import Layout from "./layout";
import emailjs from "@emailjs/browser";
import { baseBlack, boxFade, MediaQuery } from "../GlobalStyle";
import Swal from "sweetalert2";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 650px;
  animation: 0.7s ease-in-out ${boxFade};
  margin: 25px 0px 25px 0px;

  ${MediaQuery.middle} {
    height: auto;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${MediaQuery.middle} {
    flex-direction: column;
    gap: 15px;
  }
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

  ${MediaQuery.mobile} {
    width: 370px;
  }
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
    align-items: none;
  }

  ${MediaQuery.middle} {
    width: 600px;
    align-items: start;
  }

  ${MediaQuery.mobile} {
    width: 370px;
    align-items: start;

    p {
      font-size: 14px;
    }
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

  ${MediaQuery.middle} {
    width: 600px;
    margin-left: 0px;
  }

  ${MediaQuery.mobile} {
    width: 370px;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .contactForm {
    display: flex;
    justify-content: center;
    margin: 20px;
  }

  .title {
    display: flex;
    height: 35px;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
  }

  ${MediaQuery.mobile} {
    .contactForm {
      margin: 10px;
    }

    .title {
      font-size: 18px;
    }
  }
`;

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 5px 5px 5px;
`;

const ContentWarpper = styled.div`
  display: flex;
  margin: 5px;
  border-bottom: 1px solid #d6d6d6;
  padding: 3px;
`;

const ContactLabel = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
  margin-right: 15px;
  width: 40px;
  color: ${baseBlack};
  font-size: 14px;

  ${MediaQuery.mobile} {
    font-size: 13px;
  }
`;

const ContactInput = styled.input`
  width: 400px;
  border: none;

  :focus {
    outline: none;
  }

  ${MediaQuery.mobile} {
    width: 100px;
    font-size: 13px;
  }
`;

const ContactTextarea = styled.textarea`
  display: flex;
  border: 1px solid #d6d6d6;
  padding: 5px;

  :focus {
    outline: none;
  }
`;

const ContactBtn = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 5px 5px;
  width: 465px;
  font-size: 14px;
  background-color: ${baseBlack};
  color: white;
  border: none;
  height: 35px;

  ${MediaQuery.mobile} {
    width: 270px;
    font-size: 13px;
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
          Swal.fire({
            icon: "success",
            title: "메일발송 완료",
            text: "소중한 의견 감사합니다",
          });
          console.log(form);
        },
        (error) => {
          alert(error);
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
                <div className="title">Contact us</div>
              </ContactDiv>
            </ContentWrapper>
            <ContentWrapper>
              <ContactDiv>
                <div className="contactForm">
                  <form ref={form} onSubmit={sendEmail}>
                    <ContentWarpper>
                      <ContactLabel for="name">Name</ContactLabel>
                      <ContactInput id="name" />
                    </ContentWarpper>
                    <ContentWarpper>
                      <ContactLabel for="email">Email</ContactLabel>
                      <ContactInput id="email" type="email" />
                    </ContentWarpper>
                    <ContentWarpper>
                      <ContactLabel for="title">Title</ContactLabel>
                      <ContactInput id="title" />
                    </ContentWarpper>
                    <TextareaWrapper>
                      <ContactLabel for="message">Message</ContactLabel>
                      <ContactTextarea id="message" />
                    </TextareaWrapper>
                    <div className="submitBtn">
                      <ContactBtn type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              </ContactDiv>
            </ContentWrapper>
          </MainWrapper>
          <ImgDiv>
            <img
              src="https://cdn.discordapp.com/attachments/938684956916449330/945284820446117898/contact_img3.jpg"
              alt=""
            />
          </ImgDiv>
        </MainDiv>
      </MainContainer>
    </Layout>
  );
}

export default Contact;
