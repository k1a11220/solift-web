import "../styles/globals.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  margin: auto;
  width: calc(100% - 44px);
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
