
import { 
    Globe, Zap, HeartPulse, GraduationCap, 
    Cpu, Activity, Box 
} from 'lucide-react';
import React from 'react';

export interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
}

export interface Product {
    id: number;
    category: string;
    title: string;
    desc: string;
    img: string;
    icon: React.ReactNode;
    color?: string; 
    href?: string;
}

export const categories: Category[] = [
    { id: "all", name: 'All Products', icon: null, color: '#ffffff' },
    { id: 'city', name: 'Smart City', icon: <Globe size={18} />, color: '#A855F7' },
    { id: 'energy', name: 'Smart Energy', icon: <Zap size={18} />, color: '#14F195' },
    { id: 'health', name: 'Smart Health', icon: <HeartPulse size={18} />, color: '#3B82F6' },
    { id: 'education', name: 'Smart Education', icon: <GraduationCap size={18} />, color: '#F97316' },
];


export const allProducts: Product[] = [
    { 
        id: 1, 
        category: 'city', 
        title: 'Technology EDAX Chain Innovation', 
        desc: 'Core infrastructure for decentralized solutions.', 
        img: '/product/Innovation.png', 
        icon: <Cpu />,
        color: '#A855F7',
        href: '/pages/products'
    },

    { 
        id: 2, 
        category: 'city', 
        title: 'Metaverse Land Energy', 
        desc: 'Sustainable energy for virtual real estate.', 
        img: '/product/Land.png', 
        icon: <Globe />,
        color: '#A855F7',
        href: '/pages/products'
        
    },
    { 
        id: 3, 
        category: 'energy', 
        title: 'EV Solar Charging', 
        desc: 'Smart stations for electric vehicle charging.', 
        img: '/product/EV.png', 
        icon: <Zap />,
        color: '#14F195',
        href: '/pages/products'
    },
    { 
        id: 4, 
        category: 'energy', 
        title: 'EDAX Energy Blockchain', 
        desc: 'Transparent energy distribution network.', 
        img: '/product/EnergyBC.png', 
        icon: <Activity />,
        color: '#14F195',
        href: '/pages/products'
    },
    { 
        id: 5, 
        category: 'energy', 
        title: 'SandBox Energy Blockchain', 
        desc: 'Innovation testing environment for energy.', 
        img: '/product/Sandbox.png', 
        icon: <Box />,
        color: '#14F195',
        href: '/pages/products'
    },
    { 
        id: 6, 
        category: 'health', 
        title: 'Smart Health Care', 
        desc: 'AI-driven diagnostic and secured health data.', 
        img: '/product/Healthcare.png', 
        icon: <HeartPulse />,
        color: '#3B82F6',
        href: '/pages/products'
    },
    { 
        id: 7, 
        category: 'education', 
        title: 'Ai Education', 
        desc: 'Personalized AI-powered learning experiences.', 
        img: '/product/Sed.png', 
        icon: <GraduationCap />,
        color: '#F97316',
        href: '/pages/products'
    },
    

];