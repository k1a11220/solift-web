import styled from "@emotion/styled";
import * as Icon from "@icons";
import IconContainer from "./icon-container";

interface CardMdProps {
  title: string;
  date: string;
  progress: number;
}

const Container = styled.div`
  padding: 22px;
  border-radius: 12px;
  border: 1px solid var(--grey100);
  display: flex;
  gap: 16px;
  flex-direction: column;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 12px;
    border-top: 1px solid var(--grey100);
    gap: 5px;

    & div {
      display: flex;
      gap: 6px;
    }
  }
`;

const Title = styled.p`
  font-size: 16px;
  color: var(--grey500);
  font-weight: 500;
`;

const Date = styled.p`
  font-size: 13px;
  color: var(--grey300);
`;

const Amount = styled.p`
  font-size: 13px;
  color: var(--grey300);
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: var(--grey100);
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: 100%;
  max-width: ${({ progress }) => progress}%;
  background-color: var(--blue500);
  transition: max-width 0.3s ease-in-out;
`;

const AmountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardMd = ({ title, date, progress }: CardMdProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <div>
          <IconContainer size="16px" color="var(--grey300)">
            <Icon.CalendarOutline />
          </IconContainer>
          <Date>{date}</Date>
        </div>
        <div>
          <IconContainer size="16px" color="var(--grey300)">
            <Icon.CheckCircleOutline />
          </IconContainer>
          <AmountContainer>
            <Amount>{progress}%</Amount>
            <ProgressBarContainer>
              <ProgressBar progress={progress} />
            </ProgressBarContainer>
          </AmountContainer>
        </div>
      </div>
    </Container>
  );
};

export default CardMd;
