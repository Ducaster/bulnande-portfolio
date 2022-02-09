import styled from "styled-components";
import Layout from "./layout";

export const AllTeam = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: solid 1px red;
  margin: 50px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  // border: solid 3px red;
  border-radius: 70%;
  overflow: hidden;

  .profileImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px red;
  width: 200px;
  // height: 200px;
`

export const Career = styled.div`
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  text-align: center;
  height: 100px;

  p{
    margin-bottom:0;
  }
`;

function Team() {
  return (
    <Layout>
      <AllTeam>
        <Profile>
          <img className='profileImg' src='https://cdn.discordapp.com/attachments/938684956916449330/940071831719792740/photo_2022-02-07_11.29.31.jpeg'></img>
        </Profile>
        <Name>
          <h5>이민형<span style={{color: 'red', fontWeight: 'bold'}}> / </span> <span style={{color: '#A29797'}}>대표</span></h5>
        </Name>
        <Career>
          <p>강연컨설턴트:이십쎄 대표</p>
          <p>서울시립대 경영학 전공</p>
        </Career>
        <Profile>
        <img className='profileImg' src='https://media.discordapp.net/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg'></img>
        </Profile>
        <Name>
        <h5>익명<span style={{color: 'red', fontWeight: 'bold'}}> / </span> <span style={{color: '#A29797'}}>디자인팀장</span></h5>
        </Name>
        
      </AllTeam>
      <AllTeam>
        <Profile>
        <img className='profileImg' src='https://cdn.discordapp.com/attachments/938684956916449330/940061727670829136/IMG_0691.JPG'></img>
        </Profile>
        <Name>
        <h5>최연호<span style={{color: 'red', fontWeight: 'bold'}}> / </span> <span style={{color: '#A29797'}}>컨텐츠개발팀장</span></h5>
        </Name>
        <Career>
          <p>극단 틔움 연출</p>
          <p>서일대 연극학 전공</p>
        </Career>
        <Profile>
          <img className='profileImg' src='https://media.discordapp.net/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg'></img>
        </Profile>
        <Name>
          <h5>익명<span style={{color: 'red', fontWeight: 'bold'}}> / </span> <span style={{color: '#A29797'}}>마케팅팀장</span></h5>
        </Name>
      </AllTeam>
    </Layout>
  );
}

export default Team;
