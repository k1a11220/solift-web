import styled from "@emotion/styled";
import { useRouter } from "next/router";
import * as Icon from "@icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
  position: fixed;
  max-width: 36rem;
  top: 0px;
  background-color: var(--white);

  & h1 {
    font-size: 15px;
  }

  border-bottom: 1px solid var(--grey100);
`;

const BackBtn = styled.button`
  position: absolute;
  left: 16px;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
`;

export function Header({ type, title }) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <Container>
      <BackBtn onClick={onClick}>
        <Icon.Chevron />
      </BackBtn>
      <h1>{title}</h1>
    </Container>
  );
}
