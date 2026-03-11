'use client';

import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useState, useRef, useEffect } from 'react';

export const ConnectWallet = () => {
    const { setVisible } = useWalletModal();
    const { publicKey, disconnect, connected, wallet } = useWallet();
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    const base58 = publicKey?.toBase58();
    const shortAddress = base58 ? `${base58.slice(0, 4)}...${base58.slice(-4)}` : '';


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!connected) {
        return (
            <button
                onClick={() => setVisible(true)}
                className="bg-[#14F195] text-background rounded-full px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold transition-all hover: cursor-pointer hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(20,241,149,0.3)]"
            >
                {/* บน Desktop */}
                <span className="hidden sm:inline">Connect Wallet</span>

                {/* บน Mobile */}
                <span className="sm:hidden">Connect</span>
            </button>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-nav-bg border border-[#14F195]/30 text-foreground rounded-full px-4 py-2 text-sm font-medium hover: cursor-pointer hover:border-[#14F195] transition-all "
            >
                {/* Icon */}
                {wallet?.adapter.icon && (
                    <img src={wallet.adapter.icon} alt="wallet icon" className="w-5 h-5" />
                )}
                <span>{shortAddress}</span>
            </button>

            {/* Custom Dropdown Menu */}
            {isOpen && (
                <div className="absolute mt-2 w-48 bg-nav-bg/95 backdrop-blur-2xl border border-nav-border/20 rounded-[2rem] shadow-2xl p-2 z-50">
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(base58 || '');
                            setCopied(true);

                            
                            setTimeout(() => {
                                setCopied(false);
                                setIsOpen(false);
                            }, 2000);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-foreground md:text-gray-400 hover:text-foreground hover:bg-white/5 rounded-[1.5rem] cursor-pointer transition-all duration-200 flex items-center justify-between"
                    >
                        <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                        {copied && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#14F195" className="w-4 h-4 animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        )}
                    </button>

                    <Link
                        href="/pages/profile"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground md:text-gray-400 hover:text-foreground hover:bg-white/5 rounded-[1.5rem] cursor-pointer transition-all duration-200"
                    >
                        Profile
                    </Link>

                    <button
                        onClick={() => { setVisible(true); setIsOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-foreground md:text-gray-400 hover:text-foreground hover:bg-white/5 rounded-[1.5rem] cursor-pointer transition-all duration-200"
                    >
                        Change Wallet
                    </button>

                    <hr className="my-2 border-white/5 mx-2" />

                    <button
                        onClick={() => { disconnect(); setIsOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-red-400/80 hover:text-red-500 hover:bg-red-500/10 rounded-[1.5rem] cursor-pointer transition-all duration-200"
                    >
                        Disconnect
                    </button>
                </div>
            )}
        </div>
    );
};