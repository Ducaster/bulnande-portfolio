import styled from "styled-components";
import { MediaQuery } from "../GlobalStyle";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;

  ${MediaQuery.mobile} {
    max-width: 370px;
    padding: 10px;
  }
`;

export const AllTeam = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 20px 10px 20px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 70%;
  overflow: hidden;

  .profileImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${MediaQuery.mobile} {
    width: 140px;
    height: 140px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  display: flex;
  justify-content: right;

  div {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  ${MediaQuery.mobile} {
    div {
      font-size: 15px;
    }
  }
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: right;
  margin: 7px 0px 7px 0px;

  p {
    color: #a29797;
    margin-bottom: 0;
    font-size: 14px;
  }

  ${MediaQuery.mobile} {
    font-size: 13px;

    p {
      font-size: 11px;
    }
  }
`;

export const SubText = styled.div`
  display: flex;
  justify-content: right;
  font-size: 14px;
`;

export const ImageWarpper = styled.div`
  display: flex;
  justify-content: right;
  img {
    width: 20px;
  }
`;

function SingleMember({ data }) {
  return (
    <ContentWrapper>
      <AllTeam>
        <Profile>
          <img className="profileImg" src={data.profile} alt="" />
        </Profile>
        <Content>
          <Name>
            <div>
              {data.name}
              <span style={{ color: "#ee292f", fontWeight: "bold" }}>
                {" "}
                /{" "}
              </span>{" "}
              <span style={{ color: "#a29797" }}>{data.position}</span>
            </div>
          </Name>
          <SubContent>
            Works
            {data.works.map((el, idx) => {
              return <p key={idx}>{el}</p>;
            })}
          </SubContent>
          <SubContent>
            Contact
            <p>{data.email}</p>
          </SubContent>
        </Content>
      </AllTeam>
      <ImageWarpper>
        <img
          src="https://cdn.discordapp.com/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg"
          alt=""
        />
      </ImageWarpper>
    </ContentWrapper>
  );
}

export default SingleMember;
