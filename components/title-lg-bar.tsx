import styled from "@emotion/styled";
import IconContainer from "./icon-container";
import * as Icon from "@icons";

interface TitleLgBarProps {
  title: string;
  subtitle: string;
  date: string;
  progress: number;
}

const Container = styled.div`
  width: 100%;
  padding: 32px 0 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & h4 {
    font-size: 12px;
    color: var(--grey300);
    margin-bottom: 6px;
  }

  & h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--grey500);
    margin-bottom: 12px;
  }

  & p {
    font-size: 14px;
    color: var(--grey300);
  }

  & div {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: var(--grey100);
  border-radius: 3px;
  margin-top: 22px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: 100%;
  max-width: ${({ progress }) => progress}%;
  background-color: var(--blue500);
  transition: max-width 0.3s ease-in-out;
`;

const TitleLgBar = ({ title, subtitle, date, progress }: TitleLgBarProps) => {
  return (
    <Container>
      <h4>{subtitle}</h4>
      <h3>{title}</h3>
      <div>
        <IconContainer color="var(--grey300)" size="16px">
          <Icon.CalendarOutline />
        </IconContainer>
        <p>{date}</p>
      </div>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </Container>
  );
};

export default TitleLgBar;
