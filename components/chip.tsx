import styled from "@emotion/styled";

interface Chip {
  isActive: boolean;
  content: string;
}

const Container = styled.div<{ isActive: boolean }>`
  font-size: 14px;
  padding: 7px 11px;
  color: ${(props) => (props.isActive ? "var(--blue500)" : "var(--grey500)")};
  background-color: ${(props) => (props.isActive ? "#e3effa" : "")};
  width: fit-content;
  border-radius: 20px;
  width: max-content;
  white-space: nowrap;

  &:first-of-type {
    margin-left: 22px;
  }
`;

const Chip = ({ isActive, content }: Chip) => {
  return <Container isActive={isActive}>{content}</Container>;
};

export default Chip;
