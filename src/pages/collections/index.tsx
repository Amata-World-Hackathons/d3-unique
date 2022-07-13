import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { getDocs, query, where, collection } from "@firebase/firestore";

import { AppPage } from "@src/types";
import { COLLECTION_COLLECTIONS, useFirestore } from "@src/contexts/Firebase";
import { useConnectedWallet } from "@src/contexts/Wallet";
import { useAsyncCall } from "@src/utils";
import { Preloader } from "@src/components/progress/Preloader";
import {
  UniqueNFTCollectionData,
  useUniqueNFTCollectionRef,
} from "@src/contexts/UniqueNetwork";

const NFTCollectionCard: React.FC<{ id: string }> = ({ id }) => {
  const collectionRef = useUniqueNFTCollectionRef(id);
  const call = useCallback(() => collectionRef.getData(), [collectionRef]);
  const res = useAsyncCall<UniqueNFTCollectionData>(call);

  if (res.loading)
    return <div className="card shadow-lg bg-white">Loading...</div>;

  if (res.error)
    return (
      <div className="alert alert-error">
        Failed to load collection with ID={id}
      </div>
    );

  const nftCollection = res.data!;

  return (
    <div className="card shadow-lg bg-white">
      <div className="card-body">
        <h2 className="card-title">{nftCollection.name}</h2>

        <p>
          {nftCollection.description || (
            <span className="text-sm text-slate-500">
              No description provided
            </span>
          )}
        </p>

        <div className="card-actions justify-end">
          <Link
            href={{
              pathname: "/collections/view",
              query: { cid: id },
            }}
          >
            <a className="btn btn-primary">View</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CollectionsIndexPage: AppPage = () => {
  const db = useFirestore();
  const wallet = useConnectedWallet();

  const getCollectionIds = useCallback(async () => {
    const snapshot = await getDocs(
      query(
        collection(db, COLLECTION_COLLECTIONS),
        where("owner", "==", wallet.account.address)
      )
    );

    const allIds: string[] = [];
    snapshot.forEach((doc) => {
      allIds.push(doc.data().collectionId);
    });

    return allIds;
  }, [wallet, db]);

  const res = useAsyncCall(getCollectionIds);

  if (res.loading) return <Preloader />;

  const collectionIds = res.data!;

  return (
    <div className="m-auto w-full max-w-3xl">
      <div className="mt-12 flex flex-row items-center">
        <div className="flex-1 prose">
          <h1>My Collections</h1>
        </div>

        <div className="flex-none">
          <Link href="/collections/mint">
            <a className="btn btn-primary">Mint new</a>
          </Link>
        </div>
      </div>

      {/* <div className="mt-8 flex flex-row gap-4">
        <input type="text" className="input shadow-md flex-1" />

        <button className="btn btn-primary">Search</button>
      </div> */}

      <section className="mt-8 flex flex-col gap-4">
        {collectionIds.length ? (
          collectionIds.map((id) => <NFTCollectionCard key={id} id={id} />)
        ) : (
          <p>No collections found, try minting a new collection</p>
        )}
      </section>
    </div>
  );
};

export default CollectionsIndexPage;
