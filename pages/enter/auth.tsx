import { NextPage } from "next";
import { CTA } from "../../components/cta";
import styled from "@emotion/styled";
import { Header } from "@components/header";
import Layout from "@components/layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 22px;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  padding: 15px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  color: var(--grey500);
  border: 1px solid var(--grey200);
  margin-bottom: auto;

  &::placeholder {
    color: var(--grey200);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--blue500);
  }
`;

const TitleWrapper = styled.div`
  margin: 40px 0;
  & h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  & h2 {
    color: var(--grey200);
  }
`;

const Auth: NextPage = () => {
  const data = false;
  return (
    <Layout hasTabBar={false} hasHeader={true}>
      <Container>
        <Header type={true} title={"인증"} />
        <div style={{ width: "100%", height: "100%" }}>
          <TitleWrapper>
            {data ? (
              <>
                <h1>인증번호를 입력해 주세요.</h1>
                <h2>인증번호를 확인할게요.</h2>
              </>
            ) : (
              <>
                <h1>휴대폰 번호를 입력해 주세요</h1>
                <h2>휴대폰 번호는 타인에게 노출되지 않아요</h2>
              </>
            )}
          </TitleWrapper>

          <StyledForm>
            {data ? (
              <>
                <StyledInput placeholder="인증번호를 입력해 주세요." />
                <CTA type="button" disabled={true} autoFocus={true}>
                  인증하기
                </CTA>
              </>
            ) : (
              <>
                <StyledInput
                  type="text"
                  placeholder="휴대폰 번호(- 없이 숫자만 입력)"
                />
                <CTA type="submit" disabled={true} autoFocus={true}>
                  인증하기
                </CTA>
              </>
            )}
          </StyledForm>
        </div>
      </Container>
    </Layout>
  );
};

export default Auth;
