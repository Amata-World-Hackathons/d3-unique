import type { AppProps } from "next/app";

import { WalletProvider } from "@src/contexts/Wallet";
import { applyPrivatePageLayout } from "@src/layouts/PrivatePageLayout";
import type { AppPage } from "@src/types";

import "@src/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const applyLayout =
    (Component as AppPage).applyLayout || applyPrivatePageLayout;

  return (
    <WalletProvider>{applyLayout(<Component {...pageProps} />)}</WalletProvider>
  );
}

export default MyApp;
