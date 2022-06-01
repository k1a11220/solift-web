import { StyledInput } from "@components/forms";
import { Header } from "@components/header";
import IconContainer from "@components/icon-container";
import Layout from "@components/layout";
import Textarea from "@components/textarea";
import Toolbar from "@components/toolbar";
import styled from "@emotion/styled";
import * as Icon from "@icons";

const RightItem = styled.button`
  color: ${(disabled) => (disabled ? "var(--grey200)" : "var(--blue500)")};
  font-weight: 500;
`;

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

const Write = () => {
  return (
    <Layout hasTabBar={false} hasHeader={true}>
      <Header
        title={"글쓰기"}
        hasRightItem={true}
        rightItem={<RightItem disabled={true}>등록</RightItem>}
      />
      <SelectContainer>
        <p>카테고리를 선택해 주세요</p>
        <IconContainer color="var(--grey300)" size="16px">
          <Icon.ChevronDown />
        </IconContainer>
      </SelectContainer>
      <Styledform>
        <Input placeholder="제목"></Input>
        <Textarea placeholder="지나친 비방, 욕설, 광고 등의 내용은 통보없이 삭제될 수 있어요."></Textarea>
      </Styledform>
      <Toolbar />
    </Layout>
  );
};

export default Write;
