'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { ConnectWallet } from '@/app/contexts/ConnectWallet';
import { MegaMenuTemplate } from './MegaMenu';
import { allProducts } from '@/data/Products';
import { Nav_content } from '@/data/NavContent';

const Navbar2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

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
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add("dark");
        } else if (savedTheme === "light") {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'products', label: 'Products', data: allProducts, category: 'Innovations', href: '/pages/products' },
        { id: 'wallet', label: 'Wallet', data: Nav_content.wallet, category: 'Services', href: '/' },
        { id: 'explorer', label: 'Explorer', href: '/' },
        { id: 'docs', label: 'Docs/Developers', data: Nav_content.docs, category: 'Resources', href: '/' },
        { id: 'roadmap', label: 'Roadmap', href: '/#roadmap' },
        { id: 'blog', label: 'Blog/News', data: Nav_content.blog, category: 'Blog/News', href: '/pages/updates' },
        { id: 'about', label: 'About us', data: Nav_content.about, category: 'Company', href: '/pages/about' },
        { id: 'support', label: 'Support', data: Nav_content.support, category: 'Help', href: '/pages/support' },
        { id: 'legal', label: 'Legal', data: Nav_content.legal, category: 'Policy', href: '/' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] border-nav-border border-b bg-nav-bg px-6 h-20 flex items-center transition-all duration-300">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between h-full">

                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-text-main hover:opacity-80 transition-opacity">
                        EDAX
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div
                    className="hidden items-center gap-4 xl:gap-6 lg:flex h-full"
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    {navLinks.map((link, index) => (
                        <div
                            key={link.id}
                            className="relative flex items-center h-full"
                            onMouseEnter={() => link.data ? setOpenMenu(link.id) : setOpenMenu(null)}
                        >
                            {link.href ? (
                                <Link href={link.href} className={`text-[13px] font-medium transition-colors ${openMenu === link.id ? 'text-text-sub' : 'text-text-main hover:bg-nav-border/20 hover:opacity-70'}`}>
                                    {link.label}
                                </Link>
                            ) : (
                                <span className={`text-[13px] font-medium cursor-pointer transition-colors ${openMenu === link.id ? 'text-text-sub' : 'text-text-main hover:text-primary-button'}`}>
                                    {link.label}
                                </span>
                            )}

                            {/* MegaMenu Dropdown */}
                            {link.data && openMenu === link.id && (
                                <div className={`absolute top-full z-50 ${index > navLinks.length - 4 ? 'right-0' : 'left-0'}`}>
                                    <div className="-mt-1 pt-1">
                                        <MegaMenuTemplate
                                            items={link.data}
                                            categoryName={link.category || ""}
                                            onMenuHover={() => setOpenMenu(link.id)}
                                            onMenuLeave={() => setOpenMenu(null)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>




                <div className="flex items-center gap-3">
                    {/* Theme */}
                    <button
                        className="p-2 rounded-lg bg-card border border-border text-foreground cursor-pointer hover:bg-nav-border/20 transition-colors"
                        onClick={handleToggle}
                        aria-label="Toggle theme"
                    >
                        <Moon className="hidden dark:block" size={20} />
                        <Sun className="block dark:hidden" size={20} />
                    </button>

                    {/* Wallet */}
                    <div className="hidden sm:flex items-center">
                        <ConnectWallet />
                    </div>



                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-text-main"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Side Drawer (Mobile) */}
            <div className={`fixed inset-0 z-[110] bg-nav-bg transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className="p-6 flex flex-col h-full overflow-y-auto">
                    <div className="flex items-center justify-between mb-10">
                        <span className="text-2xl font-black text-primary-button">EDAX</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-text-main">
                            <X size={32} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6 text-center pb-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href || '#'}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold text-text-main"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="pt-6 flex justify-center">
                            <div className="inline-block transform scale-140">
                                <ConnectWallet />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

export default Navbar2