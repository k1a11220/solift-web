import styled from "@emotion/styled";
import type { NextPage } from "next";
import BottomTabs from "@components/bottom-tabs";
import TabIndicator from "@components/tab-indicator";

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
  display: flex;
  background-color: var(--grey500);
  aspect-ratio: 16 / 9;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  height: 100%;
  aspect-ratio: 16 / 9;
  scroll-snap-align: center;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 22px;
  height: calc(100% - 44px);
  width: calc(100% - 44px);
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
  width: 100%;
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
            <SlideContent>
              <Label>이벤트</Label>
              <Title>
                아웃백 방문 인증하고 10,000원 <br />
                할인받기
              </Title>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideContent>
              <Label>이벤트</Label>
              <Title>
                아웃백 방문 인증하고 10,000원 <br />
                할인받기
              </Title>
            </SlideContent>
          </Slide>
        </SlideContainer>
        <TabIndicator />
      </div>
    </>
  );
};

export default Home;
