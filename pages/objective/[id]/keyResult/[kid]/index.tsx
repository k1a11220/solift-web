import FloatingBtn from "@components/floating-btn";
import { Header } from "@components/header";
import HeaderBtn from "@components/header-btn";
import Layout from "@components/layout";
import TitleLg from "@components/title-lg";
import styled from "@emotion/styled";
import { KeyResult } from "@prisma/client";
import { useRouter } from "next/router";
import useSWR from "swr";

interface KeyResultResponse {
  ok: boolean;
  keyResult: KeyResult;
}

const Container = styled.div`
  margin: var(--margin-side);
`;

const KeyResult = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<KeyResultResponse>(
    router.query.id
      ? `/api/objectives/${router.query.id}/keyResults/${router.query.kid}`
      : null
  );
  console.log(router.query.id, router.query.kid, data);
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
        <TitleLg title={data ? data?.keyResult?.name : ""} hasDetail={true} />
      </Container>
      <FloatingBtn
        type="Create"
        action={() =>
          router.push(
            `/objective/${router.query.id}/keyResult/${router.query.kid}/create`
          )
        }
        hasTabbar={false}
      />
    </Layout>
  );
};

export default KeyResult;
