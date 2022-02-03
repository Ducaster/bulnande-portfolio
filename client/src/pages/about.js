import Header from "../_component/header";
import styled from "styled-components";
import arrowIcon from "../_images/arrow-right.png";

export const imageTrans = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 10%;
        height: 10%;
        object-fit: contain;
    }
    .bg_img {
        width: 10px;
        height: 10px;
    }
`;

export const ButtonArrow = styled.div`
    display: flex;
`;


function About() {
    return (
        <>
            <Header />
            <imageTrans>
                <div className="bg_img">
                    <img src="https://media.discordapp.net/attachments/938684956916449330/938700066380718090/youth-leadership.jpeg"></img>
                </div>
            </imageTrans>
            <ButtonArrow>
                <button >
                    <img src={ arrowIcon }></img>
                </button>
            </ButtonArrow>
        </>
    )
}

export default About;