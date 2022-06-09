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
import Link from "next/link";
import Toolbar from "@components/toolbar";
import Divider from "@components/divider";
import { useEffect } from "react";

interface CommentResponse {
  ok: boolean;
  response: PostComment;
}

interface CommentForm {
  content: string;
}

interface PostReplyResponse {
  ok: boolean;
  replies: PostCommentReplyWithUser[];
  isThumb: boolean;
}

interface PostCommentsWithUser extends PostComment {
  user: User;
  _count: {
    postCommentThumbs: number;
    postCommentReplies: number;
  };
  postCommentReplies: PostCommentReplyWithUser[];
}

interface PostCommentReplyWithUser extends PostCommentReply {
  user: User;
  createdFor: User;
  createdBy: User;

  _count: {
    postReplyThumbs: number;
  };
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
  margin: 22px 22px 0 22px;
  display: flex;
  flex-direction: column;
`;

const CommentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Comment = styled.p`
  font-size: 15px;

  & span {
    color: var(--blue500);
  }
`;

const CommentInfo = styled.div`
  display: flex;
  gap: 12px;
  font-size: 11px;
  margin-top: 12px;

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
  margin-left: 48px;

  & > div:first-of-type {
    margin-bottom: 24px;
  }
`;

const PostDetail = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<PostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  const { data: replyData, mutate: replyMutate } = useSWR<PostReplyResponse>(
    router.query.id ? `/api/posts/${router.query.id}/replies` : null
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

  const { register, reset } = useForm({
    mode: "onChange",
  });

  const { ref, ...rest } = register("content", { required: true });

  const [sendComment, { data: commentData, loading: commentLoading }] =
    useMutation<CommentResponse>(`/api/posts/${router.query.id}/comments`);

  const onValid = (form: CommentForm) => {
    if (commentLoading) return;
    sendComment(form);
    reset();
  };
  useEffect(() => {
    if (commentData && commentData.ok) {
      reset();
    }
  }, [commentData, reset, mutate]);

  return (
    <Layout hasTabBar={false} hasHeader>
      <Header title={""} />
      <PostContainer>
        <PostContent>
          <PostUserInfo>
            <PostProfile />
            <Link href={`/users/profiles/${data?.post?.user?.id}`}>
              <div>
                <PostUsername>{data?.post?.user?.name}</PostUsername>
                <PostTime>{"data?.post?.createdAt"}</PostTime>
              </div>
            </Link>
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
          <PostItemInfo>
            <div>
              <Icon.ChatOutline />
            </div>
            <span>댓글</span>
            <span>
              {data?.post?._count?.postComments !== undefined
                ? data?.post?._count?.postComments +
                  data?.post?._count?.postCommentReplies
                : data?.post?._count?.postCommentReplies}
            </span>
          </PostItemInfo>
        </PostInfo>
      </PostContainer>
      {data?.post?.postComments?.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentUser>
            <PostUserInfo>
              <PostProfile />
              <Link href={`/users/profiles/${comment?.user?.id}`}>
                <div>
                  <PostUsername>{comment?.user.name}</PostUsername>
                  <PostTime>{"comment?.createdAt"}</PostTime>
                </div>
              </Link>
            </PostUserInfo>
            <IconContainer size="20px" color="var(--grey200)">
              <Icon.DotsVerticalOutline />
            </IconContainer>
          </CommentUser>
          <CommentWrapper>
            <Comment>{comment?.content}</Comment>
            <CommentInfo>
              <div>
                <span>좋아요</span>
                <span>{comment?._count?.postCommentThumbs}</span>
              </div>
              <div>
                <span>답글쓰기</span>
              </div>
            </CommentInfo>
            {replyData?.replies.map((reply) =>
              reply.postCommentId === comment.id ? (
                <div key={reply.id}>
                  <CommentUser>
                    <PostUserInfo>
                      <PostProfile />
                      <Link href={`/users/profiles/${reply?.createdBy?.id}`}>
                        <div>
                          <PostUsername>{reply?.createdBy.name}</PostUsername>
                          <PostTime>{"reply?.createdAt"}</PostTime>
                        </div>
                      </Link>
                    </PostUserInfo>
                    <IconContainer size="20px" color="var(--grey200)">
                      <Icon.DotsVerticalOutline />
                    </IconContainer>
                  </CommentUser>
                  <CommentWrapper>
                    <Comment>
                      <span>@{reply?.createdFor?.name}</span> {reply?.content}
                    </Comment>
                    <CommentInfo>
                      <div>
                        <span>좋아요</span>
                        <span>{reply?._count.postReplyThumbs}</span>
                      </div>
                      <div>
                        <span>답글쓰기</span>
                      </div>
                    </CommentInfo>
                  </CommentWrapper>
                </div>
              ) : null
            )}
          </CommentWrapper>
        </CommentContainer>
      ))}
      <Divider />
      <Toolbar hasInput onValid={onValid} {...rest} />
    </Layout>
  );
};

export default PostDetail;
