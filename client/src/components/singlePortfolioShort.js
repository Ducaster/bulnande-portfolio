import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { MediaQuery } from "../GlobalStyle";

export const textAciton = keyframes`
  0% {
    color :black;
  }
  60%{
    color : #ee292f;
  }
  100%{
    color : black;
}
`;

export const MainDiv = styled.div`
  width: 565px;
  height: 340px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  padding: 40px 0px 40px 0px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;

  ${MediaQuery.mobile} {
    padding: 20px 0px 20px 0px;
    width: 370px;
    height: 450px;
  }
`;

export const MainTitle = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bold;
  margin-left: 30px;
  animation: 1s ease-in-out ${textAciton};
  cursor: pointer;

  :hover {
    color: #ee292f;
  }

  ${MediaQuery.mobile} {
    margin-left: 40px;
    font-size: 17px;
  }
`;

export const SeeMore = styled.div`
  font-size: 10px;
  display: flex;
  margin-top: 10px;
  justify-content: right;
  cursor: pointer;

  :hover {
    color: #ee292f;
  }
`;

export const ContentWarpper = styled.div`
  display: flex;
  img {
    width: 300px;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    margin: 0 20px 0 30px;
    box-shadow: rgba(50, 50, 93, 1) 0px 10px 10px -10x;
  }
  img:hover {
    transform: scale(1.05) translateY(-5px);
  }

  ${MediaQuery.mobile} {
    flex-direction: column;
    align-items: center;

    img {
      margin: 0px 0px 10px 0px;
      width: 285px;
    }
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;

  ${MediaQuery.mobile} {
    align-items: center;
    margin-right: 0px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentName = styled.div`
  width: 65px;
  background-color: #2f2f2f;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  font-size: 12px;
  color: white;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 1) 2px 2px 0px;
`;

export const Content = styled.div`
  width: 100px;
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  font-size: 12px;
  box-shadow: rgba(50, 50, 93, 0.2) 1px 1px 0px;

  ${MediaQuery.mobile} {
    width: 200px;
  }
`;

function SinglePortfolioShort({ data }) {
  const navigate = useNavigate();

  //디테일 페이지로 이동
  const moveToDetail = (id) => {
    handleTop();
    navigate(`/project/sdetail/${id}`);
  };

  // 클릭하면 스크롤이 위로 올라가는 함수
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <MainDiv>
      <MainTitle onClick={() => moveToDetail(data.id)}>{data.title}</MainTitle>
      <ContentWarpper>
        <img onClick={() => moveToDetail(data.id)} src={data.img} />
        <ContentDiv className="right">
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
            <Content>{data.category}</Content>
          </ContentBox>
          <SeeMore onClick={() => moveToDetail(data.id)}>See more</SeeMore>
        </ContentDiv>
      </ContentWarpper>
    </MainDiv>
  );
}

export default SinglePortfolioShort;
