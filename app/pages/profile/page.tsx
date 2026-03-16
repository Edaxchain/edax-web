'use client';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useRouter } from 'next/navigation';
import { ConnectWallet } from '@/app/contexts/ConnectWallet';

export default function ProfilePage() {
    const { publicKey, connected, wallet, disconnect } = useWallet();
    const { connection } = useConnection();
    const [balance, setBalance] = useState<number>(0);
    const [copied, setCopied] = useState(false);
    const router = useRouter();


    useEffect(() => {
        if (publicKey) {
            connection.getBalance(publicKey).then((lamports) => {
                setBalance(lamports / LAMPORTS_PER_SOL);
            });
        }
    }, [publicKey, connection]);

    const handleCopy = () => {
        if (publicKey) {
            navigator.clipboard.writeText(publicKey.toBase58());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const getNetworkName = (endpoint: string) => {
        if (endpoint.includes('devnet')) return 'Solana Devnet';
        if (endpoint.includes('testnet')) return 'Solana Testnet';
        if (endpoint.includes('mainnet')) return 'Solana Mainnet';
        return 'Custom Network';
    };

    const currentNetwork = getNetworkName(connection.rpcEndpoint);

    const handleDisconnect = async () => {
        await disconnect();
        router.push('/');
    };

    if (!connected) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text-main">
                <h1 className="text-2xl mb-4 font-bold">Please connect your wallet</h1>
                <div className="flex flex-row items-center gap-4">
                    <button
                        onClick={() => router.push('/')}
                        className="bg-background text-text-main rounded-full px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold transition-all hover:bg-secondary-button/30 transition-colors cursor-pointer hover:scale-105 active:scale-95"
                    > Home
                    </button>
                    <ConnectWallet />
                </div>
            </div>

        );
    }

    const address = publicKey?.toBase58() || '';

    return (
        <div className="min-h-screen w-full bg-background text-foreground py-20 px-4 md:py-20">
            <div className="max-w-3xl mx-auto w-full">
                <h1 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4">
                    Wallet Profile
                </h1>

                <div className="space-y-6 w-full">

                    {/* Address */}
                    <div className="w-full bg-background border border-border/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(20,241,149,0.05)]">
                        <p className="text-text-main text-sm mb-2">Wallet Address</p>
                        <div className="w-full flex items-center justify-between bg-badkgrounf p-4 rounded-lg border border-border/10 break-all">
                            <div className="flex-1 min-w-0 pr-4">
                                <p className="text-sm md:text-base text-text-main font-mono tracking-tight truncate">
                                    {address}
                                </p>
                            </div>
                            <button
                                onClick={handleCopy}
                                title="Copy Address"
                                className={`p-2 rounded-lg transition-all flex-shrink-0 flex items-center justify-center ${copied
                                    ? 'bg-primary-button/20 text-primary-button'
                                    : 'bg-background hover:bg-secondary-button text-text-sub hover:text-text-main hover:cursor-pointer'
                                    }`}
                            >
                                {copied ? (
                                    // Check
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                ) : (
                                    // Copy
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 16.5V19.5A2.25 2.25 0 0 1 13.5 21.75h-9A2.25 2.25 0 0 1 2.25 19.5v-9A2.25 2.25 0 0 1 4.5 8.25h3m3-6h9A2.25 2.25 0 0 1 21.75 4.5v9A2.25 2.25 0 0 1 19.5 15.75h-9A2.25 2.25 0 0 1 8.25 13.5v-9A2.25 2.25 0 0 1 10.5 2.25Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Network & Wallet Provider */}
                    <div className="w-full bg-background border border-border/10 rounded-2xl p-6">
                        <h2 className="text-lg font-bold mb-4 text-text-main">Connection Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="w-full bg-background p-4 rounded-xl border border-border/10 flex items-center gap-3">
                                {wallet?.adapter.icon && (
                                    <img src={wallet.adapter.icon} alt={wallet.adapter.name} className="w-8 h-8" />
                                )}
                                <div className='min-w-0'>
                                    <p className="text-xs text-text-main">Provider</p>
                                    <p className="font-bold truncate">{wallet?.adapter.name ||'Unknown'}</p>
                                </div>
                            </div>

                            <div className="w-full bg-background p-4 rounded-xl border border-border/10 flex items-center gap-3">

                                <div className={`w-3 h-3 rounded-full animate-pulse flex-shrink-0 ${currentNetwork.includes('Mainnet') ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                <div className='min-w-0'>
                                    <p className="text-xs text-text-main">Network</p>
                                    <p className="font-bold truncate">{currentNetwork}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Assets */}
                    <div className="w-full bg-background border border-border/10 rounded-2xl p-6">
                        <h2 className="text-lg font-bold mb-4 text-text-main">Assets</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="w-full bg-background p-4 rounded-xl border border-border/10">
                                <p className="text-sm text-text-main mb-1">Balance</p>
                                <p className="text-2xl font-bold truncate">{balance.toFixed(4)} <span className="text-primary text-lg">SOL</span></p>
                            </div>
                            <div className="w-full bg-background p-4 rounded-xl border border-border/10">
                                <p className="text-sm text-text-main mb-1">EDAX Token</p>
                                <p className="text-2xl font-bold truncate">0.00 <span className="text-primary text-lg">EDAX</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="w-full flex flex-col md:flex-row gap-4 pt-4">
                        <a
                            href={`https://solscan.io/account/${address}?cluster=devnet`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-primary-button hover:bg-primary-button/50 text-center py-3 rounded-full font-bold transition-colors border border-border"
                        >
                            View on Solscan ↗
                        </a>
                        <button
                            onClick={handleDisconnect}
                            className="flex-1 text-red-500 bg-secondary-button hover:bg-foreground/50 text-center py-3 rounded-full font-bold transition-colors border border-border hover:cursor-pointer"
                        >
                            Disconnect
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}