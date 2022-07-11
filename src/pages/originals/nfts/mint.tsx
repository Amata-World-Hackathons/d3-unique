import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useForm, FormProvider } from "react-hook-form";

import { AppPage } from "@src/types";
import { FormField, TextareaFormField } from "@src/components/forms/FormField";
import { useConnectedWallet } from "@src/contexts/Wallet";
import { COLLECTION_ORIGINALS, useFirestore } from "@src/contexts/Firebase";
import {
  UniqueNFTCollectionData,
  useUniqueNFTCollectionRef,
} from "@src/contexts/UniqueNetwork";
import { useAsyncCall } from "@src/utils";
import { Preloader } from "@src/components/progress/Preloader";

const STEP_BASIC_INFO = "1";
const STEP_IMAGE = "2";
const STEP_CUSTOM_ATTRIBUTES = "3";

const MintOriginalsNftPage: AppPage = () => {
  const db = useFirestore();
  const router = useRouter();
  const methods = useForm({ mode: "all" });
  const wallet = useConnectedWallet();

  const step = String(router.query.step || STEP_BASIC_INFO);
  const collectionId = String(router.query.cid);
  const collectionRef = useUniqueNFTCollectionRef(collectionId);

  const call = useCallback(() => collectionRef.getData(), [collectionRef]);
  const res = useAsyncCall<UniqueNFTCollectionData>(call);

  console.log("Collection", res);

  if (res.loading) return <Preloader />;

  const nftCollection = res.data!;
  const { handleSubmit } = methods;

  return (
    <div className="m-auto w-full max-w-3xl">
      <div className="mt-12 prose">
        <h1>Mint new NFT for {nftCollection.name}</h1>
      </div>

      <ul className="steps mb-8 mx-auto">
        <li className="step step-primary">Basic Info</li>
        <li
          className={classNames("step", {
            "step-primary": step !== STEP_BASIC_INFO,
          })}
        >
          Cover Image
        </li>
        <li
          className={classNames("step", {
            "step-primary": step === STEP_IMAGE,
          })}
        >
          Custom Attributes
        </li>
      </ul>

      <FormProvider {...methods}>
        <form
          action=""
          className="mt-4"
          onSubmit={(e) => {
            handleSubmit(async (data) => {
              console.log("SUBMITTED DATA", data);

              const address = "TODO NFT ADDRESS";
              console.log("ADD DOC", address);
              const doc = await addDoc(collection(db, COLLECTION_ORIGINALS), {
                ...data,
                owner: wallet.currentAddress,
                address,
              });

              console.log("DDDD", doc);

              router.push({
                pathname: "/originals/view",
                query: { addr: address },
              });
            })(e).catch((err) => {
              console.error("ERR", err);
            });
          }}
        >
          {renderBasicInfoSection(step === STEP_BASIC_INFO)}
        </form>
      </FormProvider>
    </div>
  );

  function renderBasicInfoSection(show: boolean) {
    return (
      <section className={classNames({ hidden: !show })}>
        <FormField
          name="name"
          label="Name"
          placeholder="e.g. My Great NFT Collection"
          autoComplete="off"
          registerOptions={{
            required: { value: true, message: "A name must be provided" },
          }}
        />

        <FormField
          name="symbol"
          label="Symbol"
          className="mt-2"
          placeholder="e.g. BTC"
          autoComplete="off"
          registerOptions={{
            required: { value: true, message: "A symbol must be provided" },
            maxLength: { value: 4, message: "Maximum of 4 characters" },
          }}
        />

        <TextareaFormField
          name="description"
          label="Description"
          className="mt-2"
          showOptionalLabel
        />

        <div className="mt-12 flex flex-row justify-end gap-4">
          <Link href="/originals">
            <a className="btn btn-ghost">Back to Originals</a>
          </Link>

          <button type="submit" className="btn btn-primary">
            Mint NFT
          </button>
        </div>
      </section>
    );
  }
};

export default MintOriginalsNftPage;
