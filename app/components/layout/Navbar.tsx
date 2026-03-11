"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ConnectWallet } from "@/app/contexts/ConnectWallet";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggle = () => {
        const root = window.document.documentElement;
        if (root.classList.contains("dark")) {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add("dark");
        } else if (savedTheme === "light") {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-nav-border border-b bg-nav-bg px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <div className="flex items-center shrink-0">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tighter text-foreground"
                    >
                        EDAX
                    </Link>
                </div>

                {/* Navigation Menus */}
                <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-foreground hover:opacity-70"
                    >
                        Home
                    </Link>

                    <div className="group relative cursor-pointer">
                        <span className="flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70">
                            Products
                        </span>
                        {/* Dropdown */}
                        <div className="invisible absolute top-full left-0 pt-2 z-50 group-hover:visible">
                            <div className="min-w-[150px] border border-nav-border bg-nav-bg p-2 shadow-xl">
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Product 1
                                </h2>
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Product 2
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="group relative cursor-pointer">
                        <span className="flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70">
                            Wallet
                        </span>
                        {/* Dropdown */}
                        <div className="invisible absolute top-full left-0 pt-2 z-50 group-hover:visible">
                            <div className="min-w-[150px] border border-nav-border bg-nav-bg p-2 shadow-xl">
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Connect Wallet
                                </h2>
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Wallet Guide
                                </h2>
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Supported Wallets
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="#"
                        className="text-sm font-medium text-foreground hover:opacity-70"
                    >
                        Explorer
                    </Link>

                    <div className="group relative cursor-pointer">
                        <span className="flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70">
                            Docs / Developers
                        </span>
                        {/* Dropdown */}
                        <div className="invisible absolute top-full left-0 pt-2 z-50 group-hover:visible">
                            <div className="min-w-[150px] border border-nav-border bg-nav-bg p-2 shadow-xl">
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    API Reference
                                </h2>
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    SDK
                                </h2>
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Tutorials
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="group relative cursor-pointer">
                        <Link href="/pages/about">
                            <span className="flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70">
                                About us
                            </span>
                        </Link>
                        {/* Dropdown */}
                        <div className="invisible absolute top-full left-0 pt-2 z-50 group-hover:visible">
                            <div className="min-w-[150px] border border-nav-border bg-nav-bg p-2 shadow-xl">
                                <Link href="/pages/about">
                                    <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                        Mission
                                    </h2>
                                </Link>
                                <Link href="/pages/about">
                                    <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                        Vision
                                    </h2>
                                </Link>
                                <Link href="/pages/about#team">
                                    <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                        Our Team
                                    </h2>
                                </Link>
                                <Link href="/#partners">
                                    <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                        Partners
                                    </h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/#roadmap"
                        className="text-sm font-medium text-foreground hover:opacity-70"
                    >
                        Roadmap
                    </Link>

                    <Link
                        href="#"
                        className="text-sm font-medium text-foreground hover:opacity-70"
                    >
                        Blog / News
                    </Link>

                    <div className="group relative cursor-pointer">
                        <Link href="/pages/support">
                            <span className="flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70">
                                Support
                            </span>
                        </Link>
                        {/* Dropdown */}
                        <div className="invisible absolute top-full left-0 pt-2 z-50 group-hover:visible">
                            <div className="min-w-[150px] overflow-hidden border border-nav-border bg-nav-bg p-2 shadow-xl">
                                <Link href="/pages/support#faq">
                                    <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                        FAQ
                                    </h2>
                                </Link>
                                <Link href="/pages/support#ticket">
                                    <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                        Ticket
                                    </h2>
                                </Link>
                                <Link href="/pages/support#contact">
                                    <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                        Contact us
                                    </h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="group relative cursor-pointer">
                        <span className="flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70">
                            Legal
                        </span>
                        {/* Dropdown */}
                        <div className="invisible absolute top-full left-0 pt-2 z-50 group-hover:visible">
                            <div className="min-w-[150px] border border-nav-border bg-nav-bg p-2 shadow-xl">
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Term
                                </h2>
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Privacy
                                </h2>
                                <h2 className="px-4 py-2 text-sm hover:bg-nav-border/20">
                                    Cookie Policy
                                </h2>
                            </div>
                        </div>
                    </div>

                    <button
                        className="p-2 rounded-lg bg-card border border-border text-foreground hover:bg-nav-border/20 transition-colors"
                        onClick={handleToggle}
                        aria-label="Toggle theme"
                    >
                        <Moon className="hidden dark:block" size={20} />
                        <Sun className="block dark:hidden" size={20} />
                    </button>
                </div>

                {/* Connect Wallet Button */}
                <div className="flex items-center gap-3">
                    <ConnectWallet />
                    {/* Hamburger Mobile */}
                    <button
                        className="lg:hidden p-2 text-foreground hover:bg-nav-border/50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>

                {/* Side Drawer */}
                <div
                    className={`fixed inset-0 z-[100] bg-nav-bg transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
                >
                    <div className="p-6 flex flex-col h-full">
                        {/* Menu Header */}
                        <div className="flex items-center justify-between mb-10">
                            <span className="text-2xl font-black text-primary">
                                EDAX
                            </span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Mobile Nav Links */}
                        <nav className="flex flex-col gap-6 text-center overflow-y-auto">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold"
                            >
                                Home
                            </Link>
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold"
                            >
                                Products
                            </Link>
                            <Link
                                href="/pages/support"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold"
                            >
                                Support
                            </Link>
                            <Link
                                href="/pages/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold"
                            >
                                About us
                            </Link>
                            <Link
                                href="/#roadmap"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold"
                            >
                                Roadmap
                            </Link>

                            <ConnectWallet />
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
