'use client';

import { useState } from 'react';
import {
    Cpu, Zap, HeartPulse, GraduationCap,
    Globe, Activity, Box, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const categories = [
    { id: 'all', name: 'All Products', icon: null, color: '#white' },
    { id: 'city', name: 'Smart City', icon: <Globe size={18} />, color: '#A855F7' },
    { id: 'energy', name: 'Smart Energy', icon: <Zap size={18} />, color: '#14F195' },
    { id: 'health', name: 'Smart Health', icon: <HeartPulse size={18} />, color: '#3B82F6' },
    { id: 'education', name: 'Smart Education', icon: <GraduationCap size={18} />, color: '#F97316' },
];


const allProducts = [
    { id: 1, category: 'city', title: 'Technology EDAX Chain Innovation', desc: 'Core infrastructure for decentralized solutions.', img: '', icon: <Cpu /> },
    { id: 2, category: 'city', title: 'Metaverse Land Energy', desc: 'Sustainable energy for virtual real estate.', img: '', icon: <Globe /> },
    { id: 3, category: 'energy', title: 'EV Solar Charging', desc: 'Smart stations for electric vehicle charging.', img: '', icon: <Zap /> },
    { id: 4, category: 'energy', title: 'EDAX Energy Blockchain', desc: 'Transparent energy distribution network.', img: '', icon: <Activity /> },
    { id: 5, category: 'energy', title: 'SandBox Energy Blockchain', desc: 'Innovation testing environment for energy.', img: '', icon: <Box /> },
    { id: 6, category: 'health', title: 'Smart Health Care', desc: 'AI-driven diagnostic and secured health data.', img: '', icon: <HeartPulse /> },
    { id: 7, category: 'education', title: 'Ai Education', desc: 'Personalized AI-powered learning experiences.', img: '', icon: <GraduationCap /> },
];

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/*  Header */}
                <header className="text-center mb-20">
                    <h1 className="text-5xl md:text-5xl font-black mb-10 uppercase tracking-tighter">
                        Our <span className="text-[#14F195]">Products</span>
                    </h1>

                    {/* Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl border transition-all duration-300 ${activeTab === cat.id
                                    ? 'bg-white text-black border-white scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                                    }`}
                            >
                                {cat.icon}
                                <span className="text-sm font-bold uppercase">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </header>

                <div className="space-y-24">
                    {categories
                        .filter(cat => cat.id !== 'all')
                        .map((category) => {
                            const isVisible = activeTab === 'all' || activeTab === category.id;
                            if (!isVisible) return null;

                            return (
                                <section key={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="h-8 w-1.5 rounded-full" style={{ backgroundColor: category.color }} />
                                        <h2 className="text-3xl font-black uppercase tracking-tight">
                                            {category.name}
                                        </h2>
                                    </div>

                                    {/* Color */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {allProducts
                                            .filter(p => p.category === category.id)
                                            .map((product) => {

                                                const themeColor = category.color;

                                                return (
                                                    <div
                                                        key={product.id}
                                                        className="group relative bg-[#121212] border border-white/5 rounded-[2.5rem] p-8 transition-all duration-500 overflow-hidden"
                                                        style={{

                                                            boxShadow: `0 0 0px ${themeColor}00`
                                                        }}

                                                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 30px ${themeColor}15`}
                                                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0px ${themeColor}00`}
                                                    >

                                                        <div
                                                            className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                                                            style={{ backgroundColor: themeColor }}
                                                        />

                                                        <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 overflow-hidden">
                                                            {product.img ? (
                                                                <img
                                                                    src={product.img}
                                                                    alt={product.title}
                                                                    className="w-12 h-12 object-contain"
                                                                />
                                                            ) : (

                                                                <div style={{ color: themeColor }}>
                                                                    {product.icon}
                                                                </div>
                                                            )}
                                                        </div>

                                                        <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                                                        <p className="text-gray-500 text-sm leading-relaxed mb-6">{product.desc}</p>

                                                        {/* Product website
                                                        <Link href={`/products/${product.id}`}
                                                            className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all group-hover:gap-3"
                                                            style={{ color: themeColor }}
                                                        >
                                                            Explore <ChevronRight size={14} />
                                                        </Link>
                                                        */}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </section>
                            );
                        })}
                </div>

            </div>
        </div>
    );
}