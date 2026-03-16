"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { allProducts, categories } from "@/data/Products";
import { useTranslations } from "next-intl";

export default function ProductsPage() {
    const t = useTranslations("ProductPage");
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="min-h-screen bg-background text-text-main pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/*  Header */}
                <header className="text-center mb-20">
                    <h1 className="text-5xl md:text-5xl font-black mb-10 uppercase tracking-tighter">
                        {t.rich("title", {
                            primary: (chunks) => (
                                <span className="text-primary">{chunks}</span>
                            ),
                        })}
                    </h1>

                    {/* Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => {
                            const isActive = activeTab === cat.id;
                            const buttonClass = `flex items-center gap-2 px-6 py-3 rounded-2xl border transition-all cursor-pointer duration-300 ${
                                isActive
                                    ? "bg-primary-button text-black border-border scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    : "bg-secondary-button/5 border-border/10 text-text-sub hover:bg-secondary-button/50 hover:border-border/30"
                            }`;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={buttonClass}
                                >
                                    {cat.icon}
                                    <span
                                        className={`text-sm font-bold uppercase ${isActive ? "!text-black" : ""}`}
                                    >
                                        {t(cat.nameKey)}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </header>

                <div className="space-y-24">
                    {categories
                        .filter((cat) => cat.id !== "all")
                        .map((category) => {
                            const isVisible =
                                activeTab === "all" ||
                                activeTab === category.id;
                            if (!isVisible) return null;

                            return (
                                <section
                                    key={category.id}
                                    className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                                >
                                    <div className="flex items-center gap-4 mb-10">
                                        <div
                                            className="h-8 w-1.5 rounded-full"
                                            style={{
                                                backgroundColor: category.color,
                                            }}
                                        />
                                        <h2 className="text-3xl font-black uppercase tracking-tight">
                                            {t(category.nameKey)}
                                        </h2>
                                    </div>

                                    {/* Color */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {allProducts
                                            .filter(
                                                (p) =>
                                                    p.category === category.id,
                                            )
                                            .map((product) => {
                                                const themeColor =
                                                    category.color;

                                                return (
                                                    <div
                                                        key={product.id}
                                                        className="group relative bg-background border border-border rounded-[2.5rem] p-8 transition-all duration-500 overflow-hidden"
                                                        style={{
                                                            boxShadow: `0 0 0px ${themeColor}00`,
                                                        }}
                                                        onMouseEnter={(e) =>
                                                            (e.currentTarget.style.boxShadow = `0 0 30px ${themeColor}15`)
                                                        }
                                                        onMouseLeave={(e) =>
                                                            (e.currentTarget.style.boxShadow = `0 0 0px ${themeColor}00`)
                                                        }
                                                    >
                                                        <div
                                                            className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                                                            style={{
                                                                backgroundColor:
                                                                    themeColor,
                                                            }}
                                                        />

                                                        <div
                                                            className={`relative w-full rounded-[1.5rem] mb-6 overflow-hidden transition-all duration-500 bg-background/5 border border-nav-border/50 ${
                                                                product.img
                                                                    ? "h-60"
                                                                    : "w-16 h-16 p-4"
                                                            }`}
                                                        >
                                                            {product.img ? (
                                                                <img
                                                                    src={
                                                                        product.img
                                                                    }
                                                                    alt={
                                                                        product.titleKey
                                                                    }
                                                                    className="w-full h-full object-cover origin-center scale-[1.20] transition-transform duration-700 group-hover:scale-[1.50]"
                                                                />
                                                            ) : (
                                                                <div
                                                                    className="w-full h-full flex items-center justify-center"
                                                                    style={{
                                                                        color: themeColor,
                                                                    }}
                                                                >
                                                                    {
                                                                        product.icon
                                                                    }
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="relative z-10">
                                                            <h3 className="text-xl font-bold mb-3">
                                                                {product.titleKey}
                                                            </h3>
                                                            <p className="text-text-sub text-sm leading-relaxed mb-6 line-clamp-2">
                                                                {product.descKey}
                                                            </p>

                                                            {/* Product website */}
                                                            <Link
                                                                href={`/pages/products`}
                                                                className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all group-hover:gap-3"
                                                                style={{
                                                                    color: themeColor,
                                                                }}
                                                            >
                                                                {t("explore")}{" "}
                                                                <ChevronRight
                                                                    size={14}
                                                                />
                                                            </Link>
                                                        </div>
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
