import IconContainer from "@components/icon-container";
import styled from "@emotion/styled";

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

const UserInfo = styled.div`
  display: flex;
  margin: 0 22px;
  padding: 28px 0;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & div:last-of-type {
    margin-left: auto;
  }
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--grey100);
  border-radius: 30px;
  margin-right: 14px;
`;

const Username = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Usernumber = styled.div`
  font-size: 13px;
  color: var(--grey300);
`;

const Divider = styled.div`
  width: 100%;
  height: 6px;
  background-color: var(--grey100);
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 22px;

  & ul {
    margin: 11px 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 11px 0;
  cursor: pointer;

  & p {
    font-size: 15px;
    line-height: 1;
    margin-left: 10px;
  }
`;

const Label = styled.div`
  margin-top: 22px;
  font-weight: 500;
`;

const Profile = () => {
  return (
    <Container>
      <Header>
        <h1>프로필</h1>
      </Header>
      <UserInfo>
        <ProfileImg />
        <div>
          <Username>오비완</Username>
          <Usernumber>k1a11220@naver.com</Usernumber>
        </div>
        <IconContainer size="22px" color="var(--grey300)">
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </IconContainer>
      </UserInfo>
      <Divider />
      <List>
        <Label>활동</Label>
        <ul>
          <ListItem>
            <IconContainer size="22px" color="var(--grey500)">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </IconContainer>
            <p>내가 쓴 글/댓글</p>
          </ListItem>
          <ListItem>
            <IconContainer size="22px" color="var(--grey500)">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </IconContainer>
            <p>찜한 혜택</p>
          </ListItem>
          <ListItem>
            <IconContainer size="22px" color="var(--grey500)">
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
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </IconContainer>
            <p>받은 혜택</p>
          </ListItem>
        </ul>
      </List>
      <Divider />
      <List>
        <Label>설정&안내</Label>
        <ul>
          <ListItem>
            <IconContainer size="22px" color="var(--grey500)">
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </IconContainer>
            <p>비밀번호 변경</p>
          </ListItem>
          <ListItem>
            <IconContainer size="22px" color="var(--grey500)">
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
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </IconContainer>
            <p>공지사항</p>
          </ListItem>
          <ListItem>
            <IconContainer size="22px" color="var(--grey500)">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </IconContainer>
            <p>자주 묻는 질문</p>
          </ListItem>
          <ListItem>
            <IconContainer size="22px" color="var(--grey500)">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </IconContainer>
            <p>문의</p>
          </ListItem>
        </ul>
      </List>
    </Container>
  );
};

export default Profile;
