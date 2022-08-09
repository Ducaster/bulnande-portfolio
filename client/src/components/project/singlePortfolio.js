import { useNavigate } from "react-router-dom";
import {
  Content,
  ContentBox,
  ContentDiv,
  ContentName,
  ContentWarpper,
  MainDiv,
  MainTitle,
  SeeMore,
} from "../../style/project.style";

export default function SinglePortfolio({ data }) {
  const navigate = useNavigate();

  //디테일 페이지로 이동
  const moveToDetail = (id) => {
    handleTop();
    navigate(`/project/detail/${id}`);
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
        <img onClick={() => moveToDetail(data.id)} src={data.img} alt="" />
        <ContentDiv className="right">
          <ContentBox>
            <ContentName>행사명</ContentName>
            <Content>{data.title}</Content>
          </ContentBox>
          <ContentBox>
            <ContentName>행사회차</ContentName>
            <Content>{data.season}</Content>
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
