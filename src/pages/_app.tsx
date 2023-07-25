import Layout from "@/components/common/Layout";
import Provider from "@/components/common/Providers";
import globalStyles from "@/styles/GlobalStyle";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} />
        {globalStyles}
      </Layout>
    </Provider>
  );
}
