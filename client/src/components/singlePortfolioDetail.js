import { useParams } from "react-router-dom";
import styled from "styled-components";
import { dummydata } from "../data/dummydata";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  :nth-child(1) {
    font-size: 25px;
    padding: 5px;
  }
`;

// export const MainTitle = styled.div``

export const SubDiv = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  img {
    width: 500px;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  img:hover {
    /* transform: scale(1.05) translateY(-10px); */
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentName = styled.div`
  background-color: #e9e9e9e9;
  border-radius: 10px;
  padding: 10px;
  margin: 3px;
  font-size: 14px;
`;

export const Content = styled.div`
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 10px;
  margin: 3px;
  font-size: 14px;
`;

function SinglePortfolioDetail() {
  const params = useParams();
  // params = { * : /detail/1, id: 1 }

  const data = dummydata.filter((el) => {
    if (el.id == params.id) {
      return el;
    }
  });

  return (
    // <div>{console.log(data)}d</div>
    <MainDiv>
      {/* <MainTitle></MainTitle> */}
      <div>{data[0].title}</div>
      <SubDiv>
        <img src={data[0].img} />
        <ContentDiv>
          <ContentBox>
            <ContentName>행사명</ContentName>
            <Content>{data[0].title}</Content>
          </ContentBox>
          <ContentBox>
            <ContentName>행사일시</ContentName>
            <Content>{data[0].date}</Content>
          </ContentBox>
          <ContentBox>
            <ContentName>행사분류</ContentName>
            <Content>{data[0].desc}</Content>
          </ContentBox>
        </ContentDiv>
      </SubDiv>
    </MainDiv>
  );
}

export default SinglePortfolioDetail;
