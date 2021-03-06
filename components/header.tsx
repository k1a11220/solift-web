import styled from "@emotion/styled";
import { useRouter } from "next/router";
import * as Icon from "@icons";

interface HeaderProps {
  type?: "default" | "large";
  hasTitle?: boolean;
  hasRightItem?: boolean;
  hasBack?: boolean;
  title: string;
  rightItem?: React.ReactNode;
}

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
    font-weight: 500;
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

const RightItem = styled.div`
  position: absolute;
  right: 22px;
`;

export function Header({
  type = "default",
  title,
  hasTitle = true,
  hasRightItem = false,
  hasBack = true,
  rightItem = null,
}: HeaderProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <Container>
      {hasBack ? (
        <BackBtn onClick={onClick}>
          <Icon.Chevron />
        </BackBtn>
      ) : null}
      {hasTitle ? <h1>{title}</h1> : null}
      {hasRightItem ? <RightItem>{rightItem}</RightItem> : null}
    </Container>
  );
}
