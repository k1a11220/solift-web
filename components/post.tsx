import styled from "@emotion/styled";
import * as Icon from "@icons";
import IconContainer from "./icon-container";

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

const Post = () => {
  return (
    <PostContainer>
      <PostContent>
        <PostUserInfo>
          <PostProfile />
          <div>
            <PostUsername>오비완</PostUsername>
            <PostTime>3시간 전</PostTime>
          </div>
        </PostUserInfo>
        <h3>군대에서 코딩 공부 하는 방법</h3>
        <PostMain>
          제가 군대에 가게되어서 공부를 놓게 될 것 같습니다. 그래서 그런데 다른
          공부라면 책만 있어도 공부가 되겠지만, 이런 경우는 싸지방을 가서 코딩을
          하고 싶어도 비쥬얼 스튜디오나, 이클립스 같은 프로그램을 깔 수 없는
          것으로 아는데, 코딩을 웹으로 하는 사이트나 그 외의 대안을 추천해주시면
          좋겠습니다.
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
  );
};

export default Post;
