import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 60px;
  max-width: 36rem;

  & h1 {
    font-size: 15px;
  }

  border-bottom: 1px solid var(--grey100);
`;

const BackBtn = styled.button`
  position: absolute;
  left: 16px;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
`;

export function Header({ type, title }) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <Container>
      <BackBtn onClick={onClick}>
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </BackBtn>
      <h1>{title}</h1>
    </Container>
  );
}
