import IconContainer from "@components/icon-container";
import Layout from "@components/layout";
import styled from "@emotion/styled";
import * as Icon from "@icons";

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
    <Layout hasTabBar>
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
            <Icon.ChevronRight />
          </IconContainer>
        </UserInfo>
        <Divider />
        <List>
          <Label>활동</Label>
          <ul>
            <ListItem>
              <IconContainer size="22px" color="var(--grey500)">
                <Icon.ClipboardListOutline />
              </IconContainer>
              <p>내가 쓴 글/댓글</p>
            </ListItem>
            <ListItem>
              <IconContainer size="22px" color="var(--grey500)">
                <Icon.HeartOutline />
              </IconContainer>
              <p>찜한 혜택</p>
            </ListItem>
            <ListItem>
              <IconContainer size="22px" color="var(--grey500)">
                <Icon.GiftOutline />
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
                <Icon.DeviceMobileOutline />
              </IconContainer>
              <p>화면</p>
            </ListItem>
            <ListItem>
              <IconContainer size="22px" color="var(--grey500)">
                <Icon.SpeakerphoneOutline />
              </IconContainer>
              <p>공지사항</p>
            </ListItem>
            <ListItem>
              <IconContainer size="22px" color="var(--grey500)">
                <Icon.UsergroupOutline />
              </IconContainer>
              <p>자주 묻는 질문</p>
            </ListItem>
            <ListItem>
              <IconContainer size="22px" color="var(--grey500)">
                <Icon.MailOutline />
              </IconContainer>
              <p>문의</p>
            </ListItem>
          </ul>
        </List>
      </Container>
    </Layout>
  );
};

export default Profile;
