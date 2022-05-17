import Chip from "@components/chip";
import Post from "@components/post";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  height: 70px;
  margin: 22px;

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
  align-items: center;
  gap: 2px;
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid var(--grey100);
  height: 50px;

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
        <Link href={"/community/post/1"}>
          <Post />
        </Link>
      </PostList>
    </Container>
  );
};

export default Community;
