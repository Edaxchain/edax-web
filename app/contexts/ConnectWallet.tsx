'use client';

import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useState, useRef, useEffect } from 'react';

export const ConnectWallet = () => {
    const { setVisible } = useWalletModal();
    const { publicKey, disconnect, connected, wallet } = useWallet();
    const [isOpen, setIsOpen] = useState(false);
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
                <div className="absolute right-0 mt-2 w-48 bg-nav-bg border border-white/10 shadow-2xl py-2 z-50 backdrop-blur-xl">
                    <button
                        onClick={() => { navigator.clipboard.writeText(base58 || ''); setIsOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-[#14F195] cursor-pointer transition-colors"

                    >
                        Copy Address
                    </button>
                    <Link
                        href="/pages/profile"
                        onClick={() => setIsOpen(false)} 
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-[#14F195] cursor-pointer transition-colors"
                    >
                        Profile
                    </Link>
                    <button
                        onClick={() => { setVisible(true); setIsOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-[#14F195] cursor-pointer transition-colors"
                    >
                        Change Wallet
                    </button>
                    <hr className="my-1 border-white/5" />
                    <button
                        onClick={() => { disconnect(); setIsOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/10 hover:text-red-600 cursor-pointer transition-colors"
                    >
                        Disconnect
                    </button>
                </div>
            )}
        </div>
    );
};