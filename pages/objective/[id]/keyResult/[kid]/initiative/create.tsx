import { CTA } from "@components/cta";
import { StyledForm, StyledInput } from "@components/forms";
import { Header } from "@components/header";
import Layout from "@components/layout";
import TitleLg from "@components/title-lg";
import styled from "@emotion/styled";
import useMutation from "@libs/client/useMutation";
import { Initiative, KeyResult } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface InitiativeForm {
  name: string;
  deadline: string;
  hasDone: boolean;
  keyResult: KeyResult;
}

interface InitiativeResponse {
  ok: boolean;
  Initiative: Initiative;
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
  } = useForm<InitiativeForm>({ mode: "onChange" });

  const router = useRouter();

  const [Initiative, { loading, data }] = useMutation<InitiativeResponse>(
    `/api/objectives/${router.query.id}/keyResults/${router.query.kid}/initiative`
  );

  const onValid = (data: InitiativeForm) => {
    if (loading) return;
    reset();
    Initiative({ ...data });
  };

  useEffect(() => {
    if (data && data.ok) {
      console.log(data);
    }
  }, [data, router]);

  const [isGoalDone, setIsGoalDone] = useState(false);

  return (
    <Layout hasTabBar={false} hasHeader={true}>
      <Header title={""} />
      <Container>
        <TitleLg
          title="Initiative"
          detail="목표를 달성하기 위한 주요 지표에요"
          hasDetail={true}
        />
        <StyledForm autoComplete="off" onSubmit={handleSubmit(onValid)}>
          <>
            <StyledInput
              {...register("name")}
              placeholder="디자인 책 4권 읽기"
            />
            <HideForm isGoalDone={isGoalDone}>
              <StyledInput
                {...register("deadline")}
                type={"date"}
                placeholder={new Date().toISOString().split("T")[0]}
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </HideForm>
            {isGoalDone ? (
              <>
                <CTA type="submit" disabled={false} autoFocus={true}>
                  완료
                </CTA>
              </>
            ) : null}
          </>
        </StyledForm>
        {isGoalDone ? null : (
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
      </Container>
    </Layout>
  );
};

export default Create;
