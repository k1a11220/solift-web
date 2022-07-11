import styled from "@emotion/styled";
import IconContainer from "./icon-container";
import * as Icon from "@icons";

interface CardSmProps {
  title: string;
  date: string;
  isDone: boolean;
}

const Container = styled.div`
  display: flex;
  padding: 22px;
  border-radius: 12px;
  gap: 12px;
  justify-content: space-between;
  border: 1px solid var(--grey100);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & p:first-of-type {
    font-size: 13px;
    color: var(--grey300);
  }

  & p:last-of-type {
    font-size: 16px;
    font-weight: 500;
  }
`;

const CardSm = ({ title, date, isDone }: CardSmProps) => {
  return (
    <Container>
      <InfoContainer>
        <p>{date}까지</p>
        <p>{title}</p>
      </InfoContainer>
      <IconContainer color="var(--grey200)" size="24px">
        <Icon.CheckCircleOutline />
      </IconContainer>
    </Container>
  );
};

export default CardSm;
