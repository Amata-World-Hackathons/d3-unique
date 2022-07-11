import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { addDoc, getDocs, query, where, collection } from "@firebase/firestore";
import * as d3Shape from "d3-shape";
import * as d3Hierarchy from "d3-hierarchy";

import { AppPage } from "@src/types";
import {
  UniqueNFTCollectionData,
  useUniqueNetwork,
  useUniqueNFTCollectionRef,
  useUniqueTokenRef,
} from "@src/contexts/UniqueNetwork";
import { useAsyncCall } from "@src/utils";
import { Preloader } from "@src/components/progress/Preloader";
import { useCallback, useState } from "react";
import { useConnectedWallet } from "@src/contexts/Wallet";
import { UniqueNFTToken } from "@src/vendor/unique";
import { useFirestore } from "@src/contexts/Firebase";

const ViewOriginalsPage: AppPage = () => {
  const db = useFirestore();
  const router = useRouter();
  const wallet = useConnectedWallet();
  const uniq = useUniqueNetwork();
  const collectionId = String(router.query.cid);
  const tokenId = String(router.query.tid);
  const collectionRef = useUniqueNFTCollectionRef(collectionId);
  const tokenRef = useUniqueTokenRef(collectionId, tokenId);
  const [selectedToken, setSelectedToken] = useState<
    UniqueNFTToken | undefined
  >();

  const call = useCallback(
    () => collectionRef.getData(),
    [router, collectionRef, tokenId]
  );
  const res = useAsyncCall<UniqueNFTCollectionData>(call);

  const call2 = useCallback(
    async () => (tokenId ? tokenRef.getData() : undefined),
    [router, tokenRef, tokenId]
  );
  const res2 = useAsyncCall<UniqueNFTToken>(call2);

  const getTree = useCallback(async () => {
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
  }, [router, uniq, db, collectionId, collectionRef]);
  const tree = useAsyncCall<any>(getTree);

  console.log("ROOT", tree);

  const { handleSubmit, reset, register, formState } = useForm();

  if (res.loading) return <Preloader />;

  const nftCollection = res.data!;

  return (
    <div className="m-auto w-full max-w-3xl">
      <div className="mt-12 prose">
        <h1 className="mb-4">{nftCollection.name}</h1>

        <div className="no-prose flex flex-row justify-between items-center">
          <span>
            ID: {collectionId} ({nftCollection.raw.tokenPrefix})
          </span>
          <a
            rel="noreferrer nofollow"
            href={`https://uniquescan.io/OPAL/collections/${collectionId}`}
            target="_blank"
            className="btn btn-ghost btn-sm"
          >
            Find it on UniqueScan
          </a>

          <a
            rel="noreferrer nofollow"
            href={`https://wallet-opal.unique.network/#/myStuff/nft?collectionId=${collectionId}`}
            target="_blank"
            className={classNames("btn btn-ghost btn-sm", {
              ["btn-disabled"]:
                wallet.account.address !== nftCollection.normalizedOwner,
            })}
          >
            Find it on my wallet
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

      <form
        action=""
        className="mt-4 flex flex-row justify-end gap-2"
        onSubmit={handleSubmit(async (data) => {
          const { tokenId } = await uniq.mintNFTToken({
            collectionId,
            properties: [{ key: "imageUrl", value: data.imageUrl }],
          });

          await addDoc(collection(db, "root-tokens"), {
            tokenId,
            collectionId,
          });

          router.replace({
            pathname: router.pathname,
            query: { ...router.query, tid: tokenId },
          });
          reset();
        })}
      >
        <input
          type="text"
          className="input shadow-md flex-1"
          placeholder="Image URL"
          {...register("imageUrl")}
        />

        <button
          className={classNames("btn btn-primary", {
            loading: formState.isSubmitting,
          })}
        >
          {formState.isSubmitting ? "Minting" : "Mint NFT"}
        </button>
      </form>

      <section className="flex flex-row justify-center items-center">
        {radialGraph(tree.data! || [])}
      </section>

      {selectedToken ? (
        <section className="card shadow-md bg-white">
          <form
            action=""
            className="card-body"
            onSubmit={async (e) => {
              e.preventDefault();
              const parentAddr = uniq.helper.util.getNestingTokenAddress(
                collectionId,
                selectedToken.tokenId
              );
              const token = await uniq.mintNFTToken({
                collectionId,
                owner: { Ethereum: parentAddr },
                properties: [
                  { key: "imageUrl", value: "https://placekitten.com/200/300" },
                ],
              });

              router.replace({
                pathname: router.pathname,
                query: { ...router.query, tid: token.tokenId },
              });
            }}
          >
            <p>Selected token: {selectedToken.tokenId}</p>

            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">
                Mint Child
              </button>
            </div>
          </form>
        </section>
      ) : null}
    </div>
  );

  // many thanks to https://observablehq.com/@d3/radial-tree
  function radialGraph(data) {
    console.log("RADIALS", data);

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

    const root = d3Hierarchy.hierarchy({
      name: nftCollection.name,
      children: data,
    });

    // Compute labels and titles.
    const descendants = root.descendants();

    const tree = d3Hierarchy.tree;
    // Compute the layout.
    tree()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth)(root);

    const rootLinkGen = d3Shape
      .linkRadial()
      .angle((d: any) => d.x)
      .radius((d: any) => d.y);

    return (
      <svg
        viewBox={[
          -marginLeft - radius,
          -marginTop - radius,
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
      >
        <g
          fill="none"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        >
          {root.links().map((rootLink, i) => (
            <path key={i} d={rootLinkGen(rootLink)} />
          ))}
        </g>

        <g>
          {root.descendants().map((desc, i) => (
            <a
              key={i}
              href=""
              onClick={(e) => {
                if (desc.data.token) {
                  e.preventDefault();
                  setSelectedToken(desc.data.token);
                }
              }}
              transform={`rotate(${(desc.x * 180) / Math.PI - 90}) translate(${
                desc.y
              },0)`}
            >
              <circle fill={desc.data.children ? stroke : fill} r={r} />
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
          ))}
        </g>
      </svg>
    );

    // if (L)
    //   node
    //     .append("text")
    //     .attr("transform", (d) => `rotate(${d.x >= Math.PI ? 180 : 0})`)
    //     .attr("dy", "0.32em")
    //     .attr("x", (d) => (d.x < Math.PI === !d.children ? 6 : -6))
    //     .attr("text-anchor", (d) =>
    //       d.x < Math.PI === !d.children ? "start" : "end"
    //     )
    //     .attr("paint-order", "stroke")
    //     .attr("stroke", halo)
    //     .attr("stroke-width", haloWidth)
    //     .text((d, i) => L[i]);

    // return svg.node();
    // }
  }
};

async function computeTree(token, uniqueHelper) {
  const collectionId = token.collectionId;

  const tokenAddress = uniqueHelper.util.getNestingTokenAddress(
    collectionId,
    token.tokenId
  );

  const ownedTokens = await uniqueHelper.getCollectionTokensByAddress(
    collectionId,
    { Ethereum: tokenAddress }
  );

  return {
    name: `ID=${token.tokenId}`,
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

export default ViewOriginalsPage;
