import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  gap: 15px;

  img {
    width: 300px;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  img:hover {
    transform: scale(1.05) translateY(-5px);
  }
`;

export const SeeMore = styled.div`
  font-size: 10px;
  display: flex;
  margin-top: 10px;
  justify-content: right;
  cursor: pointer;

  :hover {
    font-weight: bold;
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
  font-size: 12px;
`;

export const Content = styled.div`
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 10px;
  margin: 3px;
  font-size: 12px;
`;

function SinglePortfolio({ data }) {
  const navigate = useNavigate();
  const moveToDetail = (id) => {
    navigate(`/portfolio/detail/${id}`);
  };

  return (
    <MainDiv>
      <img onClick={() => moveToDetail(data.id)} src={data.img} />
      <ContentDiv>
        <ContentBox>
          <ContentName>행사명</ContentName>
          <Content>{data.title}</Content>
        </ContentBox>
        <ContentBox>
          <ContentName>행사일시</ContentName>
          <Content>{data.date}</Content>
        </ContentBox>
        <ContentBox>
          <ContentName>행사분류</ContentName>
          <Content>{data.desc}</Content>
        </ContentBox>
        <SeeMore onClick={() => moveToDetail(data.id)}>See more</SeeMore>
      </ContentDiv>
    </MainDiv>
  );
}

export default SinglePortfolio;
