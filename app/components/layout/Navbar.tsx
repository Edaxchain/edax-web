'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ConnectWallet } from '@/app/contexts/ConnectWallet';
import { MegaMenuTemplate } from './MegaMenu';
import { allProducts } from '@/data/Products';
import { Nav_content } from '@/data/NavContent';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);


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
        <nav className="fixed top-0 left-0 right-0 z-[100] border-nav-border border-b bg-nav-bg px-6 h-20 flex items-center">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between h-full">

                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
                        EDAX
                    </Link>
                </div>

                {/* Menu */}
                <div
                    className="hidden items-center gap-6 xl:gap-8 lg:flex h-full"
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    {navLinks.map((link, index) => (
                        <div
                            key={link.id}
                            className="relative flex items-center h-full"
                            onMouseEnter={() => link.data ? setOpenMenu(link.id) : setOpenMenu(null)}
                        >
                            {link.href ? (
                                <Link href={link.href} className="text-sm font-medium text-foreground hover:opacity-70 transition-opacity">
                                    {link.label}
                                </Link>
                            ) : (
                                <span className={`text-sm font-medium cursor-pointer transition-colors ${openMenu === link.id ? 'text-[#14F195]' : 'text-foreground hover:opacity-70'}`}>
                                    {link.label}
                                </span>
                            )}

                            {/* MegaMenu */}
                            {link.data && openMenu === link.id && (
                                <div className={`absolute top-full z-50 ${index > navLinks.length - 5 ? 'right-0' : 'left-0'
                                    }`}>

                                    <div className="-mt-2 pt-2 bg-transparent">
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

                {/* Connect wallet button */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <ConnectWallet />
                    </div>
                    <button
                        className="lg:hidden p-2 text-foreground hover:bg-nav-border/50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>

                {/* Side Drawer (Mobile) */}
                <div className={`fixed inset-0 z-[100] bg-nav-bg transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                    <div className="p-6 flex flex-col h-full overflow-hidden">
                        <div className="flex items-center justify-between mb-10">
                            <span className="text-2xl font-black text-[#14F195]">EDAX</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                                <X size={32} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 text-center overflow-y-auto pb-10">
                            <div className="flex flex-col gap-6 text-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        href={link.href || '#'}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-bold"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="relative flex justify-center w-full min-h-[250px] py-10">
                                <div className="inline-block transform scale-140">
                                    <ConnectWallet />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar