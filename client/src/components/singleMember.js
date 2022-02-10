import styled from "styled-components";

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
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 30px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  font-style: italic;
  font-size: 17px;

  div {
    font-style: normal;
    margin-top: 10px;
    font-size: 15px;
    color: #a29797;
  }
`;

export const AllTeam = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  /* border: solid 1px red; */
  margin: 20px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  // border: solid 3px red;
  border-radius: 70%;
  overflow: hidden;

  .profileImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* border: solid 1px red; */
`;

export const Name = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: right;
  /* border: solid 1px red; */
`;

export const Career = styled.div`
  /* border: solid 1px red; */
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
            <h5>
              {data.name}
              <span style={{ color: "#ee292f", fontWeight: "bold" }}>
                {" "}
                /{" "}
              </span>{" "}
              <span style={{ color: "#a29797" }}>{data.position}</span>
            </h5>
          </Name>
          {/* <SubText>Minhyeong Lee</SubText> */}
          <Career>
            Career
            {data.career.map((el, idx) => {
              return <p key={idx}>{el}</p>;
            })}
          </Career>
          <Career>
            Contact
            <p>{data.email}</p>
          </Career>
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
