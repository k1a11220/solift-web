import Chip from "@components/chip";
import CommunityPost from "@components/community-post";
import FloatingBtn from "@components/floating-btn";
import Layout from "@components/layout";
import styled from "@emotion/styled";
import { Post, User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

interface PostWithUser extends Post {
  user: User;
  _count: {
    postThumbs: number;
    postComments: number;
    postCommentReplies: number;
  };
}

interface PostsResponse {
  ok: boolean;
  posts: PostWithUser[];
}

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
  const router = useRouter();
  const { data } = useSWR<PostsResponse>(`/api/posts`);
  console.log(data);
  return (
    <Layout hasTabBar>
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
          {data?.posts.map((post) => (
            <CommunityPost
              key={post.id}
              id={post.id.toString()}
              name={post.user.name}
              avatar={"post.user.avatar"}
              createdAt={post.createdAt}
              title={post.title}
              content={post.content}
              postComments={post._count.postComments}
              postReplies={post._count.postCommentReplies}
              postThumbs={post._count.postThumbs}
              category={post.category}
            />
          ))}
        </PostList>
        <FloatingBtn
          type="Write"
          action={() => router.push("/community/write")}
        />
      </Container>
    </Layout>
  );
};

export default Community;
