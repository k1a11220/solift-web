import styled from "@emotion/styled";
import * as Icon from "@icons";
import { useRouter } from "next/router";
import IconContainer from "./icon-container";

interface FloatingBtnProps {
  type: "Write" | "Search";
  action: () => void;
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

const BtnContainer = styled.div`
  width: 100vw;
  max-width: 36rem;
  position: fixed;
  bottom: calc(var(--tab-height) + 14px);
  display: flex;
  justify-content: flex-end;
`;

const FloatingBtn = ({ type, action }: FloatingBtnProps) => {
  const router = useRouter();
  return (
    <BtnContainer>
      <Container onClick={action}>
        {type === "Write" ? (
          <IconContainer size="24px" color="var(--white)">
            <Icon.PencilOutline />
          </IconContainer>
        ) : type === "Search" ? (
          <IconContainer size="24px" color="var(--white)">
            <Icon.SearchOutline />
          </IconContainer>
        ) : null}
      </Container>
    </BtnContainer>
  );
};

export default FloatingBtn;
