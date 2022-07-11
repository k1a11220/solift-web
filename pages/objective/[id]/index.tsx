import EmptyContainer from "@components/empty-container";
import FloatingBtn from "@components/floating-btn";
import { Header } from "@components/header";
import HeaderBtn from "@components/header-btn";
import Layout from "@components/layout";
import TitleLg from "@components/title-lg";
import styled from "@emotion/styled";
import { KeyResult, Objective } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useDate } from "utils/useDate";

interface ObjectiveResponse {
  ok: boolean;
  objective: Objective;
  keyResults: KeyResult[];
}

const Container = styled.div`
  margin: var(--margin-side);
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--grey100);

    & p:first-of-type {
      font-size: 12px;
      color: var(--grey300);
      margin-bottom: 4px;
    }

    & p:last-of-type {
      font-size: 18px;
      font-weight: 500;
    }
  }

  & div:first-of-type {
    & p:last-of-type {
      color: var(--red500);
    }
  }
`;

const Empty = styled.div`
  height: calc(100vh - 49px - 240px);
`;

const ObjectiveDetail = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<ObjectiveResponse>(
    router.query.id ? `/api/objectives/${router.query.id}` : null
  );
  console.log(data);
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
        <TitleLg title={data ? data?.objective?.name : ""} hasDetail={true} />
        <InfoContainer>
          <div>
            <p>진행도</p>
            <p>0%</p>
          </div>
          <div>
            <p>마감일</p>
            <p>{data ? useDate(data?.objective?.deadline) : ""}</p>
          </div>
        </InfoContainer>
        {data?.keyResults?.map((keyResult) => (
          <div>
            <p>{keyResult.name}</p>
          </div>
        ))}
        <Empty>
          <EmptyContainer
            description={
              <p>
                목표를 만드셨군요! <br /> 이젠 세부과제를 만들어봐요
              </p>
            }
            image="/antenna.png"
          />
        </Empty>
      </Container>
      <FloatingBtn
        type="Create"
        action={() =>
          router.push(`/objective/${data?.objective?.id}/keyResult/create`)
        }
        hasTabbar={false}
      />
    </Layout>
  );
};

export default ObjectiveDetail;
