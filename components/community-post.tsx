import styled from "@emotion/styled";
import * as Icon from "@icons";
import Link from "next/link";

interface CommunityPostProps {
  id: string;
  name: string;
  avatar: string;
  createdAt: Date;
  title: string;
  content: string;
  postComments: number;
  postReplies: number;
  postThumbs: number;
  category: string;
}

export const PostContainer = styled.div`
  background-color: var(--white);
`;

export const PostProfile = styled.div`
  width: 38px;
  height: 38px;
  background-color: var(--grey100);
  border-radius: 19px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 22px;

  & h3 {
    font-size: 17px;
    color: var(--grey500);
    font-weight: 600;
  }
`;

export const PostUserInfo = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 10px;
    cursor: pointer;
  }

  & div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PostMain = styled.p`
  font-size: 15px;
  color: var(--grey400);
`;

export const PostUsername = styled.p`
  font-size: 13px;
  font-weight: 500;
`;

export const PostTime = styled.p`
  font-size: 11px;
  color: var(--grey200);
`;

export const PostInfo = styled.div`
  display: flex;
  padding: 12px 22px;
  gap: 18px;
  border-top: 1px solid var(--grey100);
  border-bottom: 1px solid var(--grey100);

  & div {
    font-size: 13px;
    display: flex;
    gap: 5px;

    & div {
      width: 1rem;
      color: var(--grey300);
    }
  }

  & > div {
    cursor: pointer;
  }
`;

export const PostItemInfo = styled.div<{ isClicked?: boolean }>`
  & *,
  span {
    color: ${(props) =>
      props.isClicked ? "var(--blue500)" : "var(--grey300)"};
  }
`;

export const PostImg = styled.div`
  height: 200px;
  background-color: var(--grey100);
  border-radius: 10px;
`;

const CommunityPost = ({
  name,
  avatar,
  createdAt,
  title,
  content,
  postComments,
  postReplies,
  postThumbs,
  category,
  id,
}: CommunityPostProps) => {
  return (
    <Link href={`/community/post/${id}`}>
      <PostContainer style={{ cursor: "pointer" }}>
        <PostContent>
          <PostUserInfo>
            <PostProfile />
            <div>
              <PostUsername>{name}</PostUsername>
              <PostTime>{createdAt?.toString()}</PostTime>
            </div>
          </PostUserInfo>
          <h3>{title}</h3>
          <PostMain>{content}</PostMain>
          {/* <PostImg /> */}
        </PostContent>
        <PostInfo>
          <PostItemInfo
          // isClicked={data?.isThumb === undefined ? false : data?.isThumb}
          >
            <div>
              <Icon.ThumbUpOutline />
            </div>
            <span>추천</span>
            <span>{postThumbs}</span>
          </PostItemInfo>
          <PostItemInfo>
            <div>
              <Icon.ChatOutline />
            </div>
            <span>댓글</span>
            <span>{postComments + postReplies}</span>
          </PostItemInfo>
        </PostInfo>
      </PostContainer>
    </Link>
  );
};

export default CommunityPost;
