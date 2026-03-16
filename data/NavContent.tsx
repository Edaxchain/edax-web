import { 
    Wallet,
    Lightbulb,
    BriefcaseBusiness,
    Info,
    ScrollText,
    Scale,
    Rss,
    Bitcoin,

} from "lucide-react";

export const Nav_content = {
    wallet: [
        { id: 'connect', title: 'Portfolio', desc: 'Securely link your digital wallet to start using EDAX.', icon: <Wallet/>, img: '', href: '/pages/profile' },
        { id: 'guide', title: 'Wallet Guide', desc: 'Step-by-step instructions for beginners and pro users.', icon: <Lightbulb/>, img: '', href: '/pages/wallet?tab=guide' },
        { id: 'support', title: 'Supported Wallet', desc: 'Check the list of compatible wallets and platforms.', icon: <Wallet/>, img: '/nav/SupportW.png', href: '/pages/wallet?tab=supported' },
    ],

    about: [
        { id: 'missionvision', title: 'Mission/Vision', desc: 'Our commitment to building a decentralized future for everyone.', icon:<BriefcaseBusiness/>, img: '', href: '/pages/about#missionvision' },
        { id: 'team', title: 'Our team', desc: 'Meet the visionaries and engineers behind the ecosystem.', icon:<BriefcaseBusiness/>, img: '', href: '/pages/about#team' },
        { id: 'partners', title: 'Partners', desc: 'Driving innovation with leaders in Education, Energy, and AgTech.', icon:<BriefcaseBusiness/>, img: '', href: '/pages/about#partners' },
    ],

    support: [
        { id: 'faq', title: 'FAQ', desc: 'Quick answers to the most common questions about our platform.', icon:<Info/>, img: '', href: '/pages/support#faq' },
        { id: 'ticket', title: 'Submit ticket', desc: 'Need help? Open a support request and our team will assist you.', icon:<Info/>, img: '', href: '/pages/support#ticket' },
        { id: 'contact', title: 'Contact us', desc: 'Reach out for business inquiries or direct support.', icon:<Info/>, img: '', href: '/pages/support#contact' },
    ],

    docs: [
        { id: 'api', title: 'API References', desc: 'Technical documentation for seamless API integration.', icon:<ScrollText/>, img: '', href: '/' },
        { id: 'sdk', title: 'SDK', desc: 'Powerful tools and libraries to build on top of our network.', icon:<ScrollText/>, img: '', href: '/' },
        { id: 'tutorials', title: 'Tutorials', desc: 'Guides and resources to help you master our developer tools.', icon:<ScrollText/>, img: '', href: '/' },
    ],

    legal: [
        { id: 'term', title: 'Terms of Service', desc: 'The legal agreement governing your use of our services.', icon:<Scale/>, img: '', href: '/' },
        { id: 'privacy', title: 'Privacy Policy', desc: 'How we protect your data and respect your privacy.', icon:<Scale/>, img: '', href: '/' },
        { id: 'cookies', title: 'Cookies Policy', desc: 'Information about how we use cookies to improve your experience.', icon:<Scale/>, img: '', href: '/' },
    ],

    blog: [
        { id: 'news', title: 'News', desc: 'Official updates, announcements, and latest milestones.', icon:<Rss/>, img: '', href: '/pages/updates?tab=news' },
        { id: 'blog', title: 'Blog', desc: 'Deep dives, insights, and stories from the EDAX team.', icon:<Rss/>, img: '', href: '/pages/updates?tab=blog' },
        
    ],

    explore: [
        { id: 'swap', title: 'Swap', desc: 'Instant token exchange with optimized liquidity.', icon:<Bitcoin/>, img: '', href: '/pages/explore/swap' },
        { id: 'dashboard', title: 'Dashboard', desc: 'Visualize the market. Track assets and network growth through data-driven insights.', icon:<Bitcoin/>, img: '', href: '/pages/explore' },
        
    ],
};