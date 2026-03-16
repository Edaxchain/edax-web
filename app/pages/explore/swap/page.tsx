'use client'

import { useState } from 'react'
import { ArrowDownUp, Settings, Info, ChevronDown } from 'lucide-react'

const SwapPage = () => {
    const [fromAmount, setFromAmount] = useState('')
    const [toAmount, setToAmount] = useState('')

    return (
        <div className="min-h-screen bg-background text-text-main pt-32 pb-20 px-6">
            <div className="max-w-[480px] mx-auto">
                
                {/*  Swap Card  */}
                <div className="bg-background border border-border rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden">
                    
                    {/* Header: Title & Settings */}
                    <div className="flex justify-between items-center mb-6 px-2">
                        <h1 className="text-xl font-bold uppercase tracking-tight">Swap</h1>
                        <button className="p-2 hover:bg-border/30 rounded-xl transition-all text-text-sub">
                            <Settings size={20} />
                        </button>
                    </div>

                    {/* Input: From */}
                    <div className="bg-background/40 border border-border p-5 rounded-3xl mb-1 group focus-within:border-primary-button/50 transition-all">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-[10px] font-bold text-text-sub uppercase tracking-widest">You Pay</label>
                            <span className="text-[10px] font-bold text-text-sub">Balance: 1,240.50</span>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <input 
                                type="number" 
                                value={fromAmount}
                                onChange={(e) => setFromAmount(e.target.value)}
                                placeholder="0.00" 
                                className="bg-transparent text-3xl font-black outline-none w-full placeholder:opacity-20" 
                            />
                            <button className="bg-primary-button hover:bg-primary-button/60 px-4 py-2 rounded-2xl flex items-center gap-2 transition-all shrink-0">
                                <span className="font-bold text-sm">EDAX</span>
                                <ChevronDown size={16} className="text-text-sub" />
                            </button>
                        </div>
                    </div>

                    {/* Swap Icon Button */}
                    <div className="flex justify-center -my-4 relative z-10">
                        <button className="bg-background border-2 border-border/10 text-primary/40 p-3 rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-lg group">
                            <ArrowDownUp size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                        </button>
                    </div>

                    {/* To */}
                    <div className="bg-background/40 border border-border p-5 rounded-3xl mt-1 mb-6 focus-within:border-border/50 transition-all">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-[10px] font-bold text-text-sub uppercase tracking-widest">You Receive</label>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <input 
                                type="number" 
                                value={toAmount}
                                placeholder="0.00" 
                                className="bg-transparent text-3xl font-black outline-none w-full placeholder:opacity-20" 
                                disabled
                            />
                            <button className="bg-primary-button hover:bg-primary-button/60 px-4 py-2 rounded-2xl flex items-center gap-2 transition-all shrink-0">
                                <span className="font-bold text-sm">
                                Select Token
                                </span>
                                <ChevronDown size={16} className="text-text-sub" />
                            </button>
                        </div>
                    </div>

                    {/* Transaction Details */}
                    <div className="px-2 space-y-3 mb-8">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-text-sub font-medium flex items-center gap-1">
                                Exchange Rate <Info size={12} />
                            </span>
                            <span className="font-bold">1 EDAX ≈ 0.45 USDC</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-text-sub font-medium">Slippage Tolerance</span>
                            <span className="font-bold text-text-main text-[10px]">0.5%</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-5 bg-primary-button text-text-main font-black uppercase tracking-[0.2em] rounded-[1.5rem] hover:shadow-[0_0_30px_rgba(20,241,149,0.3)] transition-all active:scale-[0.98]">
                        Confirm Swap
                    </button>
                </div>

                {/* Footer Tip */}
                <p className="text-center mt-8 text-[10px] text-text-sub font-bold uppercase tracking-[0.2em] opacity-50">
                    EDAX V1 Protocol • Secured by Blockchain
                </p>
            </div>
        </div>
    )
}

export default SwapPage