import { Preloader } from "@src/components/progress/Preloader";
import { useWallet } from "@src/contexts/Wallet";
import { AppPage } from "@src/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: AppPage = () => {
  const router = useRouter();
  const wallet = useWallet();

  useEffect(() => {
    if (wallet.isConnected) {
      router.push(String(router.query.redirectTo || "/dashboard"));
    } else if (router.query.redirectTo) {
      // try to connect automatically when visiting an unauthenticated page
      wallet.connect();
    }
  }, [wallet, router]);

  if (wallet.isConnected) {
    return <Preloader />;
  }

  return (
    <div className="h-screen flex flex-col bg-accent">
      <Head>
        <title>Community NFTs | Polkadot NA 2022</title>
        <meta
          name="description"
          content="Enabling trustless sharing of content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="prose">
          <img
            src="/images/community-nfts-logo-full.jpg"
            alt=""
            className="m-auto h-96"
          />
          <h1 className="hidden">Community NFTs</h1>
          <p className="mt-0">Enabling trustless sharing of content</p>
        </div>

        <div className="mt-8">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => wallet.connect()}
          >
            Connect wallet
          </button>
        </div>
      </main>

      <footer className="flex p-4 flex-row justify-between items-center border border-t-black">
        <span>Community NFTs</span>

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
  );
};

Home.applyLayout = (a) => a;

export default Home;
