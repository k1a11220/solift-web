import styled from "@emotion/styled";
import * as Icon from "@icons";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import IconContainer from "./icon-container";

interface ToolbarProps {
  hasInput?: boolean;
  onValid?: () => void;
  [key: string]: any;
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 36rem;
  padding: 12px 0;
  position: fixed;
  bottom: 0;
  border-top: 1px solid var(--grey100);
  z-index: 1;
  background-color: var(--white);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin: var(--margin-side);

  & > div {
    height: 40px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  height: auto;
  border: none;
  resize: none;
  font-size: 15px;
  color: var(--grey500);
  background: none;
  width: 100%;
  max-height: 72px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--grey300);
  }
`;

const Button = styled.button`
  background-color: var(--blue500);
  padding: 7px;
  border-radius: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--grey50);
  width: 100%;
  border-radius: 18px;
  padding: 4px;
  padding-left: 14px;
  margin-left: 12px;
`;

const Toolbar = ({ hasInput = false, onValid }: ToolbarProps) => {
  const {
    formState: { isDirty, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm({});
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // The value of the textarea
  const [value, setValue] = useState<String>();

  // This function is triggered when textarea changes
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  const { ref, ...rest } = register("content", { required: true });

  const onValids = (form: any) => {
    onValid(form);
    reset();
  };

  return (
    <Container>
      <Wrapper>
        <IconContainer color="var(--grey300)" size="24px">
          <Icon.PhotographOutline />
        </IconContainer>
        <StyledForm onSubmit={handleSubmit(onValids)}>
          {hasInput ? (
            <InputContainer>
              <StyledTextArea
                placeholder="댓글을 입력해 주세요"
                {...rest}
                name="content"
                ref={(e) => {
                  ref(e);
                  textareaRef.current = e; // you can still assign to ref
                }}
                onChange={textAreaChange}
              />
              {!isDirty || !isValid ? (
                <Button type="submit">
                  <IconContainer color="var(--white)" size="16px">
                    <Icon.ArrowUp />
                  </IconContainer>
                </Button>
              ) : null}
            </InputContainer>
          ) : null}
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default Toolbar;
