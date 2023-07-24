import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ProvidersProps} from "./types";
import {useState} from "react";
import {RecoilRoot} from "recoil";

const Provider = ({children, pageProps}: ProvidersProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>{children}</RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default Provider;
