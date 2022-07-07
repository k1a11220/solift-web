import styled from "@emotion/styled";
import type { NextPage } from "next";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import FloatingBtn from "@components/floating-btn";
import { useRouter } from "next/router";
import EmptyContainer from "@components/empty-container";

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

const Container = styled.div`
  height: calc(100vh - 51px - var(--tab-height));
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
        <Container>
          <EmptyContainer
            description={<p>새로운 목표를 만들어봐요</p>}
            image="/scope.png"
          />
        </Container>

        <FloatingBtn
          type="Create"
          action={() => router.push("/objective/create")}
        />
      </div>
    </Layout>
  );
};

export default Home;
