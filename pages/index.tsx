import styled from "@emotion/styled";
import type { NextPage } from "next";
import BottomTabs from "../components/bottom-tabs";
import TabIndicator from "../components/tab-indicator";

const Header = styled.header`
  height: 98px;
`;

const SlideContainer = styled.div`
  background-color: var(--grey100);
  height: 230px;
`;

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Header>SOLIFT</Header>
        <SlideContainer></SlideContainer>
        <TabIndicator></TabIndicator>
      </div>
      <BottomTabs />
    </>
  );
};

export default Home;
