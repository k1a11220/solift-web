import styled from "@emotion/styled";
import IconContainer from "./icon-container";
import * as Icon from "@icons";
import useSWR from "swr";
import useMutation from "@libs/client/useMutation";

interface CardSmProps {
  title: string;
  date: string;
  hasDone: boolean;
  router: any;
  id: number;
  onClick: () => void;
}

const Container = styled.div<{ hasDone: boolean }>`
  display: flex;
  padding: 22px;
  border-radius: 12px;
  gap: 12px;
  justify-content: space-between;
  border: 1px solid var(--grey100);
  cursor: pointer;

  & p {
    text-decoration: ${(props) => (props.hasDone ? "line-through" : "")};
  }
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

const CardSm = ({ title, date, hasDone, onClick, router, id }: CardSmProps) => {
  const [clickHasDone, { data }] = useMutation(
    `/api/objectives/${router.query.id}/keyResults/${router.query.kid}/initiative/${id}`
  );

  const { data: initiativeData, mutate } = useSWR(
    router.query.id
      ? `/api/objectives/${router.query.id}/keyResults/${router.query.kid}/initiative/${id}`
      : null
  );

  const clickInitiative = (hasDone: boolean) => {
    mutate(hasDone);
    clickHasDone(hasDone);
  };

  return (
    <Container
      onClick={() => clickInitiative(hasDone)}
      hasDone={initiativeData?.initiative?.hasDone}
    >
      <InfoContainer>
        <p>{date}까지</p>
        <p>{title}</p>
      </InfoContainer>
      <IconContainer
        color={
          initiativeData?.initiative?.hasDone
            ? "var(--blue500)"
            : "var(--grey200)"
        }
        size="24px"
      >
        <Icon.CheckCircleOutline />
      </IconContainer>
    </Container>
  );
};

export default CardSm;
