import TabIndicator from "@components/tab-indicator";
import styled from "@emotion/styled";

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  height: 70px;
  margin: 22px;

  & h1 {
    font-size: 23px;
    font-weight: 600;
  }
`;

const Community = () => {
  return (
    <Container>
      <Header>
        <h1>혜택</h1>
      </Header>
      <TabIndicator />
    </Container>
  );
};

export default Community;
