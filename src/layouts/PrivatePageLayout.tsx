import Head from "next/head";
import Link from "next/link";
import PolkadotIdenticonType from "@polkadot/react-identicon";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Identicon: typeof PolkadotIdenticonType =
  typeof window !== "undefined"
    ? require("@polkadot/react-identicon").default
    : ({} as never);

import { useWallet, ConnectedWalletContext } from "@src/contexts/Wallet";
import { Preloader } from "@src/components/progress/Preloader";
import { UniqueNetworkProvider } from "@src/contexts/UniqueNetwork";

const PrivatePageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const wallet = useWallet();

  useEffect(() => {
    if (!wallet.isConnected) {
      setTimeout(() => {
        router.push({
          pathname: "/",
          query: { redirectTo: router.asPath },
        });
      }, 500);
    }
  }, [wallet, router]);

  if (!wallet.isConnected) return <Preloader />;

  return (
    <ConnectedWalletContext.Provider value={wallet}>
      <UniqueNetworkProvider>
        <div className="h-screen">
          <Head>
            <title>Community NFTs</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="h-full flex flex-col">
            <nav className="navbar bg-accent">
              <ul className="flex-1 flex flex-row">
                <li>
                  <Link href="/">
                    <a>
                      <img
                        src="/images/community-nfts-logo.png"
                        alt=""
                        className="w-20 -m-2"
                      />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/collections">
                    <a className="btn btn-ghost normal-case text-lg">
                      Collections
                    </a>
                  </Link>
                </li>
              </ul>

              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle flex flex-row items-center"
                  >
                    <Identicon
                      value={wallet.account.address}
                      size={32}
                      theme="polkadot"
                      className="cursor-pointer"
                    />
                  </label>

                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52"
                  >
                    <li>
                      <a>Disconnect wallet</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="flex flex-col grow shrink-0 min-h-screen overflow-y-auto overflow-x-hidden">
              <div className="flex-1">{children}</div>

              <footer className="flex p-4 flex-row justify-between items-center bg-white shadow-2xl">
                <span>
                  Powered by{" "}
                  <a
                    href="https://unique.network"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="link link-primary no-underline"
                  >
                    Unique Network
                  </a>{" "}
                  — the NFT chain built for Polkadot and Kusama.
                </span>

                <a
                  href="https://angelhack.notion.site/Polkadot-Hackathon-North-America-Edition-Participants-Guide-6e3e5168dca24b67a4d517fa4de5a73d"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="link"
                >
                  Polkadot NA 2022
                </a>
              </footer>
            </div>
          </main>
        </div>
      </UniqueNetworkProvider>
    </ConnectedWalletContext.Provider>
  );
};

export function applyPrivatePageLayout(page: React.ReactNode) {
  return <PrivatePageLayout>{page}</PrivatePageLayout>;
}
