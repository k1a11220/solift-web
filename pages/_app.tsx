import "../styles/globals.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import styled from "@emotion/styled";
import BottomTabs from "@components/bottom-tabs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  margin: auto;
  width: calc(100%);
  padding-bottom: 59px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
      <BottomTabs />
    </Container>
  );
}

export default MyApp;
