import Link from "next/link";
import classNames from "classnames";
import { addDoc, collection } from "firebase/firestore";
import { useForm, FormProvider } from "react-hook-form";

import { AppPage } from "@src/types";
import { FormField, TextareaFormField } from "@src/components/forms/FormField";
import { useConnectedWallet } from "@src/contexts/Wallet";
import { COLLECTION_ORIGINALS, useFirestore } from "@src/contexts/Firebase";
import { useRouter } from "next/router";
import { useUniqueNetwork } from "@src/contexts/UniqueNetwork";
import { useState } from "react";

const OriginalsMintPage: AppPage = () => {
  const db = useFirestore();
  const uniq = useUniqueNetwork();
  const router = useRouter();
  const methods = useForm({ mode: "all" });
  const wallet = useConnectedWallet();
  const [hadUnknownError, setHadUnknownError] = useState(false);

  const { handleSubmit, formState } = methods;

  const { isSubmitting } = formState;

  return (
    <div className="m-auto w-full max-w-3xl">
      <div className="mt-12 prose">
        <h1>Mint new original</h1>
      </div>

      <FormProvider {...methods}>
        <form
          action=""
          className="mt-4"
          onSubmit={(e) => {
            handleSubmit(async (data) => {
              const { collectionId } = await uniq.mintNFTCollection({
                name: data.name,
                description: data.description,
                tokenPrefix: data.symbol,
              });

              await addDoc(collection(db, COLLECTION_ORIGINALS), {
                ...data,
                owner: wallet.account.address,
                collectionId: collectionId,
              });

              router.push({
                pathname: "/originals/view",
                query: { cid: collectionId },
              });
            })(e).catch((err) => {
              console.error("ERROR", err);

              setHadUnknownError(true);
            });
          }}
        >
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
            className="mt-2 mb-12"
            showOptionalLabel
          />

          {hadUnknownError ? (
            <div className="mt-4 alert alert-error">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Something unexpected happened while submitting the form,
                  please try again later
                </span>
              </div>
            </div>
          ) : null}

          <div className="mt-4 flex flex-row justify-end gap-4">
            <Link href="/originals">
              <a className="btn btn-ghost">Back to Originals</a>
            </Link>

            <button
              type="submit"
              className={classNames("btn btn-primary", {
                loading: isSubmitting,
              })}
            >
              {isSubmitting ? "Minting" : "Mint Collection"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default OriginalsMintPage;
