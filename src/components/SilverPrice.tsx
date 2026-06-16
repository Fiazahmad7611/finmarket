export function SilverPrice() {
  return (
    <div className="w-full">
      <div className="w-full bg-surface-container-high border-y border-outline-variant/30 py-2 mb-8 overflow-hidden relative">
        <div className="whitespace-nowrap animate-[marquee_25s_linear_infinite] font-mono text-on-surface-variant flex items-center gap-8">
          <span>XAU/USD: $2,345.10 <span className="text-[#4ade80]">▲ +0.5%</span></span>
          <span>XAG/USD: $28.45 <span className="text-[#4ade80]">▲ +1.1%</span></span>
          <span>BTC/USD: $64,210.00 <span className="text-[#f87171]">▼ -0.2%</span></span>
          <span>ETH/USD: $3,450.20 <span className="text-[#4ade80]">▲ +1.8%</span></span>
          <span>PLAT/USD: $980.50 <span className="text-[#4ade80]">▲ +0.3%</span></span>
        </div>
      </div>

      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 bg-surface-bright border border-outline-variant/50 rounded text-[12px] font-bold text-on-surface-variant tracking-widest">SPOT MARKET</span>
              <span className="px-2 py-1 bg-green-900/30 border border-green-500/50 rounded text-[12px] font-bold text-[#4ade80] tracking-widest flex items-center gap-1 bullish-glow">
                <span className="w-2 h-2 bg-[#4ade80] rounded-full"></span> LIVE
              </span>
            </div>
            <h1 className="font-heading text-[32px] md:text-[48px] text-on-surface mb-1 silver-gradient-text" style={{ background: "linear-gradient(to right, #e3e2e7, #b7b5b4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Silver (XAG/USD)
            </h1>
            <p className="text-[18px] text-on-surface-variant">Institutional streaming rates. Quotes delayed by 500ms.</p>
          </div>
          <div className="text-left md:text-right">
            <div className="font-heading text-[32px] md:text-[48px] text-surface-tint">$28.45</div>
            <div className="text-[18px] text-[#4ade80] flex items-center md:justify-end gap-1">
              <span className="material-symbols-outlined">trending_up</span>
              +0.31 (+1.1%) 24H
            </div>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-panel p-6 rounded relative overflow-hidden">
          <div className="font-bold text-[12px] text-on-surface-variant uppercase tracking-widest mb-2">Price per Ounce</div>
          <div className="font-heading text-2xl text-on-surface">$28.45</div>
          <div className="font-mono text-[#4ade80] mt-1">+1.10%</div>
        </div>
        <div className="glass-panel p-6 rounded relative overflow-hidden">
          <div className="font-bold text-[12px] text-on-surface-variant uppercase tracking-widest mb-2">Price per Gram (24K)</div>
          <div className="font-heading text-2xl text-on-surface">$0.91</div>
          <div className="font-mono text-[#4ade80] mt-1">+1.10%</div>
        </div>
        <div className="glass-panel p-6 rounded relative overflow-hidden">
          <div className="font-bold text-[12px] text-on-surface-variant uppercase tracking-widest mb-2">Price per Tola</div>
          <div className="font-heading text-2xl text-on-surface">$10.61</div>
          <div className="font-mono text-[#4ade80] mt-1">+1.10%</div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8 glass-panel rounded flex flex-col">
          <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low/50">
            <div className="flex items-center gap-4">
              <span className="font-bold text-on-surface">XAG/USD Chart</span>
              <div className="hidden sm:flex gap-1">
                <button className="px-3 py-1 text-xs font-mono text-on-surface-variant hover:bg-surface-variant rounded">1H</button>
                <button className="px-3 py-1 text-xs font-mono text-on-surface-variant hover:bg-surface-variant rounded">4H</button>
                <button className="px-3 py-1 text-xs font-mono bg-surface-tint/20 text-surface-tint border border-surface-tint/30 rounded">1D</button>
                <button className="px-3 py-1 text-xs font-mono text-on-surface-variant hover:bg-surface-variant rounded">1W</button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-green-900/20 border border-green-500/30 rounded font-bold text-[12px] text-[#4ade80] tracking-widest flex items-center gap-1">
                AI TREND: BULLISH
              </span>
            </div>
          </div>
          <div className="flex-1 p-6 relative min-h-[400px] flex items-end justify-between" style={{
            backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}>
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
              <path d="M0,300 Q150,350 300,280 T600,200 T800,100 L1000,50" fill="none" stroke="#a1a1aa" strokeWidth="2"></path>
            </svg>
            <div className="absolute right-2 top-4 bottom-8 flex flex-col justify-between text-right font-mono text-[10px] text-on-surface-variant">
              <span>29.00</span>
              <span>28.75</span>
              <span>28.50</span>
              <span>28.25</span>
              <span>28.00</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded">
            <div className="flex items-center gap-2 mb-4 text-surface-tint">
              <h3 className="font-heading text-lg">AI Market Summary</h3>
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-on-surface-variant">AI Confidence Score</span>
                <span className="font-heading text-[24px] text-surface-tint">88%</span>
              </div>
              <div className="w-full bg-surface-bright h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-surface-tint to-tertiary-fixed h-full w-[88%] shadow-[0_0_15px_rgba(233,196,0,0.3)]"></div>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Our neural network indicates strong upward momentum for Silver over the next 48 hours, driven by industrial demand recovery and mild USD weakness. Resistance expected at $28.80.
            </p>
          </div>

          <div className="glass-panel p-6 rounded border-t border-surface-tint/30">
            <h3 className="font-heading text-lg text-on-surface mb-4">Quick Trade</h3>
            <div className="bg-surface-bright p-3 rounded border-b border-surface-tint/50 mb-4 focus-within:border-surface-tint hover:shadow-[0_0_15px_rgba(255,215,0,0.15)] transition-all">
              <label className="block font-bold text-[12px] text-on-surface-variant mb-1">Amount (Ounces)</label>
              <input className="w-full bg-transparent border-none text-on-surface font-mono p-0 focus:ring-0 outline-none" type="number" defaultValue="100" />
            </div>
            <div className="flex justify-between items-center mb-6 font-mono">
              <span className="text-on-surface-variant">Est. Total:</span>
              <span className="text-on-surface">$2,845.00</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-green-600 hover:bg-green-500 text-white py-3 rounded font-bold text-[12px] tracking-widest transition-colors outline-none cursor-pointer">BUY</button>
              <button className="bg-red-600 hover:bg-red-500 text-white py-3 rounded font-bold text-[12px] tracking-widest transition-colors outline-none cursor-pointer">SELL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
