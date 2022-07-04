import styled from "@emotion/styled";

interface TitleLgProps {
  title: string;
  detail?: string;
  hasDetail?: boolean;
}

const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 22px;

  & h1 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  & h2 {
    font-size: 16px;
    color: var(--grey200);
  }
`;

const TitleLg = ({ title, detail, hasDetail = false }: TitleLgProps) => {
  return (
    <Container>
      {hasDetail ? (
        <>
          <h1>{title}</h1>
          <h2>{detail}</h2>
        </>
      ) : (
        <h1>{title}</h1>
      )}
    </Container>
  );
};

export default TitleLg;
