import styled from "@emotion/styled";
import * as Icon from "@icons";
import IconContainer from "./icon-container";

const Container = styled.div`
  display: flex;
  padding: var(--margin-side);

  width: 100%;
  height: var(--tab-height);
  position: fixed;
  bottom: 0;
  border-top: 1px solid var(--grey100);
  z-index: 1;
  background-color: var(--white);
`;

const Toolbar = () => {
  return (
    <Container>
      <IconContainer color="var(--grey300)" size="24px">
        <Icon.PhotographOutline />
      </IconContainer>
    </Container>
  );
};

export default Toolbar;
