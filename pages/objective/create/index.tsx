import { CTA } from "@components/cta";
import { StyledForm, StyledInput } from "@components/forms";
import { Header } from "@components/header";
import Layout from "@components/layout";
import TitleLg from "@components/title-lg";
import styled from "@emotion/styled";
import useMutation from "@libs/client/useMutation";
import { Objective } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ObjectiveForm {
  name: string;
  deadline: string;
  hasDone: boolean;
}

interface ObjectiveResponse {
  ok: boolean;
  objective: Objective;
}

const Container = styled.div`
  padding: 0 22px;
`;

const HideForm = styled.div<{ isGoalDone: any }>`
  overflow: hidden;
  transition: max-height 0.7s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  max-height: ${(props) => (props.isGoalDone ? "400px" : "0px")};
  display: flex;

  & input {
    width: 100%;
    transition: max-height 0.3s ease-in-out;
  }
`;

const Create: NextPage = () => {
  const {
    register,
    watch,
    formState: { isDirty, isValid },
    getValues,
    reset,
    handleSubmit,
  } = useForm<ObjectiveForm>({ mode: "onChange" });

  const router = useRouter();

  const [objective, { loading, data }] =
    useMutation<ObjectiveResponse>("/api/objectives");

  const onValid = (data: ObjectiveForm) => {
    if (loading) return;
    reset();
    objective({ ...data });
  };

  const [isGoalDone, setIsGoalDone] = useState(false);

  return (
    <Layout hasTabBar={false} hasHeader={true}>
      <Header title={""} />
      <Container>
        <TitleLg
          title="목표를 알려주세요"
          detail="어떤 목표든 괜찮아요"
          hasDetail={true}
        />
        <StyledForm autoComplete="off" onSubmit={handleSubmit(onValid)}>
          <>
            <StyledInput
              {...register("name")}
              placeholder="중세 철학 공부하기"
            />
            <HideForm isGoalDone={isGoalDone}>
              <StyledInput
                {...register("deadline")}
                type={"date"}
                placeholder={new Date().toISOString().split("T")[0]}
              />
            </HideForm>

            {isGoalDone ? (
              <>
                <CTA type="submit" disabled={false} autoFocus={true}>
                  완료
                </CTA>
              </>
            ) : (
              <>
                <CTA
                  type="button"
                  disabled={loading || !isDirty || !isValid}
                  autoFocus={true}
                  onClick={() => setIsGoalDone(true)}
                >
                  다음으로
                </CTA>
              </>
            )}
          </>
        </StyledForm>
      </Container>
    </Layout>
  );
};

export default Create;
