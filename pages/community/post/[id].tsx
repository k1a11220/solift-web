import { Header } from "@components/header";
import Layout from "@components/layout";
import * as Icon from "@icons";
import {
  PostContainer,
  PostContent,
  PostImg,
  PostInfo,
  PostItemInfo,
  PostMain,
  PostProfile,
  PostTime,
  PostUserInfo,
  PostUsername,
} from "@components/post";
import styled from "@emotion/styled";
import IconContainer from "@components/icon-container";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { Post, PostComment, PostCommentReply, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";

interface PostCommentsWithUser extends PostComment {
  user: User;
}

interface PostCommentReplyWithUser extends PostCommentReply {
  user: User;
}

interface PostForm {
  title: string;
  content: string;
  category: string;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    postThumbs: number;
    postComments: number;
    postCommentReplies: number;
  };
  postComments: PostCommentsWithUser[];
}

interface PostResponse {
  ok: boolean;
  post: PostWithUser;
  isThumb: boolean;
}

const CommentContainer = styled.div`
  margin: 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Comment = styled.p`
  font-size: 15px;
`;

const CommentInfo = styled.div`
  display: flex;
  gap: 12px;
  font-size: 11px;

  & span {
    color: var(--grey300);
  }

  & div {
    display: flex;
    gap: 4px;
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 48px;
`;

const PostDetail = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<PostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  const [thumb, { loading }] = useMutation(
    `/api/posts/${router.query.id}/thumb`
  );
  const onthumbClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            postThumbs: data.isThumb
              ? data?.post._count.postThumbs - 1
              : data?.post._count.postThumbs + 1,
          },
        },
        isThumb: !data.isThumb,
      },
      false
    );
    if (!loading) {
      thumb({});
    }
  };

  return (
    <Layout hasTabBar={false} hasHeader>
      <Header title={""} />
      <PostContainer>
        <PostContent>
          <PostUserInfo>
            <PostProfile />
            <div>
              <PostUsername>{data?.post?.user?.name}</PostUsername>
              <PostTime>3시간 전</PostTime>
            </div>
            <div style={{ marginLeft: "auto", marginRight: "0" }}>
              <IconContainer size="20px" color="var(--grey200)">
                <Icon.DotsVerticalOutline />
              </IconContainer>
            </div>
          </PostUserInfo>
          <h3>{data?.post?.title}</h3>
          <PostMain>{data?.post?.content}</PostMain>
        </PostContent>
        <PostInfo>
          <PostItemInfo
            isClicked={data?.isThumb === undefined ? false : data?.isThumb}
            onClick={onthumbClick}
          >
            <div>
              <Icon.ThumbUpOutline />
            </div>
            <span>추천</span>
            <span>{data?.post?._count.postThumbs}</span>
          </PostItemInfo>
          <div>
            <div>
              <Icon.ChatOutline />
            </div>
            <span style={{ color: "var(--grey300)" }}>댓글</span>
            <span style={{ color: "var(--grey300)" }}>
              {data?.post?._count.postComments}
            </span>
          </div>
        </PostInfo>
      </PostContainer>
      <CommentContainer>
        <CommentUser>
          <PostUserInfo>
            <PostProfile />
            <div>
              <PostUsername>오비완</PostUsername>
              <PostTime>3시간 전</PostTime>
            </div>
          </PostUserInfo>
          <IconContainer size="20px" color="var(--grey200)">
            <Icon.DotsVerticalOutline />
          </IconContainer>
        </CommentUser>
        <CommentWrapper>
          <Comment>
            저도 마찬가지에요! 항상 군대에서 뭘 준비해야 할지 모르겠어요 ㅠㅠ{" "}
          </Comment>
          <CommentInfo>
            <div>
              <span>좋아요</span>
              <span>2</span>
            </div>
            <div>
              <span>답글쓰기</span>
            </div>
          </CommentInfo>
        </CommentWrapper>
      </CommentContainer>
    </Layout>
  );
};

export default PostDetail;
