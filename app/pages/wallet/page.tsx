'use client'

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useWallet } from '@solana/wallet-adapter-react';
import { 
    BookOpen, 
    ShieldCheck, 
    Download, 
    Key, 
    Zap, 
    ArrowRight,
    ExternalLink
} from 'lucide-react';

const WalletPageContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialTab = searchParams.get('tab') || 'guide';
    const [activeTab, setActiveTab] = useState('initialTab');
    const { wallets, select } = useWallet();

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab) setActiveTab(tab);
    }, [searchParams]);

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
        router.replace(`/pages/wallet?tab=${tabName}`, { scroll: false });
    };
    

    const guideSteps = [
        {
            title: "Download a Wallet",
            desc: "เลือกติดตั้งกระเป๋าที่รองรับ Solana ผ่าน Browser Extension หรือ Mobile App",
            icon: <Download className="w-5 h-5" />
        },
        {
            title: "Secure Your Recovery Phrase",
            desc: "จดจำและเก็บรักษา 12-24 Seed Phrase ไว้ในที่ปลอดภัยและออฟไลน์ ห้ามบอกรหัสนี้กับผู้อื่นเด็ดขาด",
            icon: <Key className="w-5 h-5" />
        },
        {
            title: "Connect to EDAX",
            desc: "กดปุ่ม 'Connect Wallet' เพื่อเริ่มใช้งานระบบ Infrastructure และจัดการสินทรัพย์ของคุณบน EDAX",
            icon: <Zap className="w-5 h-5" />
        }
    ];

    return (
        <div className="min-h-screen bg-background text-text-main pt-32 pb-20 px-6 font-brand">
            <div className="max-w-5xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-12 text-center lg:text-left">
                    <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">EDAX Wallet Hub</h1>
                    <p className="text-text-sub max-w-xl uppercase text-[10px] tracking-[0.3em] font-bold opacity-70 mx-auto lg:mx-0">
                        Securely manage your assets and explore the decentralized infrastructure.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex p-1.5 bg-background backdrop-blur-xl border border-border/10 rounded-full w-fit mb-12">
                    <button 
                        onClick={() => handleTabChange('guide')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all text-sm font-bold tracking-tighter ${activeTab === 'guide' ? 'bg-primary-button text-text-main' : 'text-text-sub hover:text-text-main cursor-pointer'}`}
                    >
                        <BookOpen size={16} /> Wallet Guide
                    </button>
                    <button 
                        onClick={() => handleTabChange('supported')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all text-sm font-bold tracking-tighter ${activeTab === 'supported' ? 'bg-primary-button text-text-main' : 'text-text-sub hover:text-text-main cursor-pointer'}`}
                    >
                        <ShieldCheck size={16} /> Supported Wallets
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {/* Guide */}
                    {activeTab === 'guide' && (
                        <motion.div 
                            key="guide"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {guideSteps.map((step, index) => (
                                    <div key={index} className="p-8 rounded-[2.5rem] bg-background/20 border border-border/10 backdrop-blur-md relative group hover:border-border/30 transition-all">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-bold mb-3 uppercase tracking-tight italic">Step {index + 1}</h3>
                                        <h4 className="font-bold mb-2 text-primary uppercase text-sm tracking-wide">{step.title}</h4>
                                        <p className="text-[11px] text-text-sub leading-relaxed opacity-80">{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 rounded-3xl bg-background/5 border border-dashed border-border/30 text-center">
                                <p className="text-[10px] uppercase font-bold tracking-widest text-text-sub flex items-center justify-center gap-2">
                                    <ShieldCheck size={12} className="text-primary" />
                                    Security First: EDAX never stores your private keys or recovery phrases.
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Supported */}
                    {activeTab === 'supported' && (
                        <motion.div 
                            key="supported"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                        >
                            {wallets.map((wallet) => (
                                <div 
                                    key={wallet.adapter.name} 
                                    className="flex flex-col items-center p-8 rounded-[2.5rem] bg-background/20 border border-border/10 hover:bg-background/5 transition-all group text-center cursor-pointer"
                                >
                                    
                                    <div className="w-16 h-16 bg-foreground/10 rounded-3xl flex items-center justify-center p-3 mb-6 shadow-2xl group-hover:scale-110 transition-transform border border-border/5">
                                        <img 
                                            src={wallet.adapter.icon} 
                                            alt={wallet.adapter.name} 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <h3 className="font-black uppercase tracking-tighter mb-1 text-sm">
                                        {wallet.adapter.name}
                                    </h3>
                                    
                                    <p className="text-[9px] text-text-sub font-bold uppercase tracking-tight opacity-60 mb-6">
                                        {wallet.readyState === 'Installed' ? 'Ready to Connect' : 'Not Detected'}
                                    </p>

                                    {wallet.readyState === 'Installed' ? (
                                        <button 
                                            onClick={() => select(wallet.adapter.name)}
                                            className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                                        >
                                            Connect <Zap size={12} />
                                        </button>
                                    ) : (
                                        <a 
                                            href={wallet.adapter.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-text-sub text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-text-main transition-all cursor-pointer"
                                        >
                                            Install <ExternalLink size={12} />
                                        </a>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default function WalletPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-primary font-black animate-pulse">LOADING...</div>}>
            <WalletPageContent />
        </Suspense>
    );
}