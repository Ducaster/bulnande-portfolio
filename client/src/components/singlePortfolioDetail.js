import { useState } from "react";
import { useParams } from "react-router-dom";
import { dummydata } from "../data/dummydata";
import Layout from "../pages/layout";
import {
  Content,
  ContentBox,
  ContentDiv,
  ContentName,
  ContentWrapper,
  MainDiv,
  MainTitle,
  Photos,
  SubDiv,
  Text,
  VideoWrapper,
} from "../style/detail.style";
import PhotoModal from "./photoModal";

function SinglePortfolioDetail() {
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
  const data = dummydata.filter((el) => {
    return el.id === Number(params.id);
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

export default SinglePortfolioDetail;
