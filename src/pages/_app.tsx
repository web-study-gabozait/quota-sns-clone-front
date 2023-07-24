import Layout from "@/components/common/Layout";
import globalStyles from "@/styles/GlobalStyle";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      {globalStyles}
    </Layout>
  );
}
