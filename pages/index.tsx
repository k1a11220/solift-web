import styled from "@emotion/styled";
import type { NextPage } from "next";
import BottomTabs from "../components/bottom-tabs";
import TabIndicator from "../components/tab-indicator";

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  height: 70px;
  margin: 12px 22px;
`;

const Logo = styled.div`
  color: var(--blue500);
  font-size: 26px;
  font-weight: 600;
`;

const SlideContainer = styled.div`
  background-color: var(--grey500);
  height: 230px;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 22px;
  height: calc(100% - 44px);
`;

const Label = styled.p`
  background-color: var(--white);
  padding: 5px 8px;
  font-size: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  color: var(--grey500);
  width: fit-content;
`;

const Title = styled.p`
  font-size: 17px;
  color: var(--white);
  line-height: 1.4;
`;

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Header>
          <Logo>SOLIFT</Logo>
        </Header>
        <SlideContainer>
          <Slide>
            <Label>이벤트</Label>
            <Title>
              아웃백 방문 인증하고 10,000원 <br />
              할인받기
            </Title>
          </Slide>
        </SlideContainer>
        <TabIndicator />
      </div>
      <BottomTabs />
    </>
  );
};

export default Home;
