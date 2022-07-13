import classNames from "classnames";
import { create } from "ipfs-http-client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { addDoc, collection } from "@firebase/firestore";

import * as _polkadotMod from "@polkadot/extension-dapp";
type PolkadotExtDapp = typeof _polkadotMod;
const { web3FromSource }: PolkadotExtDapp =
  typeof window !== "undefined"
    ? require("@polkadot/extension-dapp")
    : ({} as any);

import { useUniqueNetwork } from "@src/contexts/UniqueNetwork";
import { useFirestore } from "@src/contexts/Firebase";
import { useConnectedWallet } from "@src/contexts/Wallet";
import { useRef } from "react";

export interface MintNFTModalProps {
  modalInputId: string;
  collectionId: string;
  parentTokenId?: string;
  onMintSuccess: (tokenId: string) => void;
}

const MintNFTModal: React.FC<MintNFTModalProps> = ({
  modalInputId,
  collectionId,
  parentTokenId,
  onMintSuccess,
}) => {
  const db = useFirestore();
  const router = useRouter();
  const wallet = useConnectedWallet();
  const uniq = useUniqueNetwork();
  const { handleSubmit, reset, register, formState, watch } = useForm();

  const imageFile = watch("file");

  const previewUrl =
    imageFile && imageFile.length
      ? URL.createObjectURL(imageFile[0])
      : "https://via.placeholder.com/320x256?text=Upload+Image";

  const labelRef = useRef<HTMLLabelElement>(null);

  return (
    <label
      ref={labelRef}
      htmlFor={modalInputId}
      className="modal cursor-pointer"
    >
      <label htmlFor="" className="modal-box relative">
        <h3 className="text-lg font-bold">
          Mint a new NFT{parentTokenId ? ` with parent #${parentTokenId}` : ""}
        </h3>

        <form
          action=""
          className="mt-4 flex flex-col gap-2"
          onSubmit={handleSubmit(async (data) => {
            const injector = await web3FromSource(wallet.account.meta.source);
            const sig = await injector.signer.signRaw?.call(injector.signer, {
              address: wallet.account.address,
              type: "bytes",
              data: wallet.account.address,
            });

            if (!sig) return;

            const authHeaderRaw = `sub-${wallet.account.address}:${sig?.signature}`;
            const ipfsGateway = "https://crustipfs.xyz";

            const ipfs = create({
              url: `${ipfsGateway}/api/v0`,
              headers: {
                authorization: `Basic ${Buffer.from(authHeaderRaw).toString(
                  "base64"
                )}`,
              },
            });

            const { cid } = await ipfs.add(data.file[0]);

            console.log("IPFS CID", cid);

            const tokenData = {
              ipfsJson: JSON.stringify({
                ipfsImage: cid.toString(),
                type: "image",
              }),
            };

            const parentOpts = parentTokenId
              ? {
                  owner: {
                    Ethereum: uniq.helper.util.getNestingTokenAddress(
                      collectionId,
                      parentTokenId
                    ),
                  },
                }
              : {};

            const { tokenId } = await uniq.mintNFTToken({
              ...parentOpts,
              collectionId,
              constData: tokenData,
              properties: [
                {
                  key: "imageUrl",
                  value: `${ipfsGateway}/ipfs/${cid.toString()}`,
                },
              ],
            });

            if (!parentTokenId) {
              await addDoc(collection(db, "root-tokens"), {
                tokenId,
                collectionId,
              });
            }

            reset();
            labelRef.current?.click();
            onMintSuccess(tokenId);
          })}
        >
          <div
            className="m-auto w-80 h-64 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${previewUrl})` }}
          />

          <input
            type="file"
            accept="image/*"
            className="input"
            {...register("file", {
              required: { value: true, message: "Please upload an image" },
            })}
          />

          <div className="flex flex-row justify-end">
            <button
              type="submit"
              className={classNames("btn btn-primary", {
                loading: formState.isSubmitting,
                "btn-disabled": !imageFile || !imageFile.length,
              })}
            >
              {formState.isSubmitting ? "Minting" : "Mint NFT"}
            </button>
          </div>
        </form>
      </label>
    </label>
  );
};

export default MintNFTModal;
