import { createContext, useContext, useEffect, useMemo, useState } from "react";

import * as _polkadotMod from "@polkadot/extension-dapp";
type PolkadotExtDapp = typeof _polkadotMod;
const { web3FromSource }: PolkadotExtDapp =
  typeof window !== "undefined"
    ? require("@polkadot/extension-dapp")
    : ({} as any);

import { Logger } from "@src/vendor/logger";
import {
  UniqueHelper,
  UniqueNFTCollection,
  UniqueNFTToken,
} from "@src/vendor/unique";
import { Preloader } from "@src/components/progress/Preloader";
import { useConnectedWallet } from "./Wallet";

const UNIQUE_WS_ENDPOINT = "wss://ws-opal.unique.network";

export interface UniqueNFTCollectionData {
  id: string;
  name: string | null;
  description: string | null;
  tokensCount: number;
  raw: {
    limits: any;
    permissions: any;
    tokenPrefix: string;
  };
  normalizedOwner: string;
  admins: any[];
}

export interface MintNFTCollectionOptions {
  name: string;
  description?: string;
  tokenPrefix: string;
}

export interface MintNFTTokenOptions {
  owner?: any;
  collectionId: string;
  properties: { key: string; value: any }[];
}

export interface UniqueNetworkApi {
  mintNFTCollection: (
    options: MintNFTCollectionOptions
  ) => Promise<{ collectionId: string }>;

  mintNFTToken: (options: MintNFTTokenOptions) => Promise<{ tokenId: string }>;

  nestToken: (tokenId: string, parentId: string) => Promise<unknown>;

  helper: UniqueHelper;
}

const UniqueNetworkContext = createContext<UniqueNetworkApi>(0 as never);
const uniqueHelper = new UniqueHelper(new Logger());

export const UniqueNetworkProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [ready, setReady] = useState(false);
  const wallet = useConnectedWallet();

  useEffect(() => {
    init();

    async function init() {
      if (!uniqueHelper.api) {
        await uniqueHelper.connect(UNIQUE_WS_ENDPOINT);
      }

      setReady(true);
    }
  }, []);

  const uniq = useMemo<UniqueNetworkApi>(
    () => ({
      mintNFTCollection: async (options) => {
        const injector = await web3FromSource(wallet.account.meta.source);

        return uniqueHelper.mintNFTCollection(
          {
            address: wallet.account.address,
            signer: injector.signer,
          },
          {
            ...options,
            permissions: {
              nesting: {
                tokenOwners: true,
                collectionAdmin: true,
              },
            },
            tokenPropertyPermissions: [
              {
                key: "imageUrl",
                permission: {
                  mutable: false,
                  tokenOwner: true,
                  collectionAdmin: true,
                },
              },
            ],
          }
        );
      },

      mintNFTToken: async (options) => {
        const injector = await web3FromSource(wallet.account.meta.source);

        return uniqueHelper.mintNFTToken(
          {
            address: wallet.account.address,
            signer: injector.signer,
          },
          { owner: wallet.account.address, ...options }
        );
      },

      nestToken: async (tokenId, parentId) => {
        const injector = await web3FromSource(wallet.account.meta.source);

        return uniqueHelper.nestCollectionToken(
          {
            address: wallet.account.address,
            signer: injector.signer,
          },
          tokenId,
          parentId
        );
      },

      helper: uniqueHelper,
    }),
    [wallet]
  );

  if (!ready) return <Preloader />;

  return (
    <UniqueNetworkContext.Provider value={uniq}>
      {children}
    </UniqueNetworkContext.Provider>
  );
};

export function useUniqueNetwork() {
  return useContext(UniqueNetworkContext);
}

export function useUniqueNFTCollectionRef(collectionId: string) {
  const { helper } = useUniqueNetwork();

  return useMemo<UniqueNFTCollection>(
    () => helper.getCollectionObject(collectionId),
    [helper, collectionId]
  );
}

export function useUniqueTokenRef(collectionId: string, tokenId: string) {
  const collectionRef = useUniqueNFTCollectionRef(collectionId);

  return useMemo<UniqueNFTToken>(
    () => collectionRef.getTokenObject(tokenId),
    [collectionRef, tokenId]
  );
}
