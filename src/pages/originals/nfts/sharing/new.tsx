import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";

import { AppPage } from "@src/types";
import { FormField, TextareaFormField } from "@src/components/forms/FormField";

const OriginalsNftSharingNewPage: AppPage = () => {
  const router = useRouter();
  const address = String(router.query.addr);
  const tokenId = String(router.query.tokenId);

  const methods = useForm({ mode: "all" });
  const { handleSubmit } = methods;

  console.log("ADDR + TokID", address, tokenId);

  return (
    <div className="m-auto w-full max-w-3xl">
      <div className="mt-12 prose">
        <h1>
          Sharing options for Token {tokenId} in Collection {address}
        </h1>
      </div>

      <FormProvider {...methods}>
        <form
          action=""
          className="mt-4"
          onSubmit={(e) => {
            handleSubmit(async (data) => {
              console.log("SUBMITTED DATA", data);

              // const address = "TODO NFT ADDRESS";
              // console.log("ADD DOC", address);
              // const doc = await addDoc(collection(db, COLLECTION_ORIGINALS), {
              //   ...data,
              //   owner: wallet.currentAddress,
              //   address,
              // });

              // console.log("DDDD", doc);

              // router.push({
              //   pathname: "/originals/view",
              //   query: { addr: address },
              // });
            })(e).catch((err) => {
              console.error("ERR", err);
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
            className="mt-2"
            showOptionalLabel
          />

          <div className="mt-12 flex flex-row justify-end gap-4">
            <Link href="/originals">
              <a className="btn btn-ghost">Back to Originals</a>
            </Link>

            <button type="submit" className="btn btn-primary">
              Mint original
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default OriginalsNftSharingNewPage;
