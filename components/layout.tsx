import styled from "@emotion/styled";
import BottomTabs from "./bottom-tabs";

interface LayoutProps {
  hasTabBar?: boolean;
  hasHeader?: boolean;
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  margin: auto;
  width: calc(100%);
  height: 100%;
`;

const Layout = ({ children, hasTabBar, hasHeader }: LayoutProps) => {
  return (
    <Container
      style={{
        paddingBottom: hasTabBar ? "59px" : "",
        paddingTop: hasHeader ? "3rem" : "0",
      }}
    >
      {children}
      {hasTabBar ? <BottomTabs /> : null}
    </Container>
  );
};

export default Layout;
