import { useEffect, useRef } from "react";
import styled from "styled-components";
import Layout from "./layout";
import emailjs from "@emailjs/browser";
import { baseBlack, boxFade, MediaQuery } from "../style/GlobalStyle";
import Swal from "sweetalert2";
import { FlexColumnDiv, FlexDiv } from "../style/utility.style";

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    Swal.fire({
      title: "저희 단체는 운영이 중단되었습니다.",
      text: `저희 단체는 현재 운영이 중단되었습니다. 특별한 문의 사항이 있을 시 메일로 문의해주세요.`,
      icon: "info",
      timer: 5000,
      timerProgressBar: true,
    });
  }, []);

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
        <MainDiv>
          <MainWrapper>
            <ContentWrapper>
              <ContactDiv>
                <div className="title">Contact us</div>
              </ContactDiv>
            </ContentWrapper>
            <ContentWrapper className="bottom">
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

const MainContainer = styled(FlexColumnDiv)`
  gap: 20px;
  height: calc(100vh - 230px);
  animation: 0.7s ease-in-out ${boxFade};
  margin: 25px 0px 25px 0px;

  ${MediaQuery.middle} {
    height: auto;
  }
`;

const MainDiv = styled(FlexDiv)`
  align-items: center;

  ${MediaQuery.middle} {
    flex-direction: column;
    gap: 15px;
  }
`;

const MainWrapper = styled(FlexColumnDiv)`
  gap: 14px;
`;

const ContentWrapper = styled(FlexDiv)`
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

  &.bottom {
    height: 340px;
  }
`;

const ImgDiv = styled(FlexDiv)`
  margin-left: 10px;
  overflow: hidden;
  border-radius: 15px;
  width: 540px;
  height: 410px;
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

const ContactDiv = styled(FlexColumnDiv)`
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

const TextareaWrapper = styled(FlexDiv)`
  justify-content: start;
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
  margin-left: 10px;
  padding: 5px;
  width: 400px;
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
