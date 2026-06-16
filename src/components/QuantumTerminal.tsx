export function QuantumTerminal() {
  return (
    <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-6 md:gap-8">
      {/* Section Header */}
      <div className="mb-2">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-on-surface mb-2 tracking-tight">Technical Analysis</h2>
        <p className="font-sans text-lg text-on-surface-variant">Real-time macro indicators and AI-driven predictive modeling.</p>
      </div>

      {/* AI Predictor Module (Hero/Bento Main) */}
      <div className="glass-panel bg-white/95 rounded-xl p-6 md:p-8 flex flex-col justify-between min-h-[320px] shadow-sm border border-outline-variant/30">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-1 bg-surface-container text-on-surface font-mono text-[10px] uppercase font-medium px-2 py-1 rounded-full mb-3">
              <span className="material-symbols-outlined text-[14px] text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              AI Predictor
            </span>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-on-surface">XAU/USD <br className="hidden md:block" />Directional <br className="hidden md:block" />Conviction</h3>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">4H Timeframe</p>
            <p className="font-heading text-5xl md:text-6xl font-bold text-primary-fixed-dim mt-1">87.4%</p>
            <p className="font-mono text-[11px] text-primary-fixed-dim uppercase font-bold tracking-widest mt-1">Strong Bullish</p>
          </div>
        </div>

        {/* Conceptual Chart Area */}
        <div className="relative w-full h-48 md:h-64 bg-[#f3f4f5] rounded-lg overflow-hidden border border-outline-variant/30 flex items-end">
          <div className="absolute inset-0 bg-gradient-to-t from-[#B8860B]/10 to-transparent"></div>
          {/* SVG Chart Path */}
          <svg className="w-full h-full absolute bottom-0" preserveAspectRatio="none" viewBox="0 0 100 50">
            <path d="M0,50 L0,40 C10,35 20,45 30,30 C40,15 50,25 60,10 C70,-5 80,15 90,5 C95,0 100,5 100,5 L100,50 Z" fill="rgba(184, 134, 11, 0.1)"></path>
            <path d="M0,40 C10,35 20,45 30,30 C40,15 50,25 60,10 C70,-5 80,15 90,5 C95,0 100,5" fill="none" stroke="#B8860B" strokeWidth="0.5" vectorEffect="non-scaling-stroke"></path>
          </svg>
          
          {/* Annotations */}
          <div className="absolute left-[30%] bottom-[40%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-2 h-2 bg-surface border border-[#B8860B] rounded-full z-10 shadow-sm"></div>
            <div className="h-16 w-px bg-outline-variant/50 absolute top-2"></div>
            <span className="bg-surface-container text-on-surface font-mono text-[10px] px-1.5 py-0.5 rounded shadow-sm mt-2 absolute top-2 whitespace-nowrap">Liquidity Grab</span>
          </div>
          
          <div className="absolute left-[60%] bottom-[80%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-2 h-2 bg-[#B8860B] rounded-full z-10 shadow-sm shadow-[#B8860B]/50"></div>
            <div className="h-full w-px border-l border-dashed border-[#B8860B]/50 absolute top-2 bottom-0"></div>
            <span className="bg-surface text-[#B8860B] border border-[#B8860B]/30 font-mono text-[10px] px-1.5 py-0.5 rounded shadow-sm mb-2 absolute bottom-2 whitespace-nowrap font-bold">Target 2350</span>
          </div>
        </div>
      </div>

      {/* Volatility Index / Sentiment Module */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Volatility Card */}
        <div className="glass-panel bg-white/95 rounded-xl p-6 md:p-8 flex flex-col justify-center shadow-sm border border-outline-variant/30">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h3 className="font-sans text-lg text-on-surface font-medium">Aureus Volatility Index (AVI)</h3>
            <span className="material-symbols-outlined text-on-surface-variant text-[28px]">ssid_chart</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-on-surface">14.2</span>
            <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">Low</span>
          </div>
          {/* Mini Progress Bar */}
          <div className="w-full bg-surface-container h-2 rounded-full mt-6 overflow-hidden flex">
            <div className="bg-primary h-full w-[25%] rounded-full"></div>
            <div className="bg-transparent h-full flex-grow"></div>
          </div>
        </div>

        {/* Sentiment Card */}
        <div className="rounded-xl p-6 md:p-8 flex flex-col justify-center bg-[#1e1f23] text-white border-none shadow-xl">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h3 className="font-sans text-lg text-[#e1e3e4] font-medium">Global Macro Sentiment</h3>
            <span className="material-symbols-outlined text-[#e1e3e4] text-[24px]">public</span>
          </div>
          <div className="flex items-baseline gap-3 mb-1">
            <span className="font-heading text-5xl font-bold text-[#f7bd48]">+42</span>
            <span className="font-mono text-[11px] text-[#e1e3e4] uppercase tracking-wider font-bold">Risk-On</span>
          </div>
          <p className="font-sans text-xs text-[#e1e3e4] mt-5 leading-relaxed border-t border-white/10 pt-4">
            Algorithmic analysis of top 50 financial news outlets indicates shifting tone towards monetary easing.
          </p>
        </div>
      </div>

      {/* Institutional Order Flow (Data Table) */}
      <div className="glass-panel bg-white/95 rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-on-surface">Institutional Order Flow</h3>
          <button className="text-[#986d00] hover:bg-[#986d00]/5 px-4 py-2 rounded font-mono text-[11px] uppercase tracking-wider font-bold transition-colors border border-[#986d00]/30 shadow-sm">
            View Full Log
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-outline-variant/50 text-on-surface-variant font-mono text-[11px] uppercase tracking-wider">
                <th className="pb-4 font-bold px-2">Time (UTC)</th>
                <th className="pb-4 font-bold px-2 text-center">Asset</th>
                <th className="pb-4 font-bold px-2 text-center">Size (USD)</th>
                <th className="pb-4 font-bold px-2 text-right">Type</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm text-on-surface">
              <tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                <td className="py-5 px-2 text-on-surface-variant text-xs">14:23:05</td>
                <td className="py-5 px-2 font-bold text-center">XAU/USD</td>
                <td className="py-5 px-2 text-center">45.2M</td>
                <td className="py-5 px-2 text-right text-primary-fixed-dim font-bold">BUY WALL</td>
              </tr>
              <tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                <td className="py-5 px-2 text-on-surface-variant text-xs">14:18:12</td>
                <td className="py-5 px-2 font-bold text-center">BTC/USD</td>
                <td className="py-5 px-2 text-center">12.8M</td>
                <td className="py-5 px-2 text-right text-on-surface-variant font-bold">SELL</td>
              </tr>
              <tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                <td className="py-5 px-2 text-on-surface-variant text-xs">14:05:55</td>
                <td className="py-5 px-2 font-bold text-center">ETH/USD</td>
                <td className="py-5 px-2 text-center">8.5M</td>
                <td className="py-5 px-2 text-right text-primary-fixed-dim font-bold">BUY</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-5 px-2 text-on-surface-variant text-xs">13:42:10</td>
                <td className="py-5 px-2 font-bold text-center">XAG/USD</td>
                <td className="py-5 px-2 text-center">22.1M</td>
                <td className="py-5 px-2 text-right text-on-surface-variant font-bold">SELL WALL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
