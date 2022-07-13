// @ts-nocheck

import Link from "next/link";
import { useRouter } from "next/router";
import {
  addDoc,
  getDocs,
  query,
  where,
  collection,
  deleteDoc,
} from "@firebase/firestore";
import * as d3Shape from "d3-shape";
import * as d3Hierarchy from "d3-hierarchy";

import * as _polkadotMod from "@polkadot/extension-dapp";
type PolkadotExtDapp = typeof _polkadotMod;
const { web3FromSource }: PolkadotExtDapp =
  typeof window !== "undefined"
    ? require("@polkadot/extension-dapp")
    : ({} as any);

import { AppPage } from "@src/types";
import {
  UniqueNFTCollectionData,
  useUniqueNetwork,
  useUniqueNFTCollectionRef,
  useUniqueTokenRef,
} from "@src/contexts/UniqueNetwork";
import { useAsyncCall } from "@src/utils";
import { Preloader } from "@src/components/progress/Preloader";
import { useCallback, useMemo, useState } from "react";
import { useConnectedWallet } from "@src/contexts/Wallet";
import { UniqueHelper, UniqueNFTToken } from "@src/vendor/unique";
import { useFirestore } from "@src/contexts/Firebase";
import MintNFTModal from "@src/components/modals/MintNFTModal";

const CollectionsViewPage: AppPage = () => {
  const db = useFirestore();
  const router = useRouter();
  const wallet = useConnectedWallet();
  const uniq = useUniqueNetwork();
  const collectionId = String(router.query.cid || "");
  const tokenId = String(router.query.tid || "");
  const collectionRef = useUniqueNFTCollectionRef(collectionId);
  const selectedToken = useUniqueTokenRef(collectionId, tokenId);
  const [version, setVersion] = useState(0);
  const incrementVersion = useCallback(
    () => setVersion(version + 1),
    [version]
  );
  const [mintParentId, setMintParentId] = useState("");

  const call = useCallback(
    () => collectionRef.getData(),
    [version, collectionRef]
  );
  const res = useAsyncCall<UniqueNFTCollectionData>(call);

  const call2 = useCallback(
    async () => selectedToken?.getData(),
    [version, selectedToken]
  );
  const selectedTokenData = useAsyncCall<any>(call2);

  const buildTreeFromRoot = useCallback(async () => {
    const snapshot = await getDocs(
      query(
        collection(db, "root-tokens"),
        where("collectionId", "==", collectionId)
      )
    );

    const allIds: string[] = [];
    snapshot.forEach((doc) => {
      allIds.push(doc.data().tokenId);
    });

    const rootTokens = await Promise.all(
      allIds.map((id) => collectionRef.getTokenObject(id))
    );

    return await Promise.all(
      rootTokens.map((tok) => computeTree(tok, uniq.helper))
    );
  }, [version, uniq, db, collectionId, collectionRef]);
  const tree = useAsyncCall<any>(buildTreeFromRoot);

  const allTokenIds = useMemo(() => {
    if (!tree.data) return [];

    const result: string[] = [];
    const recursiveAddIds = (node: any) => {
      result.push(node.token.tokenId);

      node.children.forEach((n: any) => recursiveAddIds(n));
    };

    tree.data.forEach((item: any) => recursiveAddIds(item));

    return result;
  }, [tree]);

  const onMintSuccess = (tokenId: string) => {
    router.replace({ query: { ...router.query, tid: tokenId } });
    incrementVersion();
  };

  const selectedTokenParentId = useMemo(() => {
    if (selectedTokenData.data && selectedTokenData.data.owner.Ethereum) {
      const addr = selectedTokenData.data.owner.Ethereum;
      return parseInt(addr.slice(addr.length - 8, addr.length), 10);
    }

    return "";
  }, [selectedTokenData]);

  if (res.loading) return <Preloader />;

  const nftCollection = res.data!;

  return (
    <div className="m-auto mt-12 mb-20 w-full max-w-6xl">
      <div className="prose">
        <h1 className="mb-4">{nftCollection.name}</h1>

        <div className="flex flex-row justify-between items-center">
          <span>
            ID: {collectionId} ({nftCollection.raw.tokenPrefix})
          </span>
        </div>

        <div className="not-prose flex flex-row gap-2 text-sm">
          <span>Links:</span>
          <a
            rel="noreferrer nofollow"
            href={`https://uniquescan.io/OPAL/collections/${collectionId}`}
            target="_blank"
            className="link"
          >
            UniqueScan
          </a>

          <a
            rel="noreferrer nofollow"
            href={`https://wallet-opal.unique.network/#/myStuff/nft?collectionId=${collectionId}`}
            target="_blank"
            className="link"
          >
            UniqueWallet
          </a>
        </div>

        <p>
          {nftCollection.description ? (
            nftCollection.description
          ) : (
            <span className="text-sm text-slate-500">
              No description provided
            </span>
          )}
        </p>
      </div>

      <div className="flex flex-row justify-end">
        <label
          htmlFor="mint-nft-modal"
          className="btn modal-button btn-primary"
          onClick={() => setMintParentId("")}
        >
          Mint NFT
        </label>
      </div>

      <input type="checkbox" id="mint-nft-modal" className="modal-toggle" />

      <MintNFTModal
        collectionId={collectionId}
        modalInputId="mint-nft-modal"
        parentTokenId={mintParentId}
        onMintSuccess={onMintSuccess}
      />

      <div className="flex flex-row justify-center items-start gap-8 pt-8">
        {radialGraph(tree.data! || [])}

        <div>
          <section className="card shadow-md bg-white w-screen max-w-lg m-auto">
            {selectedToken ? (
              <>
                <figure className="px-10 pt-10">
                  <img
                    src={
                      selectedTokenData.data?.properties[0].value ||
                      "https://placeimg.com/400/225/arch"
                    }
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>

                <div className="card-body">
                  <p className="font-bold">
                    <select
                      name="token-parent"
                      className="select"
                      value={selectedTokenParentId}
                      onChange={async (e) => {
                        console.log(
                          "CHANGE TO",
                          e.target.value,
                          !!e.target.value
                        );

                        const targetTokenId = e.target.value;

                        const injector = await web3FromSource(
                          wallet.account.meta.source
                        );
                        const signer = {
                          address: wallet.account.address,
                          signer: injector.signer,
                        };

                        if (targetTokenId) {
                          const parentToken = collectionRef.getTokenObject(
                            parseInt(targetTokenId, 10)
                          );
                          await selectedToken.nest(signer, parentToken);

                          const snapshots = await getDocs(
                            query(
                              collection(db, "root-tokens"),
                              where("collectionId", "==", collectionId)
                            )
                          );

                          const promises: Promise<any>[] = [];
                          snapshots.forEach((doc) =>
                            promises.push(deleteDoc(doc.ref))
                          );

                          await Promise.all(promises);
                        } else {
                          const parentToken = collectionRef.getTokenObject(
                            selectedTokenParentId
                          );

                          await selectedToken.unnest(signer, parentToken, {
                            Substrate: wallet.account.address,
                          });

                          await addDoc(collection(db, "root-tokens"), {
                            tokenId: selectedToken.tokenId,
                            collectionId,
                          });
                        }

                        incrementVersion();
                      }}
                    >
                      <option value="">{nftCollection.raw.tokenPrefix}</option>

                      {allTokenIds.map((id) =>
                        String(id) === selectedToken.tokenId ? null : (
                          <option value={id}>#{id}</option>
                        )
                      )}
                    </select>
                    &nbsp;&gt;&nbsp;
                    {nftCollection.raw.tokenPrefix} #{selectedToken.tokenId}
                  </p>

                  <div className="flex flex-row gap-2 text-sm">
                    <span>Links:</span>
                    <a
                      rel="nofollow noreferrer"
                      href={`https://uniquescan.io/OPAL/tokens/${collectionId}/${selectedToken.tokenId}`}
                      target="_blank"
                      className="link"
                    >
                      UniqueScan
                    </a>

                    <a
                      rel="nofollow noreferrer"
                      href={`https://wallet-opal.unique.network/#/myStuff/token-details?collectionId=${collectionId}&tokenId=${selectedToken.tokenId}`}
                      target="_blank"
                      className="link"
                    >
                      UniqueWallet
                    </a>
                  </div>

                  <p className="text-sm">
                    Owner:{" "}
                    {selectedTokenData.data ? (
                      <a href="">
                        {JSON.stringify(selectedTokenData.data.owner)}
                      </a>
                    ) : (
                      "???"
                    )}
                  </p>

                  <div className="card-actions justify-end items-center">
                    <label
                      htmlFor="mint-nft-modal"
                      className="btn modal-button btn-primary"
                      onClick={() => setMintParentId(selectedToken.tokenId)}
                    >
                      Mint Child
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <span className="m-4 text-sm text-slate-500">
                No token selected
              </span>
            )}
          </section>
        </div>
      </div>
    </div>
  );

  // many thanks to https://observablehq.com/@d3/radial-tree
  function radialGraph(
    data: { name: string; children: any; token: UniqueNFTToken }[]
  ) {
    const fill = "#999";
    const stroke = "#555";
    const strokeWidth = 1.5;
    const strokeOpacity = 0.4;
    const haloStroke = "#fff";
    const haloStrokeWidth = 3;

    const width = 640;
    const height = 400;
    const margin = 60;
    const marginLeft = margin;
    const marginRight = margin;
    const marginTop = margin;
    const marginBottom = margin;
    const radius =
      Math.min(
        width - marginLeft - marginRight,
        height - marginTop - marginBottom
      ) / 2;
    const r = 3;

    const root = d3Hierarchy.hierarchy<{
      name: string;
      children: any;
      token: UniqueNFTToken;
    }>({
      name: nftCollection.raw.tokenPrefix,
      children: data,
    } as any);

    const tree = d3Hierarchy.tree;
    // Compute the layout.
    tree()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth)(root);

    const rootLinkGen = d3Shape
      .linkRadial()
      .angle((d: any) => d.x)
      .radius((d: any) => d.y);

    const rootLinks = root.links();

    return (
      <svg
        viewBox={[
          Math.min(-marginLeft - radius, -width / 2),
          Math.min(-marginTop - radius, -height / 2),
          width,
          height,
        ].join(" ")}
        width={width}
        height={height}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        fontFamily="sans-serif"
        fontSize="10"
        onClick={() => router.replace({ query: { cid: collectionId } })}
      >
        <g
          fill="none"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        >
          {rootLinks.map((rootLink, i) => (
            <path key={i} d={(rootLinkGen as any)(rootLink)} />
          ))}
        </g>

        <g>
          {root.descendants().map((desc: any, i) => (
            <Link
              key={i}
              href={{
                pathname: router.pathname,
                query: { ...router.query, tid: desc.data.token?.tokenId },
              }}
            >
              <a
                onClick={(e) => {
                  if (desc.data.token) {
                    e.preventDefault();
                    e.stopPropagation();
                    router.replace({
                      pathname: router.pathname,
                      query: { ...router.query, tid: desc.data.token.tokenId },
                    });

                    router.replace({
                      query: { ...router.query, tid: desc.data.token.tokenId },
                    });
                  }
                }}
                transform={`rotate(${
                  (desc.x * 180) / Math.PI - 90
                }) translate(${desc.y},0)`}
              >
                <circle
                  fill={desc.data.children ? stroke : fill}
                  r={desc.data.token ? r : 3 * r}
                />
                {tokenId === String(desc.data.token?.tokenId) ? (
                  <circle fill="none" stroke="#00F604" strokeWidth="2" r={6} />
                ) : null}
                <title>{desc.data.name}</title>
                <text
                  transform={`rotate(${desc.x >= Math.PI ? 180 : 0})`}
                  x={desc.x < Math.PI === !desc.data.children ? 6 : -6}
                  dy="0.32em"
                  textAnchor={
                    desc.x < Math.PI === !desc.data.children ? "start" : "end"
                  }
                  paintOrder="stroke"
                  stroke={haloStroke}
                  strokeWidth={haloStrokeWidth}
                >
                  {desc.data.name}
                </text>
              </a>
            </Link>
          ))}
        </g>
      </svg>
    );
  }
};

async function computeTree(
  token: UniqueNFTToken,
  uniqueHelper: UniqueHelper
): Promise<any> {
  const collectionId = token.collectionId;

  const tokenAddress = uniqueHelper.util.getNestingTokenAddress(
    collectionId,
    token.tokenId
  );

  const ownedTokens: string[] = await uniqueHelper.getCollectionTokensByAddress(
    collectionId,
    { Ethereum: tokenAddress }
  );

  return {
    name: `#${token.tokenId}`,
    token: token,
    children: await Promise.all(
      ownedTokens.map(async (childTokenId) => {
        const childToken = uniqueHelper.getCollectionTokenObject(
          collectionId,
          childTokenId
        );
        return await computeTree(childToken, uniqueHelper);
      })
    ),
  };
}

export default CollectionsViewPage;
