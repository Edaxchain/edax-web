'use client';

import React, { FC, ReactNode, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    AlphaWalletAdapter,
    LedgerWalletAdapter,
    CoinbaseWalletAdapter,
    //WalletConnectWalletAdapter 
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

export const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // Network Devnet สำหรับทดสอบ
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);


    const wallets = useMemo(
        () => [
            new AlphaWalletAdapter(),
            new LedgerWalletAdapter(),
            new CoinbaseWalletAdapter(),
            
        ],
        []
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect={true}
                onError={(error) => {
                    if (error.name !== 'WalletConfigError') {
                        console.error(error);
                    }
                }}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};