import { CTA } from "@components/cta";
import { StyledForm, StyledInput } from "@components/forms";
import { Header } from "@components/header";
import Layout from "@components/layout";
import TitleLg from "@components/title-lg";
import styled from "@emotion/styled";
import { NextPage } from "next";

const Container = styled.div`
  padding: 0 22px;
`;

const Date: NextPage = () => {
  return (
    <Layout hasTabBar={false} hasHeader={true}>
      <Header title={""} />
      <Container>
        <TitleLg
          title="목표를 알려주세요"
          detail="어떤 목표든 괜찮아요"
          hasDetail={true}
        />
        <StyledForm>
          <StyledInput type={"date"} placeholder="dd-mm-yyyy" />
          <CTA type="submit" disabled={false} autoFocus={true}>
            다음으로
          </CTA>
        </StyledForm>
      </Container>
    </Layout>
  );
};

export default Date;
