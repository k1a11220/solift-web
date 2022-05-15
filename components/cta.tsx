import styled from "@emotion/styled";
import { ReactNode } from "react";

interface CTAProps {
  type: "button" | "submit" | "reset";
  isDisabled: boolean;
  children: ReactNode;
  autoFocus: boolean;
  onClick?: () => void;
}

const Container = styled.button<{ isDisabled: boolean }>`
  width: 100%;
  padding: 17px 0;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  color: var(--white);
  background-color: ${(props) =>
    props.isDisabled ? "var(--blue100)" : "var(--blue500)"};
  cursor: pointer;
  /* margin-bottom: 22px; */
`;

export function CTA({
  type,
  isDisabled,
  children,
  autoFocus,
  onClick,
  ...rest
}: CTAProps) {
  return (
    <Container isDisabled={isDisabled} onClick={onClick} {...rest}>
      {children}
    </Container>
  );
}
