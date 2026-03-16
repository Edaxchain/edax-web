'use client'

import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Lightbulb, Rocket, Globe, Activity } from 'lucide-react';

const roadmapData = [
    {
        phase: "Phase I",
        title: "MVP Launch",
        status: "completed",
        desc: "Core protocol development and initial architecture verification for the EDAX ecosystem.",
        items: ["Smart Contract Audit", "Basic Wallet Integration", "Governance Framework"],
        icon: <Rocket className="w-6 h-6" />,
        pos: { x: 2.5, y: 28 },
    },
    {
        phase: "Phase II",
        title: "Product Rollout",
        status: "current",
        desc: "Expanding to real-world sectors including Smart City infrastructure and Health-tech solutions.",
        items: ["Smart City Pilot", "Healthcare Data Nodes", "EDAX IoT Connector"],
        icon: <Activity className="w-6 h-6" />,
        pos: { x: 30, y: 15 },
    },
    {
        phase: "Phase III",
        title: "Mainnet & DApps",
        status: "upcoming",
        desc: "Transitioning to full Mainnet with integrated mobile wallet and native DApp support.",
        items: ["Mainnet 1.0 Launch", "Official Mobile Wallet", "DApp Developer SDK"],
        icon: <Lightbulb className="w-6 h-6" />,
        pos: { x: 60, y: 50 },
    },
    {
        phase: "Phase IV",
        title: "Global Expansion",
        status: "upcoming",
        desc: "Strategic international partnerships and mass adoption of the EDAX decentralized network.",
        items: ["Cross-chain Bridge", "Global Merchant Network", "Mass Adoption Campaign"],
        icon: <Globe className="w-6 h-6" />,
        pos: { x: 70, y: 5 },
    }
];

const RoadmapPage = () => {
    return (
        <div className="min-h-screen bg-background text-text-main pt-22 pb-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                {/* Header */}
                <div className="mb-16 text-center lg:text-left">
                    <h1 className="text-5xl font-brand uppercase tracking-tighter mb-4">Roadmap</h1>
                    <p className="text-text-sub max-w-xl uppercase text-[10px] tracking-[0.3em] font-bold mx-auto lg:mx-0">
                        Evolution of the EDAX Protocol: From Research to Global Infrastructure
                    </p>
                </div>

                {/* Desktop */}
                <div className="hidden lg:block relative w-full aspect-[16/9] max-w-[1440px] mx-auto border border-border/10 rounded-[3rem] bg-background/20 overflow-visible">
                    {/* SVG */}
                    <svg
                        viewBox="0 0 1440 850"
                        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M 0 250 L 50 250 L 50 133 L 445 133 L 445 600 L 875 600 L 875 50 L 970 50 L 970 50 L 1440 50"
                            fill="none"
                            stroke="var(--primary)"
                            strokeWidth="5"
                            initial={{ pathLength: 1, pathOffset: 0 }}
                            animate={{ pathOffset: 2 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>

                    {roadmapData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="absolute group flex flex-col items-start gap-2"
                            style={{
                                left: `${item.pos.x}%`,
                                top: `${item.pos.y}%`,
                                zIndex: 50,

                            }}
                        >
                            {/* Node Point */}
                            <div className={`relative z-30 w-5 h-5 rounded-full shadow-[0_0_20px_currentColor] ${item.status === 'completed' ? 'text-done-status' :
                                item.status === 'current' ? 'text-progress-status' : 'text-upcoming-status'
                                }
                                ${item.status === 'completed' ? 'bg-done-status' :
                                    item.status === 'current' ? 'bg-progress-status' : 'bg-upcoming-status'
                                }`} />

                            {/* Content Card */}
                            <div className={`w-[220px] xl:w-[280px] bg-background/80 backdrop-blur-3xl border border-border/40 p-4 rounded-[2rem] hover:border-border/50 
                            transition-all shadow-2xl relative z-10 translate-x-[16px]
                            `}>
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{item.phase}</span>
                                {item.status === 'current' && (
                                    <span className="bg-progress-status/10 text-progress-status text-[8px] px-2 py-0.5 rounded-full font-bold animate-pulse border border-progress-status/20">
                                        LIVE NOW
                                    </span>
                                )}
                                <h3 className="text-xl font-bold mb-2 mt-1">{item.title}</h3>
                                <p className="text-[11px] text-text-sub leading-relaxed mb-4 opacity-80">{item.desc}</p>

                                <div className="space-y-2">
                                    {item.items.map((point, i) => (
                                        <div key={i} className="flex items-center gap-2 text-[10px] font-medium opacity-70">
                                            <div className="w-1 h-1 rounded-full bg-text-main" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile */}
                <div className="lg:hidden flex flex-col gap-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-primary/30" />

                    {roadmapData.map((item, index) => (
                        <div key={index} className="relative pl-12">

                            <div className={`absolute left-0 top-0 w-8 h-8 rounded-xl flex items-center justify-center border border-border z-10 ${item.status === 'completed' ? 'bg-done-status text-text-main' : 'bg-background text-text-sub'
                                }`}>
                                {item.status === 'completed' ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                            </div>

                            <div className="bg-background border border-border/10 p-6 rounded-3xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-primary font-black text-[10px] uppercase tracking-tighter">{item.phase}</span>
                                    {item.status === 'current' && (
                                        <span className="bg-progress-status/10 text-progress-status text-[8px] px-2 py-0.5 rounded-full font-bold animate-pulse border border-progress-status/20">
                                            LIVE NOW
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    {item.icon} {item.title}
                                </h3>
                                <p className="text-sm text-text-sub leading-relaxed mb-6">{item.desc}</p>

                                <div className="grid grid-cols-1 gap-2">
                                    {item.items.map((point, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs opacity-80">
                                            <div className="w-1.5 h-1.5 bg-text-main rounded-full" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default RoadmapPage;