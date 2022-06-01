import BackgroundFocus from "@components/background-focus";
import { StyledInput } from "@components/forms";
import { Header } from "@components/header";
import HeaderBtn from "@components/header-btn";
import IconContainer from "@components/icon-container";
import Layout from "@components/layout";
import Textarea from "@components/textarea";
import Toolbar from "@components/toolbar";
import styled from "@emotion/styled";
import * as Icon from "@icons";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface PostForm {
  title: string;
  content: string;
  category: string;
}

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: var(--margin-side);
  border-bottom: 1px solid var(--grey100);

  & p {
    font-size: 14px;
    color: var(--grey400);
    padding: 20px 0;
  }
`;

const Styledform = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 49px + 58.5px - 52.5px - var(--tab-height) * 2 - 7px);
  margin: var(--margin-side);
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 18px;
  padding: 15px 0;

  &::placeholder {
    color: var(--grey400);
  }

  &:focus {
    outline: none;
  }
`;

const StyledSelect = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--white);
  z-index: 101;
  max-width: var(--max-width);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  & legend {
    padding-top: 32px;
    padding-bottom: 18px;
    font-size: 17px;
    color: var(--grey500);
    font-weight: 500;
  }

  & input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  & label {
    display: block;
    padding: 14px 0;
    font-size: 15px;
    color: var(--grey400);
    cursor: pointer;
  }

  & fieldset {
    margin: var(--margin-side);
  }
`;

const RadioItem = styled.div`
  display: flex;
  justify-content: space-between;

  & .unactive {
    opacity: 0;
  }
`;

const CategortList = [
  "전공공부",
  "취업",
  "자격증",
  "연애",
  "취미생활",
  "일상",
  "기타",
];

const Write = () => {
  const {
    register,
    watch,
    formState: { isDirty, isValid },
    getValues,
  } = useForm<PostForm>({ mode: "onChange" });

  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const CategoryValues = getValues("category");

  return (
    <Layout hasTabBar={false} hasHeader={true}>
      <Header
        title={"글쓰기"}
        hasRightItem={true}
        rightItem={
          <HeaderBtn
            disabled={
              !isValid ||
              !isDirty ||
              CategoryValues === null ||
              CategoryValues === undefined
            }
          >
            등록
          </HeaderBtn>
        }
      />
      <SelectContainer onClick={() => setIsCategoryOpen(true)}>
        <p>
          {CategoryValues === undefined
            ? "카테고리를 선택해 주세요"
            : CategoryValues === null
            ? "카테고리를 선택해 주세요"
            : CategoryValues}
        </p>
        {isCategoryOpen ? (
          <IconContainer color="var(--grey300)" size="16px">
            <Icon.ChevronUp />
          </IconContainer>
        ) : (
          <IconContainer color="var(--grey300)" size="16px">
            <Icon.ChevronDown />
          </IconContainer>
        )}
      </SelectContainer>
      {isCategoryOpen ? (
        <>
          <StyledSelect>
            <fieldset>
              <legend>카테고리를 선택해 주세요</legend>
              {CategortList.map((category, index) => (
                <RadioItem key={index} onClick={() => setIsCategoryOpen(false)}>
                  <input
                    {...register("category")}
                    type="radio"
                    value={category}
                  />
                  <label htmlFor={category}>{category}</label>
                  <IconContainer
                    className={
                      watch("category") === category ? "active" : "unactive"
                    }
                    color="var(--blue500)"
                    size="22px"
                  >
                    <Icon.CheckOutline />
                  </IconContainer>
                </RadioItem>
              ))}
            </fieldset>
          </StyledSelect>
          <BackgroundFocus onClick={() => setIsCategoryOpen(false)} />
        </>
      ) : null}

      <Styledform>
        <Input
          {...register("title", {
            required: true,
          })}
          placeholder="제목"
        ></Input>
        <Textarea
          register={register("content", { required: true })}
          required
          placeholder="지나친 비방, 욕설, 광고 등의 내용은 통보없이 삭제될 수 있어요."
        ></Textarea>
      </Styledform>
      <Toolbar />
    </Layout>
  );
};

export default Write;
