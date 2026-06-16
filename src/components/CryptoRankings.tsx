import { useState } from "react";
import type { CryptoData } from "../types";

export function CryptoRankings({ data, isLoading }: { data: CryptoData[], isLoading: boolean }) {
  if (isLoading) {
    return <div className="text-on-surface-variant p-8 text-center animate-pulse">Loading institutional data...</div>;
  }

  return (
    <div className="w-full">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-heading text-[32px] md:text-[48px] text-primary-fixed-dim mb-2">Cryptocurrency Rankings</h1>
          <p className="text-[18px] text-on-surface-variant max-w-2xl">
            Institutional-grade real-time data for the top digital assets by market capitalization.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-bold text-[12px] text-on-surface-variant uppercase">Global Market Cap</p>
            <p className="font-mono text-primary-fixed-dim text-xl">$2.45T <span className="text-[#4ade80] text-sm ml-1">+1.2%</span></p>
          </div>
        </div>
      </header>

      <div className="w-full bg-surface-container-high border-y border-outline-variant/20 py-2 mb-8 overflow-hidden relative glass-panel rounded-lg">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap px-4 font-mono text-sm items-center">
          <span className="mx-4 text-on-surface">BTC: <span className="text-primary-fixed-dim">$64,230.00</span> <span className="text-[#4ade80]">+2.4%</span></span>
          <span className="mx-4 text-on-surface">ETH: <span className="text-primary-fixed-dim">$3,450.21</span> <span className="text-[#f87171]">-0.8%</span></span>
          <span className="mx-4 text-on-surface">SOL: <span className="text-primary-fixed-dim">$145.80</span> <span className="text-[#4ade80]">+5.1%</span></span>
          <span className="mx-4 text-on-surface">BNB: <span className="text-primary-fixed-dim">$590.12</span> <span className="text-[#4ade80]">+1.2%</span></span>
          <span className="mx-4 text-on-surface">XRP: <span className="text-primary-fixed-dim">$0.58</span> <span className="text-[#f87171]">-0.2%</span></span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-96">
          <input 
            className="block w-full pl-4 pr-3 py-2 bg-surface-container border-b border-outline-variant bg-transparent text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-colors font-sans" 
            placeholder="Search by coin name or symbol..." 
            type="text" 
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-fixed-dim/30 bg-primary-fixed-dim/10 text-primary-fixed-dim text-sm font-medium whitespace-nowrap hover:bg-primary-fixed-dim/20 transition-colors">
            All Categories
          </button>
          <button className="px-4 py-1.5 rounded-full border border-outline-variant/50 text-on-surface-variant text-sm whitespace-nowrap hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim transition-colors">
            DeFi
          </button>
          <button className="px-4 py-1.5 rounded-full border border-outline-variant/50 text-on-surface-variant text-sm whitespace-nowrap hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim transition-colors">
            Layer 1
          </button>
          <button className="px-4 py-1.5 rounded-full border border-outline-variant/50 text-on-surface-variant text-sm whitespace-nowrap hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim transition-colors">
            AI
          </button>
        </div>
      </div>

      <div className="glass-panel rounded-lg overflow-hidden relative shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-low/50">
                <th className="py-4 px-6 font-bold text-[12px] text-on-surface-variant uppercase tracking-wider cursor-pointer hover:text-primary-fixed-dim transition-colors">Rank</th>
                <th className="py-4 px-6 font-bold text-[12px] text-on-surface-variant uppercase tracking-wider cursor-pointer hover:text-primary-fixed-dim transition-colors">Asset</th>
                <th className="py-4 px-6 font-bold text-[12px] text-on-surface-variant uppercase tracking-wider text-right cursor-pointer hover:text-primary-fixed-dim transition-colors">Price</th>
                <th className="py-4 px-6 font-bold text-[12px] text-on-surface-variant uppercase tracking-wider text-right cursor-pointer hover:text-primary-fixed-dim transition-colors">24h Change</th>
                <th className="py-4 px-6 font-bold text-[12px] text-on-surface-variant uppercase tracking-wider text-right cursor-pointer hover:text-primary-fixed-dim transition-colors hidden sm:table-cell">Market Cap</th>
                <th className="py-4 px-6 font-bold text-[12px] text-on-surface-variant uppercase tracking-wider text-right cursor-pointer hover:text-primary-fixed-dim transition-colors hidden md:table-cell">Volume (24h)</th>
              </tr>
            </thead>
            <tbody className="font-sans divide-y divide-outline-variant/10">
              {data.map((coin, i) => (
                <tr key={coin.id} className="group hover:bg-surface-container-high/40 transition-colors cursor-pointer">
                  <td className="py-4 px-6 text-on-surface-variant font-mono">{i + 1}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center text-primary-fixed-dim border border-primary-fixed-dim/30 font-bold">
                        {coin.symbol[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-on-surface group-hover:text-primary-fixed-dim transition-colors">{coin.name}</p>
                        <p className="text-xs text-on-surface-variant font-mono uppercase">{coin.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-on-surface">
                    ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded bg-opacity-10 font-mono text-xs border ${
                      coin.price_change_percentage_24h >= 0 
                        ? "bg-green-500 text-[#4ade80] border-green-500/20 bullish-glow" 
                        : "bg-red-500 text-[#f87171] border-red-500/20 bearish-glow"
                    }`}>
                      {coin.price_change_percentage_24h > 0 ? "+" : ""}{coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-on-surface-variant hidden sm:table-cell">
                    ${coin.market_cap.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-on-surface-variant hidden md:table-cell">
                    ${coin.total_volume.toLocaleString()}
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
