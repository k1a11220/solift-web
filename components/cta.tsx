import styled from "@emotion/styled";
import { ReactNode } from "react";

interface CTAProps {
  type: "button" | "submit" | "reset";
  disabled: boolean;
  children: ReactNode;
  autoFocus: boolean;
  onClick?: () => void;
}

const Container = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 17px 0;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  color: var(--white);
  background-color: ${(props) =>
    props.disabled ? "var(--blue100)" : "var(--blue500)"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  /* margin-bottom: 22px; */
`;

export function CTA({
  type,
  disabled,
  children,
  autoFocus,
  onClick,
  ...rest
}: CTAProps) {
  return (
    <Container disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </Container>
  );
}
