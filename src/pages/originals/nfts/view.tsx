import { useRouter } from "next/router";

import { AppPage } from "@src/types";
import Link from "next/link";

const OriginalsNftViewPage: AppPage = () => {
  const router = useRouter();
  const address = String(router.query.addr);
  const tokenId = String(router.query.tokenId);

  console.log("ADDR + TokID", address, tokenId);

  return (
    <div className="m-auto w-full max-w-3xl">
      <div className="mt-12 prose">
        <h1>
          Contract {address}, Token {tokenId}
        </h1>
        <p>(Optional) description</p>
      </div>

      <section className="mt-8">
        <div className="prose">
          <h3>Available under these terms</h3>
        </div>

        <Link
          href={{
            pathname: "/originals/nfts/sharing/new",
            query: { addr: address, tokenId },
          }}
        >
          <a className="btn btn-primary">Enable sharing</a>
        </Link>
      </section>
    </div>
  );
};

export default OriginalsNftViewPage;
