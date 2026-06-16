export function GoldPrice() {
  return (
    <div className="w-full">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary-fixed-dim bg-primary-fixed-dim/10 px-2 py-0.5 rounded text-xs font-bold tracking-wider">LIVE MARKET DATA</span>
          </div>
          <h1 className="font-heading text-[48px] text-on-surface mb-1">XAU/USD <span className="text-on-surface-variant text-2xl font-normal">Spot Gold</span></h1>
          <p className="text-on-surface-variant font-sans">Real-time institutional pricing and AI market analysis.</p>
        </div>
        <div className="flex gap-2">
          <button className="glass-panel px-4 py-2 rounded text-sm text-on-surface hover:border-primary-fixed-dim/50 transition-colors flex items-center gap-2">
            Set Alert
          </button>
          <button className="glass-panel px-4 py-2 rounded text-sm text-on-surface hover:border-primary-fixed-dim/50 transition-colors flex items-center gap-2">
            Watchlist
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        <div className="md:col-span-4 glass-panel rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-fixed-dim/5 rounded-full blur-3xl"></div>
          <div>
            <h3 className="font-bold text-[12px] text-on-surface-variant mb-4 uppercase tracking-wider">PRICE PER OUNCE (USD)</h3>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-heading text-[32px] md:text-[48px] text-on-surface font-mono">2,323.64</span>
              <span className="font-mono text-[#10b981] bullish-glow text-lg flex items-center">
                +15.87 (0.68%)
              </span>
            </div>
            <p className="text-xs text-on-surface-variant font-mono">Last updated: 10:52:13 UTC</p>
          </div>
          <div className="mt-6 flex justify-between items-end border-t border-outline-variant/20 pt-4">
            <div>
              <p className="text-xs text-on-surface-variant mb-1">24H High</p>
              <p className="font-mono text-sm text-on-surface">2,336.10</p>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant mb-1">24H Low</p>
              <p className="font-mono text-sm text-on-surface">2,298.45</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="glass-panel rounded-xl p-6 flex flex-col justify-center">
            <h3 className="font-bold text-[12px] text-on-surface-variant mb-2 uppercase tracking-wider">PRICE PER GRAM (24K)</h3>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-[24px] text-on-surface font-mono">$74.70</span>
              <span className="font-mono text-[#10b981] text-sm">+0.51</span>
            </div>
            <div className="mt-4 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#10b981] h-full w-[68%]"></div>
            </div>
            <p className="text-xs text-on-surface-variant mt-2 text-right">68% Buy Volume</p>
          </div>
          <div className="glass-panel rounded-xl p-6 flex flex-col justify-center">
            <h3 className="font-bold text-[12px] text-on-surface-variant mb-2 uppercase tracking-wider">PRICE PER TOLA (24K)</h3>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-[24px] text-on-surface font-mono">$871.35</span>
              <span className="font-mono text-[#10b981] text-sm">+5.95</span>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 bg-surface-container rounded text-xs text-on-surface-variant font-mono">22K: $798.73</span>
              <span className="px-2 py-1 bg-surface-container rounded text-xs text-on-surface-variant font-mono">18K: $653.51</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-8 lg:col-span-9 glass-panel rounded-xl flex flex-col overflow-hidden min-h-[400px]">
          <div className="h-12 border-b border-outline-variant/20 flex items-center px-4 justify-between bg-surface-container-lowest/50">
            <div className="flex items-center gap-1">
              <button className="px-2 py-1 rounded text-xs font-mono text-on-surface-variant hover:bg-surface-container hover:text-on-surface">1M</button>
              <button className="px-2 py-1 rounded text-xs font-mono text-on-surface-variant hover:bg-surface-container hover:text-on-surface">5M</button>
              <button className="px-2 py-1 rounded text-xs font-mono bg-surface-container text-primary-fixed-dim border border-primary-fixed-dim/30">1H</button>
              <button className="px-2 py-1 rounded text-xs font-mono text-on-surface-variant hover:bg-surface-container hover:text-on-surface">4H</button>
              <button className="px-2 py-1 rounded text-xs font-mono text-on-surface-variant hover:bg-surface-container hover:text-on-surface">1D</button>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#10b981]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span> AI TREND: BULLISH
              </span>
            </div>
          </div>
          <div className="flex-grow relative p-4 flex flex-col justify-end bg-[#0d0e12]">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
              <path d="M0,100 L1000,100 M0,200 L1000,200 M0,300 L1000,300" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
              <path d="M0,350 Q200,300 400,250 T800,150 L1000,50" fill="none" opacity="0.6" stroke="#FFD700" strokeWidth="1.5"></path>
              <path d="M0,380 Q250,340 450,280 T850,200 L1000,100" fill="none" opacity="0.6" stroke="#10b981" strokeWidth="1.5"></path>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="glass-panel rounded-xl p-5 flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/20 pb-3">
              <h3 className="font-heading text-base text-on-surface">AI Market Summary</h3>
            </div>
            <div className="overflow-y-auto pr-2 text-sm text-on-surface-variant font-sans space-y-4">
              <p>Gold (XAU/USD) is currently exhibiting strong bullish momentum, breaking past the key resistance level of $2,300.</p>
              <p>Institutional accumulation models indicate a <span className="text-primary-fixed-dim font-medium">high probability</span> of continued upward movement over the next 48 hours.</p>
              <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/30 mt-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-[10px] uppercase tracking-wider">AI CONFIDENCE SCORE</span>
                  <span className="font-mono text-primary-fixed-dim">87%</span>
                </div>
                <div className="w-full bg-background h-1 rounded-full overflow-hidden">
                  <div className="bg-primary-fixed-dim h-full w-[87%] shadow-[0_0_8px_#FFD700]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-5">
            <h3 className="font-bold text-xs uppercase tracking-wider text-on-surface-variant mb-3">MARKET SENTIMENT</h3>
            <div className="flex justify-between font-mono text-sm mb-2">
              <span className="text-[#f43f5e]">SELL 24%</span>
              <span className="text-[#10b981]">BUY 76%</span>
            </div>
            <div className="w-full h-2 rounded-full overflow-hidden flex">
              <div className="bg-[#f43f5e] h-full w-[24%]"></div>
              <div className="bg-[#10b981] h-full w-[76%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-surface-container p-2 rounded">
                <span className="block text-on-surface-variant mb-1">Support</span>
                <span className="font-mono text-on-surface">2,310.50</span>
              </div>
              <div className="bg-surface-container p-2 rounded">
                <span className="block text-on-surface-variant mb-1">Resistance</span>
                <span className="font-mono text-on-surface">2,345.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
