import styled from "@emotion/styled";

interface HeaderBtnProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
  [key: string]: any;
}

const Button = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? "var(--grey200)" : "var(--blue500)")};
  font-weight: 500;
`;

const HeaderBtn = ({
  children,
  onClick,
  disabled = true,
  ...rest
}: HeaderBtnProps) => {
  return (
    <Button onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </Button>
  );
};

export default HeaderBtn;
