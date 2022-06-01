import styled from "@emotion/styled";

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const BackgroundFocus = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default BackgroundFocus;
