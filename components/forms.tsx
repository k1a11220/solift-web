import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  padding: 15px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  color: var(--grey500);
  border: 1px solid var(--grey200);
  margin-bottom: auto;
  background-color: var(--white);

  &::placeholder {
    color: var(--grey200);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--blue500);
  }
`;
