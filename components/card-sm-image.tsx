import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f7f9fd;
  border-radius: 12px;

  & p {
    font-size: 14px;
    margin-bottom: 5px;
    color: var(--grey300);
  }

  & h3 {
    font-size: 16px;
    color: var(--blue500);
    font-weight: 500;
  }
`;

const ImgContainer = styled.div`
  width: 94px;
  height: 56px;
  background-color: var(--grey500);
  border-radius: 4px;
`;

const CardSmImage = () => {
  return (
    <Container>
      <div>
        <p>VIPS</p>
        <h3>메뉴 20% 할인</h3>
      </div>
      <ImgContainer></ImgContainer>
    </Container>
  );
};

export default CardSmImage;
