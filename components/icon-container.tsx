import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";

interface IconContainerProps {
  children: ReactJSXElement;
  size: "24px" | "22px" | "20px" | "16px";
  color:
    | "var(--grey200)"
    | "var(--grey300)"
    | "var(--grey500)"
    | "var(--white)"
    | "var(--blue500)";
  [key: string]: any;
}

const Container = styled.div<{ size: string }>`
  display: flex;
  width: ${(props) => props.size};
  color: ${({ color }) => color};
`;

const IconContainer = ({
  children,
  size,
  color,
  ...rest
}: IconContainerProps) => {
  return (
    <Container {...rest} size={size} color={color}>
      {children}
    </Container>
  );
};

export default IconContainer;
