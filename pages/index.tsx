import styled from "@emotion/styled";
import type { NextPage } from "next";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import Image from "next/image";
import FloatingBtn from "@components/floating-btn";
import { useRouter } from "next/router";

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  padding: 8px 22px;
  font-family: "Kanit", sans-serif;
  position: sticky;
  top: 0;
  background-color: var(--white);
`;

const Logo = styled.div`
  color: var(--blue500);
  font-size: 27px;
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

const EmptyContainer = styled.div`
  display: flex;
  gap: 16px;
  height: calc(100vh - 109px);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Home: NextPage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  // console.log(user);
  return (
    <Layout hasTabBar>
      <div>
        <Header>
          <Logo>solift</Logo>
        </Header>
        <EmptyContainer>
          <Image
            src="/scope.png"
            alt="Picture of the author"
            width={56}
            height={56}
          />
          <h2>새로운 목표를 만들어봐요</h2>
        </EmptyContainer>
        <FloatingBtn
          type="Create"
          action={() => router.push("/objective/create")}
        />
      </div>
    </Layout>
  );
};

export default Home;
