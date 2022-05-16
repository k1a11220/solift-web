import Chip from "@components/chip";
import Post from "@components/post";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  height: 70px;
  margin: 12px 22px;

  & h1 {
    font-size: 23px;
    font-weight: 600;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  gap: 10px;
`;

const Chips = styled.div`
  display: flex;
  gap: 2px;
  width: 100%;
  overflow-x: auto;
  margin-top: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--grey100);

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Community = () => {
  return (
    <Container>
      <Header>
        <h1>커뮤니티</h1>
      </Header>
      <Chips>
        <Chip isActive={true} content={"전체"} />
        <Chip isActive={false} content={"전공"} />
        <Chip isActive={false} content={"취업"} />
        <Chip isActive={false} content={"생활"} />
      </Chips>
      <PostList>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostList>
    </Container>
  );
};

export default Community;
