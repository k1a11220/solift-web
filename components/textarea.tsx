import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 36rem;
  height: 100%;
  border: none;
  resize: none;
  padding: 0;
  font-size: 16px;
  color: var(--grey400);

  &::placeholder {
    color: var(--grey300);
  }

  &:focus {
    outline: none;
  }
`;

const Textarea = ({ label, name, register, ...rest }: TextareaProps) => {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <StyledTextarea id={name} {...register} rows={4} {...rest} />
    </>
  );
};

export default Textarea;
