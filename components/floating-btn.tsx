import styled from "@emotion/styled";
import * as Icon from "@icons";
import { useRouter } from "next/router";
import IconContainer from "./icon-container";

interface FloatingBtnProps {
  type: "Write" | "Search" | "Create";
  action: () => void;
  hasTabbar?: boolean;
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background-color: var(--blue500);
  margin-right: 22px;
`;

const BtnContainer = styled.div<{ hasTabbar: boolean }>`
  width: 100vw;
  max-width: 36rem;
  position: fixed;
  bottom: ${(props) =>
    props.hasTabbar ? "calc(var(--tab-height) + 22px)" : "22px"};
  display: flex;
  justify-content: flex-end;
`;

const FloatingBtn = ({ type, action, hasTabbar = true }: FloatingBtnProps) => {
  const router = useRouter();
  return (
    <BtnContainer hasTabbar={hasTabbar}>
      <Container onClick={action}>
        {type === "Write" ? (
          <IconContainer size="24px" color="var(--white)">
            <Icon.PencilOutline />
          </IconContainer>
        ) : type === "Search" ? (
          <IconContainer size="24px" color="var(--white)">
            <Icon.SearchOutline />
          </IconContainer>
        ) : type === "Create" ? (
          <IconContainer size="24px" color="var(--white)">
            <Icon.Create />
          </IconContainer>
        ) : null}
      </Container>
    </BtnContainer>
  );
};

export default FloatingBtn;
