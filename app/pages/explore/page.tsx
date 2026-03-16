import { ArrowUp, ArrowDown, Activity } from 'lucide-react';

async function getMarketData(api: string) {
    try {
        const res = await fetch(
            api,
            { next: { revalidate: 60 } }
        );
        if (!res.ok) throw new Error('Fetch failed');
        return res.json();
    } catch (error) {
        return [];
    }
}

const Sparkline = ({ data, change24h }: { data: number[], change24h: number }) => {
    if (!data || data.length === 0) return null;
    const points24h = data.slice(-24);
    const strokeColor = change24h > 0 ? '#22c55e' : '#ef4444';
    const min = Math.min(...points24h);
    const max = Math.max(...points24h);
    const range = max - min;
    const width = 100;
    const height = 40;
    const points = points24h.map((price, index) => {
        const x = (index / (points24h.length - 1)) * width;
        const y = range !== 0
            ? height - ((price - min) / range) * height
            : height / 2;
        return `${x},${y}`;
    }).join(' ');
    return (
        <div className="flex items-center justify-center">
            <svg width={width} height={height} className="overflow-visible">
                <polyline
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                />
            </svg>
        </div>
    );
};

export default async function DashboardPage() {
    const CoinGeckco = process.env.CoinGecko_API!
    const coins = await getMarketData(CoinGeckco)

    return (
        <div className="min-h-screen bg-background text-text-main pt-28 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* --- Header Section --- */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-primary-button mb-2">
                            <Activity size={20} className="animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em]">Live Market Pulse</span>
                        </div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter">
                            Market Dashboard
                        </h1>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-nav-bg border border-nav-border px-4 py-2 rounded-2xl flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                            <span className="text-xs font-medium opacity-70">System Operational</span>
                        </div>
                    </div>
                </header>

                {/* Table */}
                <div className="w-full overflow-x-auto bg-background border border-border/10 rounded-[2rem] overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border/10 text-text-sub text-[10px] uppercase tracking-[0.2em]">
                                <th className="px-8 py-6 font-bold">Coin</th>
                                <th className="px-6 py-6 font-bold text-right">Price (THB)</th>
                                <th className="px-6 py-6 font-bold text-right">% (24 hrs.)</th>
                                <th className="px-6 py-6 font-bold text-right hidden md:table-cell">Volumn (THB)</th>
                                <th className="px-6 py-6 font-bold text-center">Graph 24 hrs.</th>
                                <th className="px-8 py-6 font-bold text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin: any) => (
                                <tr key={coin.id} className="border-b border-border/10 hover:bg-foreground/10 transition-colors group">
                                    {/* Name & Icon */}
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-sm">
                                                    <span className="text-text-main mr-2">{coin.symbol.toUpperCase()}</span>
                                                    <span className="opacity-60 font-medium">{coin.name}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Price */}
                                    <td className="px-6 py-5 text-right font-bold text-sm">
                                        {coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                    </td>

                                    {/* 24h Change */}
                                    <td className={`px-6 py-5 font-bold text-sm ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
                                        }`}>
                                        <div className="flex items-center justify-end gap-1">
                                            {coin.price_change_percentage_24h > 0 ? (
                                                <ArrowUp size={16} />
                                            ) : (
                                                <ArrowDown size={16} />
                                            )}
                                            <span>
                                                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                                            </span>
                                        </div>
                                    </td>

                                    {/* Volume */}
                                    <td className="px-6 py-5 text-right font-medium text-text-sub text-xs hidden md:table-cell">
                                        {coin.total_volume.toLocaleString()}
                                    </td>


                                    <td className="px-6 py-5">
                                        <Sparkline
                                            data={coin.sparkline_in_7d.price}
                                            change24h={coin.price_change_percentage_24h}
                                        />
                                    </td>

                                    {/* Action Button */}
                                    <td className="px-8 py-5 text-right">
                                        <button className="px-6 py-2 rounded-xl border border-border text-text-main text-[10px] font-bold uppercase tracking-widest hover:bg-primary-button hover:text-text-main transition-all">
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}