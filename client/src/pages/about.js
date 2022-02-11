
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import arrowIcon from "../_images/arrow-right.png";
import logo from '../_images/logo.png';
import humanLogo from '../_images/human.png';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Layout from "./layout";
import { boxFade, MediaQuery } from "../GlobalStyle";
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Slick import
import React, { Component } from "react";
// import Slider from "react-slick";



export const AlignDiv = styled.div`
    display: flex;
    justify-content: center;
    // flex-direction: column;
`;

export const ImageTrans = styled.div`
    display: flex;
    justify-content: center;
    // background-color: #6581A6;
    // : 1px solid red;
    width: 70%;
    heigth: 70%;
    animation: 0.7s ease-in-out ${boxFade};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1150px;
//   height: 600px;
  padding: 50px;
  margin: 30px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  //*** 1px solid #f6f6f6;
  border-radius: 10px;
  animation: 0.7s ease-in-out ${boxFade};

`;

export const BlackContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 400px;
  padding: 50px;
  margin-right: 25px;
  margin-left: 25px;
  background-color: #4B4948;
  box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  //*** 1px solid #f6f6f6;
  border-radius: 10px;
`;


export const TextArea = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20px;
    flex-direction: column;
    animation: 0.7s ease-in-out ${boxFade};

    .introLogoDiv {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        //*** solid 1px red;
    }

    .introLogo {
        display: flex;
        width: 50px;
        hegith: 50px;
        //*** solid 1px red;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .introTitle {
        font-size: 30px;
        color : black;
        // text-align: center;
        //*** solid 1px red;
    }

    .introContent {
        font-size: 20px;
    }
`;

export const ValueList = styled.div`
    align-items: center;
    display: flex;
    flex-direction : column;
    animation: 0.7s ease-in-out ${boxFade};

    .valueTitle {
        font-size: 30px;
        margin-bottom: 20px;
    }
    
    div:nth-child(2) {
        display: flex;
    }
`;
export const ValueImgDiv = styled.div`
    //*** solid 1px red;
    display: flex;
    flex-direction: row;
`;
export const ValueImg = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    animation: 0.7s ease-in-out ${boxFade};
    //*** solid 1px red;

    .logo {
        width: 150px;
        height: 150px;
        margin-bottom: 30px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .title {
        //*** solid 1px red;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: white;
    }

`;

export const Musician = styled.div`
    
    display: flex;
    justify-content: center;
    animation: 0.7s ease-in-out ${boxFade};
    // align-items: center;
    //*** solid 1px red;
    // margin: 50px;

    .introLogoDiv {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        //*** solid 1px red;
    }
    
    .introLogo {
        display: flex;
        width: 50px;
        hegith: 50px;
        //*** solid 1px red;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    
    .musician_img {
        display: flex;
        justify-content: center;
        // width: 500px;
        //*** solid 1px blue;
        box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -40px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;

        img {
            margin: 5px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            
        }
        
    }

    .detail_comment {
        display: flex;
        flex-direction: column;
        //*** solid 1px red;
        text-align: center;
        margin-left: 50px;
        margin-top: 100px;
    }

    .musician_comment {
        //*** solid 1px red;
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 300px;
       
        
        p {
            margin-top: 25px;
            font-size: 25px;
        }
    }

    .portfolio_btn {
        display: flex;
        justify-content: center;
        //*** solid 1px red;
        // position: relative;
        // top: 300px;

    }

`;

export const Concert = styled.div`
    display: flex;
    justify-content: center;
    animation: 0.7s ease-in-out ${boxFade};
    // margin: 50px;
    //*** solid 1px red;
    

    .concertInfo {
        display: flex;
        flex-direction: column;
        //*** solid 1px red;
        text-align: center;
        width: 500px;
        margin: 10px;
        margin-top: 130px;
        font-size: 20px;
    }

    .introLogoDiv {
        display: flex;
        justify-content: center;
        //*** solid 1px red;
        margin-bottom: 20px;
    }
    
    .introLogo {
        display: flex;
        width: 50px;
        hegith: 50px;
        //*** solid 1px red;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .concertContentDiv {
        p {
            font-size: 25px;
        }
    }

    .concertImg {
        margin: 10px;
        width: 500px;
        display: flex;
        flex-direction: row;
        box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -40px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
        
    }

    .concertImg > div > div{
        width: 250px;
        height: 350px;
        // object-fit: cover;
        overflow: hidden;
    }

    .concertImg img {
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
        object-fit: cover;
    }

    .concertImg img:hover {
        transform: scale(1.05);
    }
`;
function About() {
    return (
        <>
            <Header></Header>
            <AlignDiv>
                <div>
                <ContentWrapper>
                    <ImageTrans>
                        <div>
                            <img src='https://cdn.discordapp.com/attachments/938684956916449330/941211195686387732/photo_2022-02-10_14.54.42.jpeg'></img>
                        </div>
                    </ImageTrans>
                    <TextArea>
                        <div className='introLogoDiv'>
                            <div className='introLogo'>
                                <img src='https://cdn.discordapp.com/attachments/938684956916449330/941231446910185492/2017_.png'></img>
                            </div>
                        </div>
                        <div className='introTitle'>
                            <p><b>불난데 부채질</b>은<br/>세상을 바꾸는 문화기업입니다.</p>
                        </div>
                        <div className='introContent'>
                            <p>우리는 사회적 기업으로서,<br/>문화를 사랑하는 많은 청춘들과 함께 성장하고 있습니다.</p>
                        </div>
                    </TextArea>
                </ContentWrapper>

                <ContentWrapper>
                    <ValueList>
                        <div className='valueTitle'><b>불난데 부채질</b>은 사람의 가치를 발견합니다.</div>
                        <ValueImgDiv>
                        <BlackContentWrapper>
                            <ValueImg>
                                <div className='logo'>
                                    <img src='https://cdn.discordapp.com/attachments/938684956916449330/941238520851341362/business-people_negative.png'></img>
                                </div>
                                <div className='title'>
                                    <h4>Connect</h4>
                                </div>
                                <div className='title'>
                                    <p>너와 내가 모여 <b>우리</b>가 되고,<br/>우리가 <b>나누는 문화(Culture Shargin)</b>을 통해 더 나은 사회로 <b>연결</b>됩니다.</p>
                                </div>
                            </ValueImg>
                        </BlackContentWrapper>
                        <BlackContentWrapper>
                            <ValueImg>
                                <div className='logo'>
                                    <img src='https://cdn.discordapp.com/attachments/938684956916449330/941238520499044352/orchestra_negative.png'></img>
                                </div>
                                <div className='title'>
                                    <h4>Artist</h4>
                                </div>
                                <div className='title'>
                                    <p>잠재력 있는 아티스트를 발굴하여 국내 최초로 Culture Sharing을 기획 및 실행하고 있습니다.</p>
                                </div>
                            </ValueImg>
                        </BlackContentWrapper>
                        <BlackContentWrapper>
                            <ValueImg>
                                <div className='logo'>
                                    <img src='https://cdn.discordapp.com/attachments/938684956916449330/941238521065267200/festival_negative.png'></img>
                                </div>
                                <div className='title'>
                                    <h4>Culture Share</h4>
                                </div>
                                <div className='title'>
                                    <p>불난데 부채질의 Culture Sharing은 새로운 새상을 만들어가는 문화 브랜드로서 묻혀있는 인재를 발굴하고 지원합니다.</p>
                                </div>
                            </ValueImg>
                        </BlackContentWrapper>
                        </ValueImgDiv>
                    </ValueList>
                </ContentWrapper>
                <div style={{width: '100px', heigth: '100px'}}>

                </div>

                <ContentWrapper>
                    <Musician>
                        <div className='musician_img'>
                            <img src="https://cdn.discordapp.com/attachments/938684956916449330/939061482900049950/musician.jpeg"></img>
                        </div>
                        <div className='detail_comment'>
                            <div className='introLogoDiv'>
                                <div className='introLogo'>
                                    <img src='https://cdn.discordapp.com/attachments/938684956916449330/941231446910185492/2017_.png'></img>
                                </div>
                            </div>
                            <div className='musician_comment'>
                                <h1><b>아티스트</b>의 <b>가치를 발견</b>하다.</h1>
                                <p>불난데 부채질은 아티스트분들을 지원합니다.<br/>그들의 재능이 사회에 빛을 발할 수 있도록<br/>그들의 이야기를 공연으로 만들어<br/>관객에게 전달합니다.</p>
                            </div>
                            <div className='portfolioMove'>
                                <div className='portfolio_btn'>
                                    <Link to='project'>
                                        <button type="button" class="btn btn-dark">Show Project</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Musician>
                </ContentWrapper>

                <ContentWrapper>
                    <Concert>
                        <div className='concertInfo'>
                            <div className='introLogoDiv'>
                                <div className='introLogo'>
                                    <img src='https://cdn.discordapp.com/attachments/938684956916449330/941231446910185492/2017_.png'></img>
                                </div>
                            </div>
                            <div className='concertTitleDiv'>
                                <h1><b>청춘</b>의 <b>열정</b>을 <b>응원</b>합니다.</h1>
                            </div>
                            <div className='concertContentDiv'>
                                <p><br/>불난데 부채질의 <b>Culture Sharign</b>은
                                <br/>
                                청춘들의 열정에 불을 지피고<br/>그들의 꿈에 한발자국 더 다가갈 수 있도록<br/>응원합니다.</p>
                            </div>
                        </div>
                        <div className='concertImg'>
                            <div>
                                <div>
                                    <Link to='project/detail/1'>
                                        <img name='하늘에별따기' src="https://cdn.discordapp.com/attachments/938684956916449330/939322806498394192/bulbuConcert.jpg"></img>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='project/detail/4'>
                                        <img name='1250project' src="https://media.discordapp.net/attachments/938684956916449330/939783195367444490/concert.2.jpeg"></img>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Link to='project/detail/3'>
                                        <img name='시즌'src="https://cdn.discordapp.com/attachments/938684956916449330/939783195673657364/concert1.jpeg"></img>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='project/detail/2'>
                                        <img name='소통' src="https://cdn.discordapp.com/attachments/938684956916449330/939783196034359296/concert3.jpeg"></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </Concert>
                </ContentWrapper>
                </div>
            </AlignDiv>

            <Footer></Footer>
        </>
        
    )
}

export default About;
