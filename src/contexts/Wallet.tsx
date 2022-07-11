import React, { useCallback, useContext, useMemo, useState } from "react";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";

import * as _polkadotMod from "@polkadot/extension-dapp";
type PolkadotExtDapp = typeof _polkadotMod;
const { web3Enable, web3Accounts }: PolkadotExtDapp =
  typeof window !== "undefined"
    ? require("@polkadot/extension-dapp")
    : ({} as any);

export interface NoWallet {
  connect: () => Promise<unknown>;
  isConnected: false;
}

export interface ConnectedWallet {
  isConnected: true;
  account: InjectedAccountWithMeta;
}

export type Wallet = ConnectedWallet | NoWallet;

async function connectWallet() {
  const inj = await web3Enable("CommunityNFTs_PolkadotNA2022");
  console.log("ALL INJ", inj);
  return inj;
}

const WalletContext = React.createContext<Wallet>(0 as never);
export const ConnectedWalletContext = React.createContext<ConnectedWallet>(
  0 as never
);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [walletState, setWalletState] = useState<{
    isConnected: boolean;
    account?: InjectedAccountWithMeta;
  }>({ isConnected: false });

  const connect = useCallback(
    async () =>
      connectWallet().then(async () => {
        const accounts = await web3Accounts();

        const account = accounts[0];

        setWalletState({
          account,
          isConnected: true,
        });
      }),
    []
  );

  const wallet: Wallet = useMemo(
    () => ({
      ...walletState,
      account: walletState.account!,
      connect,
    }),
    [connect, walletState]
  );

  return (
    <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>
  );
};

export function useWallet() {
  return useContext(WalletContext);
}

export function useConnectedWallet() {
  return useContext(ConnectedWalletContext);
}
