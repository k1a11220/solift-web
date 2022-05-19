import styled from "@emotion/styled";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { CTA } from "@components/cta";
import Layout from "@components/layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  margin: 0 22px;
`;

const ButtonDetail = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 25px 0;
  font-size: 14px;

  & button {
    padding: 0;
    border: none;
    background: none;
    font-size: 14px;
    color: var(--blue500);
    cursor: pointer;
  }
`;

const Enter: NextPage = () => {
  const router = useRouter();
  return (
    <Layout hasTabBar={false}>
      <Container>
        <div>
          <h1>SOLIFT</h1>
        </div>
        <div style={{ width: "100%" }}>
          <CTA
            type="button"
            disabled={false}
            autoFocus={true}
            onClick={() => router.push("/enter/auth")}
          >
            시작하기
          </CTA>
          <ButtonDetail>
            <p>이미 계정이 있나요?</p>{" "}
            <button onClick={() => router.push("/enter/auth")}>로그인</button>
          </ButtonDetail>
        </div>
      </Container>
    </Layout>
  );
};

export default Enter;
