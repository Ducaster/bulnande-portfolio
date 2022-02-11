import { useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { dummydataShort } from "../data/dummydataShort";
import Layout from "../pages/layout";
import PhotoModal from "./photoModal";
import { textAciton } from "./singlePortfolio";

const boxFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  animation: 0.6s ease-in-out ${boxFade};
`;

export const ContentWrapper = styled.div`
  width: 900px;
  padding: 50px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
`;

export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  /* padding: 5px; */
  animation: 1s ease-in-out ${textAciton};
  margin-bottom: 7px;

  span {
    margin-right: 4px;
  }
`;

export const SubDiv = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  img {
    width: 500px;
    border-radius: 15px;
    /* cursor: pointer; */
    /* transition: transform 0.2s ease-in-out; */
    box-shadow: rgba(50, 50, 93, 1) 0px 10px 10px -10x;
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
  width: 75px;
  background-color: #e9e9e9e9;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  font-size: 14px;
  color: white;
  background-color: #2f2f2f;
  box-shadow: rgba(50, 50, 93, 1) 2px 2px 0px;
  text-align: center;
  /* align-items: center; */
`;

export const Content = styled.div`
  max-width: 187px;
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  font-size: 14px;
  box-shadow: rgba(50, 50, 93, 0.2) 1px 1px 0px;
`;

export const Text = styled.div``;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 5px;

  img {
    width: 180px;
  }
`;

function SinglePortfolioShortDetail() {
  const params = useParams();

  //사진 열리는 조건 상태
  const [openPhoto, setOpenPhoto] = useState(false);

  //로드하는 사진 지정 상태
  const [current, setCurrent] = useState(0);

  //사진 클릭시 모달창 열리는 함수
  const handleOpenPhoto = (idx) => {
    setCurrent(idx);
    if (openPhoto) {
      setOpenPhoto(false);
    } else {
      setOpenPhoto(true);
    }
  };

  //더미에서 데이터 추출
  const data = dummydataShort.filter((el) => {
    if (el.id == params.id) {
      return el;
    }
  });

  return (
    <Layout>
      <MainDiv>
        <ContentWrapper>
          <MainTitle>
            <span>#{data[0].id}</span>
            <span>{data[0].title}</span>
          </MainTitle>
          <SubDiv>
            <img src={data[0].img} alt="" />
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
                <Content>{data[0].category}</Content>
              </ContentBox>
              {data[0].season ? (
                <ContentBox>
                  <ContentName>행사회차</ContentName>
                  <Content>{data[0].season}</Content>
                </ContentBox>
              ) : (
                ""
              )}
              <ContentBox>
                <ContentName>공연자</ContentName>
                <Content>{data[0].performer}</Content>
              </ContentBox>
            </ContentDiv>
          </SubDiv>
        </ContentWrapper>
        <ContentWrapper>
          <MainTitle>행사소개</MainTitle>
          <Text>{data[0].desc}</Text>
        </ContentWrapper>
        <ContentWrapper>
          <MainTitle>행사사진</MainTitle>
          <Photos>
            {data[0].photo
              ? data[0].photo.map((el, idx) => {
                  return (
                    <img
                      style={{ cursor: "pointer" }}
                      key={idx}
                      onClick={() => handleOpenPhoto(idx)}
                      src={el}
                      alt=""
                    />
                  );
                })
              : ""}
          </Photos>
          {openPhoto ? (
            <PhotoModal
              data={data[0].photo}
              idx={current}
              handleOpenPhoto={handleOpenPhoto}
            />
          ) : (
            ""
          )}
        </ContentWrapper>
        {data[0].video ? (
          <ContentWrapper>
            <MainTitle>행사영상</MainTitle>
            <VideoWrapper>
              <iframe
                width="640"
                height="360"
                src={data[0].video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </VideoWrapper>
          </ContentWrapper>
        ) : (
          ""
        )}
      </MainDiv>
    </Layout>
  );
}

export default SinglePortfolioShortDetail;
