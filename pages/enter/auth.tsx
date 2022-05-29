import { NextPage } from "next";
import { CTA } from "../../components/cta";
import styled from "@emotion/styled";
import { Header } from "@components/header";
import Layout from "@components/layout";
import { FieldErrors, useForm, useFormState } from "react-hook-form";
import { useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";
import { useRouter } from "next/router";
import useUser from "@libs/client/useUser";

interface AuthForm {
  phone?: string;
  token?: string;
}

interface PhoneForm {
  phone: string;
}

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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    watch,
  } = useForm<AuthForm>({ mode: "onChange" });

  const onValid = (validForm: AuthForm) => {
    if (loading) return;
    reset();
    enter(validForm);
  };
  const onTokenValid = (validForm: TokenForm) => {
    if (tokenLoading) return;
    confirmToken(validForm);
  };

  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>("/api/users/confirm");
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();
  const router = useRouter();

  useEffect(() => {
    if (tokenData?.ok) {
      router.push("/");
    }
  }, [tokenData, router]);

  if (useUser().user) {
    router.push("/");
  }

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

          {data ? (
            <StyledForm onSubmit={tokenHandleSubmit(onTokenValid)}>
              <StyledInput
                {...tokenRegister("token", {
                  required: true,
                })}
                type="number"
                placeholder="인증번호를 입력해 주세요."
              />
              <CTA
                type="button"
                disabled={watch("token") === "" ? true : false}
                autoFocus={true}
              >
                {tokenLoading ? "로딩중이에요" : "인증하기"}
              </CTA>
            </StyledForm>
          ) : (
            <StyledForm onSubmit={handleSubmit(onValid)}>
              <StyledInput
                {...register("phone", {
                  required: true,
                  value: "",
                })}
                type="number"
                placeholder="휴대폰 번호(- 없이 숫자만 입력)"
              />
              <CTA
                type="submit"
                disabled={!isDirty || !isValid}
                autoFocus={true}
              >
                {loading ? "로딩중이에요" : "인증번호 받기"}
              </CTA>
            </StyledForm>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default Auth;
