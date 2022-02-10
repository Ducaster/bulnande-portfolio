
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


export const AlignDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ImageTrans = styled.div`
    display: flex;
    justify-content: center;
    // background-color: #6581A6;
    border : 1px solid red;
    width: 70%;
    heigth: 70%;

    img {
        width: 100%;
        height: 100%;
        over-fit: cover;
    }
    

`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1150px;
  height: 600px;
  padding: 50px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
`;


export const TextArea = styled.div`
    display: flex;
    justify-content: center;
    // align-items: column;
    flex-direction: column;
    border: solid 1px red;

    p {
        font-size: 30px;
        color : black;
        // text-align: center;
        border: solid 1px red;
    }

`;

export const ValueList = styled.div`
    align-items: center;
    display: flex;
    flex-direction : column;

    .valueTitle {
        font-size: 30px;
    }
    
    div:nth-child(2) {
        display: flex;
    }
`;

export const ValueImg = styled.div`
    display: flex;
    justify-content: center;
    border: solid 1px red;

    .logo {
        width: 40px;
        height: 40px;
    }
    .title {
        border: solid 1px red;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: black;
    }

`;

export const Musician = styled.div`
    
    display: flex;
    justify-content: center;
    // align-items: center;
    border: solid 1px red;
    // margin: 50px;
    
    .musician_img {
        width: 500px;
    }
    
    div > img {
        margin: 5px;
        width: 400px;
        object-fit: cover;
    }

    .detail_comment {
        display: flex;
        flex-direction: column;
        border: solid 1px red;
        text-align: center;
    }

    .portfolio_btn {
        display: flex;
        justify-content: center;
        border: solid 1px red;
        position: relative;
        top: 300px;

    }

`;

export const Concert = styled.div`
    display: flex;
    justify-content: center;
    // margin: 50px;
    border: solid 1px red;

    .concertInfo {
        display: flex;
        flex-direction: column;
        border: solid 1px red;
        text-align: center;
        width: 500px;
        margin: 10px;
    }

    h1 {
        font-size: 30px;
    }

    .concertImg {
        margin: 10px;
        width: 500px;
        display: flext;
        // justify-content: center;
        // align-items: row;
        flex-direction: column;
        border : solid 1px red;
    }

    .concertImg > div > div{
        width: 250px;
        height: 350px;
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
                <ContentWrapper>
                    <ImageTrans>
                        <img src='https://cdn.discordapp.com/attachments/938684956916449330/941211195686387732/photo_2022-02-10_14.54.42.jpeg'></img>
                    </ImageTrans>
                    <TextArea>
                        <div className='firstTitle'><p><b>불난데 부채질</b><br/>세상을 바꾸는 문화기업입니다.</p></div>
                        <div>
                            <p>우리는 사회적 기업으로서<br/>문화를 사랑하는 많은 청춘들과 함께 성장하고 있습니다.</p>
                        </div>
                    </TextArea>
                </ContentWrapper>

                <ContentWrapper>
                    <ValueList>
                        <div className='valueTitle'>사람의 가치를 발견합니다.</div>
                        <div>
                            <ValueImg>
                                <img className='logo' src='https://cdn.discordapp.com/attachments/938684956916449330/941212833364996096/business-people.png'></img>
                                <div className='title'>
                                    <p>Connect</p>
                                    <p>개인과 개인을 연결합니다.</p>
                                </div>
                            </ValueImg>
                            <ValueImg>
                                <img className='logo' src='https://cdn.discordapp.com/attachments/938684956916449330/941213624503001108/orchestra.png'></img>
                                <div className='title'>
                                    <p>Artist</p>
                                    <p>개인의 꿈을 이룹니다.</p>
                                </div>
                            </ValueImg>
                            <ValueImg>
                                <img className='logo' src='https://cdn.discordapp.com/attachments/938684956916449330/941215089376235590/festival.png'></img>
                                <div className='title'>
                                    <p>Share</p>
                                    <p>가치를 공유합니다.</p>
                                </div>
                            </ValueImg>
                        </div>
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
                            <div className='musician_comment'>
                                <h1>Value Creating for Artist</h1>
                                <p>we support stage for artist.<br/>And we discover unknown artists and introduce them to the audience.</p>
                            </div>
                            <div className='portfolioMove'>
                                <div className='portfolio_btn'>
                                    <Link to='portfolio'>
                                        <button type="button" class="btn btn-dark">show portfolio</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Musician>
                </ContentWrapper>

                <ContentWrapper>
                    <Concert>
                        <div className='concertInfo'>
                            <h1>Passion Concert for youth</h1>
                            <br/>
                            <p>we support passion of youth.<br/>we want to explod your passion.</p>
                        </div>
                        <div className='concertImg'>
                            <div>
                                <div>
                                    <Link to='portfolio/detail/1'>
                                        <img name='하늘에별따기' src="https://cdn.discordapp.com/attachments/938684956916449330/939322806498394192/bulbuConcert.jpg"></img>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='portfolio/detail/4'>
                                        <img name='1250project' src="https://media.discordapp.net/attachments/938684956916449330/939783195367444490/concert.2.jpeg"></img>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Link to='portfolio/detail/3'>
                                        <img name='시즌'src="https://cdn.discordapp.com/attachments/938684956916449330/939783195673657364/concert1.jpeg"></img>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='portfolio/detail/2'>
                                        <img name='소통' src="https://cdn.discordapp.com/attachments/938684956916449330/939783196034359296/concert3.jpeg"></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </Concert>
                </ContentWrapper>

            </AlignDiv>

            <Footer></Footer>
        </>
        
    )
}

export default About;
