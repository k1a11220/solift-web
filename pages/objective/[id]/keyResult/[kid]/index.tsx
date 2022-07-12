import CardSm from "@components/card-sm";
import EmptyContainer from "@components/empty-container";
import FloatingBtn from "@components/floating-btn";
import { Header } from "@components/header";
import HeaderBtn from "@components/header-btn";
import Layout from "@components/layout";
import TitleLg from "@components/title-lg";
import TitleLgBar from "@components/title-lg-bar";
import styled from "@emotion/styled";
import useMutation from "@libs/client/useMutation";
import { Initiative, KeyResult, Objective } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR, { mutate, useSWRConfig } from "swr";
import { useDate } from "utils/useDate";

interface KeyResultWithObjective extends KeyResult {
  objective: Objective;
}

interface KeyResultResponse {
  ok: boolean;
  keyResult: KeyResultWithObjective;
  initiatives: Initiative[];
}

const Container = styled.div`
  margin: var(--margin-side);
`;

const Empty = styled.div`
  height: calc(100vh - 49px - 240px);
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;

const KeyResultDetail = () => {
  const router = useRouter();
  // const [currentInitiativeId, setCurrentInitiativeId] = useState(0);
  const { data: keyResultData } = useSWR<KeyResultResponse>(
    router.query.id
      ? `/api/objectives/${router.query.id}/keyResults/${router.query.kid}`
      : null
  );

  // const [clickHasDone, { data }] = useMutation(
  //   `/api/objectives/${router.query.id}/keyResults/${router.query.kid}/initiative/${currentInitiativeId}`
  // );

  // const { data: initiativeData, mutate } = useSWR(
  //   router.query.id
  //     ? `/api/objectives/${router.query.id}/keyResults/${router.query.kid}/initiative/${currentInitiativeId}`
  //     : null
  // );

  // const clickInitiative = (id: number, hasDone: boolean) => {
  //   setCurrentInitiativeId(id);
  //   clickHasDone({ id, hasDone });
  //   mutate(hasDone);
  // };

  return (
    <Layout hasTabBar={false} hasHeader>
      <Header
        title={""}
        hasRightItem
        rightItem={
          <HeaderBtn
            disabled={false}
            onClick={() => alert("신고")}
            type="submit"
            form="post-write-form"
          >
            편집
          </HeaderBtn>
        }
      />
      <Container>
        <TitleLgBar
          title={keyResultData ? keyResultData?.keyResult?.name : ""}
          subtitle={
            keyResultData ? keyResultData?.keyResult?.objective.name : ""
          }
          date={
            keyResultData ? useDate(keyResultData?.keyResult?.deadline) : ""
          }
          progress={
            keyResultData
              ? keyResultData?.initiatives?.length === 0
                ? 0
                : Number(
                    (
                      (keyResultData?.initiatives?.filter(
                        (value) => value.hasDone === true
                      ).length /
                        keyResultData?.initiatives?.length) *
                      100
                    ).toFixed(1)
                  )
              : 0
          }
        />
        {keyResultData?.initiatives.length === 0 ? (
          <Empty>
            <EmptyContainer
              description={
                <p>
                  세부과제를 달성할 수 있는 <br /> 목표를 만들어봐요
                </p>
              }
              image="/satellite.png"
            />
          </Empty>
        ) : (
          <CardContainer>
            {keyResultData?.initiatives?.map((initiative) => (
              <CardSm
                title={initiative?.name}
                date={useDate(initiative?.deadline)}
                hasDone={initiative?.hasDone}
                key={initiative?.id}
                // onClick={() =>
                //   clickInitiative(initiative?.id, initiative?.hasDone)
                // }
                router={router}
                id={initiative?.id}
              />
            ))}
          </CardContainer>
        )}
      </Container>
      <FloatingBtn
        type="Create"
        action={() =>
          router.push(
            `/objective/${router.query.id}/keyResult/${router.query.kid}/initiative/create`
          )
        }
        hasTabbar={false}
      />
    </Layout>
  );
};

export default KeyResultDetail;
