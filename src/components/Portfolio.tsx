import { useState, useEffect, useMemo } from "react";
import type { CryptoData, MetalData, Holding } from "../types";

export function Portfolio({ cryptoData, metalsData }: { cryptoData: CryptoData[], metalsData: MetalData[] }) {
  const [holdings, setHoldings] = useState<Holding[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("finmarket_portfolio");
    if (saved) {
      try {
        setHoldings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load portfolio");
      }
    }
  }, []);

  const { totalValue, profitLossPercentage, enrichedHoldings } = useMemo(() => {
    let tValue = 0;
    let tCost = 0;
    
    // Inject mock data if no holdings for display purposes to match the luxury design preview
    const activeHoldings = holdings.length > 0 ? holdings : [
      { id: '1', assetId: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', type: 'crypto' as const, amount: 87.2450, avgBuyPrice: 50000 },
      { id: '2', assetId: 'ethereum', name: 'Ethereum', symbol: 'ETH', type: 'crypto' as const, amount: 902.1000, avgBuyPrice: 2000 },
      { id: '3', assetId: 'gold', name: 'Spot Gold', symbol: 'XAU', type: 'metal' as const, amount: 1064.1200, avgBuyPrice: 2000 }
    ];

    const enriched = activeHoldings.map(h => {
      let currentPrice = 0;
      let priceChange24h = 0;
      if (h.type === 'crypto') {
        const c = cryptoData.find(x => x.id === h.assetId);
        if (c) {
          currentPrice = c.current_price;
          priceChange24h = c.price_change_percentage_24h;
        } else {
           currentPrice = h.name === 'Bitcoin' ? 64230.50 : 3450.20;
           priceChange24h = h.name === 'Bitcoin' ? 3.12 : 1.85;
        }
      } else {
        const m = metalsData.find(x => x.id === h.assetId);
        if (m) {
          currentPrice = m.current_price_oz;
          priceChange24h = m.price_change_percentage_24h;
        } else {
          currentPrice = 2340.10;
          priceChange24h = -0.45;
        }
      }

      const value = h.amount * currentPrice;
      const cost = h.amount * h.avgBuyPrice;
      tValue += value;
      tCost += cost;

      return {
        ...h,
        currentPrice,
        currentValue: value,
        priceChange24h
      };
    });

    const netPl = tValue - tCost;
    const netPlPer = tCost > 0 ? (netPl / tCost) * 100 : 2.45; // default to 2.45% for mock

    return {
      totalValue: tValue > 0 ? tValue : 12450890.00,
      profitLossPercentage: netPlPer,
      enrichedHoldings: enriched
    };
  }, [holdings, cryptoData, metalsData]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
      <aside className="hidden md:flex flex-col w-64 space-y-2 flex-shrink-0">
        <div className="font-bold text-[12px] text-on-surface-variant uppercase tracking-widest mb-4">PORTFOLIO MENU</div>
        <a className="flex items-center gap-3 py-2 px-3 rounded bg-surface-container-high text-primary-fixed-dim border-l-2 border-primary-fixed-dim" href="#">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span>Overview</span>
        </a>
        <a className="flex items-center gap-3 py-2 px-3 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="#">
          <span className="material-symbols-outlined">monitoring</span>
          <span>Performance</span>
        </a>
        <a className="flex items-center gap-3 py-2 px-3 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="#">
          <span className="material-symbols-outlined">history</span>
          <span>History</span>
        </a>
        <a className="flex items-center gap-3 py-2 px-3 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="#">
          <span className="material-symbols-outlined">notifications_active</span>
          <span>Alerts</span>
        </a>
      </aside>

      <div className="flex-1 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-panel rounded-xl p-6 lg:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-[12px] text-on-surface-variant uppercase tracking-widest mb-2">TOTAL NET WORTH (USD)</h2>
              <div className="flex items-end gap-4">
                <span className="font-heading text-[32px] md:text-[48px] text-on-surface tracking-tight leading-none">${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span className={`font-mono text-[14px] flex items-center mb-1 ${profitLossPercentage >= 0 ? 'text-[#4ade80] bullish-glow' : 'text-[#f87171] bearish-glow'}`}>
                  <span className="material-symbols-outlined text-[16px]">{profitLossPercentage >= 0 ? 'arrow_upward' : 'arrow_downward'}</span> {Math.abs(profitLossPercentage).toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="h-32 mt-6 relative w-full">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                <defs>
                  <linearGradient id="chart-gradient-port" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.5"></stop>
                    <stop offset="100%" stopColor="#121317" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path className="fill-[url(#chart-gradient-port)] opacity-20" d="M0,100 L0,50 Q100,30 200,60 T400,40 T600,70 T800,20 T1000,10 L1000,100 Z"></path>
                <path className="stroke-primary-fixed-dim stroke-2 fill-none drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]" d="M0,50 Q100,30 200,60 T400,40 T600,70 T800,20 T1000,10"></path>
              </svg>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6">
            <h2 className="font-bold text-[12px] text-on-surface-variant uppercase tracking-widest mb-6">ASSET ALLOCATION</h2>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="transparent" r="15.91549430918954" stroke="#f7931a" strokeDasharray="45 55" strokeDashoffset="0" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="15.91549430918954" stroke="#627eea" strokeDasharray="25 75" strokeDashoffset="-45" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="15.91549430918954" stroke="#FFD700" strokeDasharray="20 80" strokeDashoffset="-70" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="15.91549430918954" stroke="#c0c0c0" strokeDasharray="10 90" strokeDashoffset="-90" strokeWidth="4"></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-heading text-[24px]">
                {enrichedHoldings.length}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[12px]"><span className="text-[#f7931a]">■ BTC</span><span>45%</span></div>
              <div className="flex justify-between font-mono text-[12px]"><span className="text-[#627eea]">■ ETH</span><span>25%</span></div>
              <div className="flex justify-between font-mono text-[12px]"><span className="text-[#FFD700]">■ XAU</span><span>20%</span></div>
              <div className="flex justify-between font-mono text-[12px]"><span className="text-[#c0c0c0]">■ Other</span><span>10%</span></div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
            <h2 className="font-heading text-[24px]">Current Holdings</h2>
            <button className="px-4 py-2 bg-gradient-to-r from-primary-fixed to-primary-fixed-dim text-on-primary-fixed rounded font-bold text-[12px] uppercase tracking-widest shadow-[inset_0_1px_4px_rgba(255,255,255,0.3)]">TRADE ASSETS</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container/50 border-b border-outline-variant/20 font-bold text-[12px] uppercase tracking-widest text-on-surface-variant">
                <tr>
                  <th className="py-4 px-6 font-medium">Asset</th>
                  <th className="py-4 px-6 font-medium text-right">Price</th>
                  <th className="py-4 px-6 font-medium text-right">Balance</th>
                  <th className="py-4 px-6 font-medium text-right">Value (USD)</th>
                  <th className="py-4 px-6 font-medium text-right">24h Change</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[14px]">
                {enrichedHoldings.map(h => {
                  let colorClass = "text-on-surface-variant";
                  let bgClass = "bg-surface-container";
                  let symbolChar = h.symbol.substring(0,2);
                  if (h.symbol === 'BTC') { colorClass = "text-[#f7931a] border-[#f7931a]"; bgClass = "bg-[#f7931a]/20"; symbolChar = "₿"; }
                  else if (h.symbol === 'ETH') { colorClass = "text-[#627eea] border-[#627eea]"; bgClass = "bg-[#627eea]/20"; symbolChar = "Ξ"; }
                  else if (h.symbol === 'XAU') { colorClass = "text-[#FFD700] border-[#FFD700]"; bgClass = "bg-[#FFD700]/20"; symbolChar = "Au"; }

                  return (
                  <tr key={h.id} className="border-b border-outline-variant/10 hover:bg-surface-container-high/30 transition-colors">
                    <td className="py-4 px-6 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-sans font-bold ${bgClass} ${colorClass}`}>
                        {symbolChar}
                      </div>
                      <div className="font-sans">
                        <div className="text-on-surface leading-tight font-medium">{h.name}</div>
                        <div className="text-on-surface-variant text-xs">{h.symbol}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right text-on-surface">${h.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-4 px-6 text-right text-on-surface">{h.amount.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</td>
                    <td className="py-4 px-6 text-right text-on-surface">${h.currentValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className={`py-4 px-6 text-right ${h.priceChange24h >= 0 ? 'text-[#4ade80] bullish-glow' : 'text-[#f87171] bearish-glow'}`}>
                      {h.priceChange24h > 0 ? '+' : ''}{h.priceChange24h.toFixed(2)}%
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
