
import Header from "../components/header";
import styled from "styled-components";
import arrowIcon from "../_images/arrow-right.png";
import logo from '../_images/logo.png';
import humanLogo from '../_images/human.png';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

export const ImageTrans = styled.div`
    display: flex;
    justify-content: center;
    // background-color: #6581A6;
    border : 1px solid red;

    img {
        // position: relative;
        // left: 50px;
    }



`;



export const TextArea = styled.div`
    display: flex;
    justify-content: center;
    background-color: #5D728E;
    // width: 1000px;
    // height: 250px;
    // font-size: 50px;
    // position: relative;
    top: 50px;
    right: 500px;

    p {
        font-size: 80px;
        color : white;
        text-align: center;
    }

`;

export const ValueList = styled.div`
    align-items: center;
    display: flex;
    flex-direction : column;
    
    div:nth-child(2) {
        display: flex;
        
    }
`;

export const ValueImg = styled.div`
    display: flex;
    justify-content: center;
    border: solid 1px black;

    .logo {
        width: 40px;
        height: 40px;
    }
    .title {
        border: solid 1px black;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: black;
    }

`;

export const Musician = styled.div`
    display: flex;
    // justify-content: center;
    border: solid 1px red;
    margin: 20px;
    
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
    }
`
function About() {
    return (
        <>
            <Header />
            <ImageTrans>
                <img src="https://media.discordapp.net/attachments/938684956916449330/939025934282022962/51742564ceae459f.jpeg?width=701&height=468"></img>
                <TextArea>
                    <p>We support youth dream</p>
                </TextArea>
            </ImageTrans>
            <ValueList>
                <div>사람의 가치를 발견합니다.</div>
                <div>
                    <ValueImg>
                        <img className='logo' src={ humanLogo }></img>
                        <div className='title'>
                            <p>Humanity</p>
                            <p>개인과 개인을 연결합니다.</p>
                        </div>
                    </ValueImg>
                    <ValueImg>
                        <img className='logo' src={ humanLogo }></img>
                        <div className='title'>
                            <p>Dream</p>
                            <p>개인의 꿈을 이룹니다.</p>
                        </div>
                    </ValueImg>
                    <ValueImg>
                        <img className='logo' src={ humanLogo }></img>
                        <div className='title'>
                            <p>Share</p>
                            <p>가치를 공유합니다.</p>
                        </div>
                    </ValueImg>
                </div>
            </ValueList>
            <div style={{width: '100px', heigth: '100px'}}>

            </div>
            <Musician>
                <div className='musician_img'>
                    <img src="https://cdn.discordapp.com/attachments/938684956916449330/939061482900049950/musician.jpeg"></img>
                </div>
                <div className='detail_comment'>
                    <div className='musician_comment'>
                        <h1>Value Creating for Artist</h1>
                        <p>불난데 부채질은 아티스트들을 위한 무대를 제공합니다.<br/>뿐만 아니라 아티스트를 발굴하여 관객에게 소개합니다.</p>
                    </div>
                    <div calssName='portfolio_btn'>
                        <Link to='portfolio'>
                            <Button>show portfolio</Button>
                        </Link>
                    </div>
                </div>
            </Musician>
        </>
        
    )
}

export default About;
