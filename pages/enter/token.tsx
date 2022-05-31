import { CTA } from "@components/cta";
import { StyledForm, StyledInput } from "@components/forms";
import { Header } from "@components/header";
import Layout from "@components/layout";
import styled from "@emotion/styled";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  margin: 0 22px;
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

const Token = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<TokenForm>({ mode: "onChange" });

  const [confirmToken, { loading, data }] =
    useMutation<MutationResult>("/api/users/confirm");
  const router = useRouter();
  const onTokenValid = (validForm: TokenForm) => {
    if (loading) return;
    confirmToken(validForm);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  }, [data, router]);

  if (useUser(true).user) {
    router.push("/");
  }

  return (
    <Layout hasTabBar={false} hasHeader={true}>
      <Container>
        <Header type={true} title={"인증"} />
        <div style={{ width: "100%", height: "100%" }}>
          <TitleWrapper>
            <h1>인증번호를 입력해 주세요.</h1>
            <h2>인증번호를 확인할게요.</h2>
          </TitleWrapper>
          <StyledForm onSubmit={handleSubmit(onTokenValid)}>
            <StyledInput
              {...register("token", {
                required: true,
                disabled: loading,
              })}
              type="number"
              placeholder="인증번호를 입력해 주세요."
            />
            <CTA
              type="button"
              disabled={loading || !isDirty || !isValid}
              autoFocus={true}
            >
              {loading ? "로딩중이에요" : "인증하기"}
            </CTA>
          </StyledForm>
        </div>
      </Container>
    </Layout>
  );
};

export default Token;
