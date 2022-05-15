import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.div`
  background-color: var(--white);
`;

const Profile = styled.div`
  width: 38px;
  height: 38px;
  background-color: var(--grey100);
  border-radius: 19px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 22px;

  & h3 {
    font-size: 17px;
    color: var(--grey500);
    font-weight: 600;
  }
`;

const UserInfo = styled.div`
  display: flex;

  & > div {
    margin-right: 10px;
  }

  & div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const PostDetail = styled.p`
  font-size: 15px;
  color: var(--grey400);
`;

const Username = styled.p`
  font-size: 13px;
  font-weight: 500;
`;

const Time = styled.p`
  font-size: 11px;
  color: var(--grey200);
`;

const PostInfo = styled.div`
  display: flex;
  padding: 12px 22px;
  gap: 18px;
  border-top: 1px solid var(--grey100);

  & div {
    font-size: 13px;
    display: flex;
    gap: 5px;

    & span {
      color: var(--grey300);
    }

    & div {
      width: 1rem;
      color: var(--grey300);
    }
  }
`;

const Post = () => {
  return (
    <Link href={"/"}>
      <Container>
        <PostContent>
          <UserInfo>
            <Profile />
            <div>
              <Username>오비완</Username>
              <Time>3시간 전</Time>
            </div>
          </UserInfo>
          <h3>군대에서 코딩 공부 하는 방법</h3>
          <PostDetail>
            제가 군대에 가게되어서 공부를 놓게 될 것 같습니다. 그래서 그런데
            다른 공부라면 책만 있어도 공부가 되겠지만, 이런 경우는 싸지방을 가서
            코딩을 하고 싶어도 비쥬얼 스튜디오나, 이클립스 같은 프로그램을 깔 수
            없는 것으로 아는데, 코딩을 웹으로 하는 사이트나 그 외의 대안을
            추천해주시면 좋겠습니다.
          </PostDetail>
        </PostContent>
        <PostInfo>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <span>추천</span>
            <span>2</span>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <span>댓글</span>
            <span>21</span>
          </div>
        </PostInfo>
      </Container>
    </Link>
  );
};

export default Post;
