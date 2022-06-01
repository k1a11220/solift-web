import styled from "@emotion/styled";

interface HeaderBtnProps {
  children: React.ReactNode;
  disabled: boolean;
}

const Button = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? "var(--grey200)" : "var(--blue500)")};
  font-weight: 500;
`;

const HeaderBtn = ({ children, disabled = true, ...rest }: HeaderBtnProps) => {
  return (
    <Button disabled={disabled} {...rest}>
      {children}
    </Button>
  );
};

export default HeaderBtn;
