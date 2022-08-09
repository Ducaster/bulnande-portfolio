import styled from "styled-components";
import Layout from "./layout";
import AboutFirst from "../components/about/first";
import AboutSecond from "../components/about/second";
import AboutThird from "../components/about/third";
import AboutFourth from "../components/about/fourth";
import { FlexColumnDiv } from "../style/utility.style";

export default function About() {
  return (
    <Layout>
      <AboutContainer>
        <AboutFirst />
        <AboutSecond />
        <AboutThird />
        <AboutFourth />
      </AboutContainer>
    </Layout>
  );
}

const AboutContainer = styled(FlexColumnDiv)`
  width: 100%;
`;
