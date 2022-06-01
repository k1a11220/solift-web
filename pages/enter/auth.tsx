import { NextPage } from "next";
import { CTA } from "../../components/cta";
import styled from "@emotion/styled";
import { Header } from "@components/header";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useMutation from "@libs/client/useMutation";
import { useRouter } from "next/router";
import useUser from "@libs/client/useUser";
import { StyledForm, StyledInput } from "@components/forms";

interface AuthForm {
  email?: string;
  token?: string;
}

interface MutationResult {
  ok: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Auth: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
    reset,
    watch,
  } = useForm<AuthForm>({ mode: "onChange" });

  const onValid = (validForm: AuthForm) => {
    if (loading) return;
    reset();
    enter(validForm);
  };

  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/enter");

  const router = useRouter();

  console.log(watch("token"));

  if (useUser(true).user) {
    router.push("/");
  }

  useEffect(() => {
    if (data?.ok) {
      router.push("/enter/token");
    }
  }, [data, router]);

  return (
    <Layout hasTabBar={false} hasHeader={true}>
      <Container>
        <Header title={"인증"} />
        <div style={{ width: "100%", height: "100%" }}>
          <TitleWrapper>
            <h1>
              나라사랑포털 아이디를 <br />
              입력해 주세요
            </h1>
            <h2>나라사랑카드 하단에 있는 메일주소 @앞숫자에요</h2>
          </TitleWrapper>
          <StyledForm onSubmit={handleSubmit(onValid)}>
            <StyledInput
              {...register("email", {
                required: true,
                value: "",
                disabled: loading,
              })}
              type="number"
              placeholder="나라사랑카드 이메일 번호(숫자만 입력)"
            />
            <CTA
              type="submit"
              disabled={loading || !isDirty || !isValid}
              autoFocus={true}
            >
              {loading ? "로딩중이에요" : "인증번호 받기"}
            </CTA>
          </StyledForm>
        </div>
      </Container>
    </Layout>
  );
};

export default Auth;
