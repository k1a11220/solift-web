import { Header } from "@components/header";
import Layout from "@components/layout";
import * as Icon from "@icons";
import {
  PostContainer,
  PostContent,
  PostImg,
  PostInfo,
  PostMain,
  PostProfile,
  PostTime,
  PostUserInfo,
  PostUsername,
} from "@components/post";
import styled from "@emotion/styled";
import IconContainer from "@components/icon-container";

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
  return (
    <Layout hasTabBar={false} hasHeader>
      <Header title={""} type={""} />
      <PostContainer>
        <PostContent>
          <PostUserInfo>
            <PostProfile />
            <div>
              <PostUsername>오비완</PostUsername>
              <PostTime>3시간 전</PostTime>
            </div>
            <div style={{ marginLeft: "auto", marginRight: "0" }}>
              <IconContainer size="20px" color="var(--grey200)">
                <Icon.DotsVerticalOutline />
              </IconContainer>
            </div>
          </PostUserInfo>
          <h3>피그마로 군대에서 디자인 연습하기</h3>
          <PostMain>
            안녕하세요 군대 연등시간에 피그마로 디자인 연습한 내용을 공유합니다.
            <br />
            <br />
            기본적으로 설치형 기반의 프로그램은 사용할 수 없기에 피그마와
            프레이머 사이에서 고민하다 피그마로 시작했습니다.
            <br />
            <br />
            기본적으로 설치형 기반의 프로그램은 사용할 수 없기에 피그마와
            프레이머 사이에서 고민하다 피그마로 시작했습니다.
          </PostMain>
          <PostImg />
        </PostContent>
        <PostInfo>
          <div>
            <div>
              <Icon.ThumbUpOutline />
            </div>
            <span>추천</span>
            <span>2</span>
          </div>
          <div>
            <div>
              <Icon.ChatOutline />
            </div>
            <span>댓글</span>
            <span>21</span>
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
