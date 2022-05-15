import Post from "@components/post";
import styled from "@emotion/styled";

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

const Community = () => {
  return (
    <Container>
      <Header>
        <h1>커뮤니티</h1>
      </Header>
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
