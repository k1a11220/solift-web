import CardSm from "@components/card-sm";
import EmptyContainer from "@components/empty-container";
import FloatingBtn from "@components/floating-btn";
import { Header } from "@components/header";
import HeaderBtn from "@components/header-btn";
import Layout from "@components/layout";
import TitleLg from "@components/title-lg";
import TitleLgBar from "@components/title-lg-bar";
import styled from "@emotion/styled";
import { Initiative, KeyResult, Objective } from "@prisma/client";
import { useRouter } from "next/router";
import useSWR from "swr";
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
  const { data, mutate } = useSWR<KeyResultResponse>(
    router.query.id
      ? `/api/objectives/${router.query.id}/keyResults/${router.query.kid}`
      : null
  );
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
          title={data ? data?.keyResult?.name : ""}
          subtitle={data ? data?.keyResult?.objective.name : ""}
          date={data ? useDate(data?.keyResult?.deadline) : ""}
          progress={
            data
              ? data?.initiatives?.length === 0
                ? 0
                : Number(
                    (
                      (data?.initiatives?.filter(
                        (value) => value.hasDone === true
                      ).length /
                        data?.initiatives?.length) *
                      100
                    ).toFixed(1)
                  )
              : 0
          }
        />
        {data?.initiatives.length === 0 ? (
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
            {data?.initiatives?.map((initiative, index) => (
              <CardSm
                title={initiative?.name}
                date={useDate(initiative?.deadline)}
                isDone={initiative?.hasDone}
                key={index}
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
