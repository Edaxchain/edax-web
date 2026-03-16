import {
    Globe,
    Zap,
    HeartPulse,
    GraduationCap,
    Cpu,
    Activity,
    Box,
} from "lucide-react";
import React from "react";

export interface Category {
    id: string;
    nameKey: string;
    icon: React.ReactNode;
    color: string;
}

export interface Product {
    id: number;
    category: string;
    titleKey: string;
    descKey: string;
    img: string;
    icon: React.ReactNode;
    color?: string;
    href?: string;
}

export const categories: Category[] = [
    { id: "all", nameKey: "allproducts", icon: null, color: "#ffffff" },
    {
        id: "city",
        nameKey: "smart_city.title",
        icon: <Globe size={18} />,
        color: "#A855F7",
    },
    {
        id: "energy",
        nameKey: "smart_energy.title",
        icon: <Zap size={18} />,
        color: "#14F195",
    },
    {
        id: "health",
        nameKey: "smart_health.title",
        icon: <HeartPulse size={18} />,
        color: "#3B82F6",
    },
    {
        id: "education",
        nameKey: "smart_education.title",
        icon: <GraduationCap size={18} />,
        color: "#F97316",
    },
];

export const allProducts: Product[] = [
    {
        id: 1,
        category: "city",
        titleKey: "items.innovation.title",
        descKey: "items.innovation.desc",
        img: "/product/Innovation.png",
        icon: <Cpu />,
        color: "#A855F7",
        href: "/pages/products",
    },

    {
        id: 2,
        category: "city",
        titleKey: "items.metaverse.title",
        descKey: "items.metaverse.desc",
        img: "/product/Land.png",
        icon: <Globe />,
        color: "#A855F7",
        href: "/pages/products",
    },
    {
        id: 3,
        category: "energy",
        titleKey: "items.ev_charging.title",
        descKey: "items.ev_charging.desc",
        img: "/product/EV.png",
        icon: <Zap />,
        color: "#14F195",
        href: "/pages/products",
    },
    {
        id: 4,
        category: "energy",
        titleKey: "items.energy_blockchain.title",
        descKey: "items.energy_blockchain.desc",
        img: "/product/EnergyBC.png",
        icon: <Activity />,
        color: "#14F195",
        href: "/pages/products",
    },
    {
        id: 5,
        category: "energy",
        titleKey: "items.sandbox.title",
        descKey: "items.sandbox.desc",
        img: "/product/Sandbox.png",
        icon: <Box />,
        color: "#14F195",
        href: "/pages/products",
    },
    {
        id: 6,
        category: "health",
        titleKey: "items.healthcare.title",
        descKey: "items.healthcare.desc",
        img: "/product/Healthcare.png",
        icon: <HeartPulse />,
        color: "#3B82F6",
        href: "/pages/products",
    },
    {
        id: 7,
        category: "education",
        titleKey: "items.ai_education.title",
        descKey: "items.ai_education.desc",
        img: "/product/Sed.png",
        icon: <GraduationCap />,
        color: "#F97316",
        href: "/pages/products",
    },
];
