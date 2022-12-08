import styled from "styled-components";
import { MediaQuery } from "../../style/GlobalStyle";
import { FlexDiv, FlexDivCentered } from "../../style/utility.style";

export default function PhotoModal({ handleOpenPhoto, data, idx }) {
  return (
    <MainDiv onClick={handleOpenPhoto}>
      <div>
        <Photo src={data[idx]} alt="" />
      </div>
    </MainDiv>
  );
}

const MainDiv = styled(FlexDivCentered)`
  background-color: rgba(58, 58, 58, 0.4);
  position: fixed;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
  z-index: 10;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
  }
`;

const Photo = styled.img`
  width: 1000px;

  ${MediaQuery.mobile} {
    width: 350px;
  }
`;
