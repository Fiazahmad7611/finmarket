import { useState } from "react";

export function Calculators() {
  const [activeTab, setActiveTab] = useState("crypto");

  return (
    <div className="w-full font-sans text-on-surface">
      <header className="mb-12 text-center md:text-left">
        <h1 className="font-heading text-[32px] md:text-[48px] font-bold tracking-tight text-on-surface mb-4">Investment Calculators</h1>
        <p className="text-[18px] text-on-surface-variant max-w-2xl">Precision tools engineered for institutional-grade foresight. Model scenarios across digital and precious assets.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-8">
          <div className="flex border-b border-outline-variant/30 gap-8 overflow-x-auto">
            <button 
              onClick={() => setActiveTab("crypto")}
              className={`pb-4 font-heading text-[24px] font-bold whitespace-nowrap transition-colors ${activeTab === 'crypto' ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Crypto Profit
            </button>
            <button 
              onClick={() => setActiveTab("gold")}
              className={`pb-4 font-heading text-[24px] font-bold whitespace-nowrap transition-colors ${activeTab === 'gold' ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Gold Investment
            </button>
            <button 
              onClick={() => setActiveTab("silver")}
              className={`pb-4 font-heading text-[24px] font-bold whitespace-nowrap transition-colors ${activeTab === 'silver' ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Silver Investment
            </button>
          </div>

          <div className="glass-panel rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-fixed-dim/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider block">Investment Amount ($)</label>
                  <div className="relative border-b border-outline-variant/50 focus-within:border-primary-fixed-dim focus-within:shadow-[0_1px_0_0_#ffd700] transition-colors bg-surface-container-lowest/50 rounded-t">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-mono">$</span>
                    <input className="w-full bg-transparent border-none text-on-surface font-mono text-[18px] py-3 pl-8 pr-4 outline-none text-right focus:ring-0" type="text" defaultValue="10,000.00" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider block">Asset Selection</label>
                  <div className="relative border-b border-outline-variant/50 focus-within:border-primary-fixed-dim focus-within:shadow-[0_1px_0_0_#ffd700] transition-colors bg-surface-container-lowest/50 rounded-t">
                    <select className="w-full bg-transparent border-none text-on-surface font-sans py-3 px-4 outline-none focus:ring-0 appearance-none">
                      <option className="bg-surface-container text-on-surface" value="btc">Bitcoin (BTC)</option>
                      <option className="bg-surface-container text-on-surface" value="eth">Ethereum (ETH)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider block">Entry Price</label>
                    <div className="relative border-b border-outline-variant/50 focus-within:border-primary-fixed-dim focus-within:shadow-[0_1px_0_0_#ffd700] transition-colors bg-surface-container-lowest/50 rounded-t">
                      <input className="w-full bg-transparent border-none text-on-surface font-mono py-3 px-4 outline-none focus:ring-0 text-right" type="text" defaultValue="42,500.00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider block">Target Price</label>
                    <div className="relative border-b border-outline-variant/50 focus-within:border-primary-fixed-dim focus-within:shadow-[0_1px_0_0_#ffd700] transition-colors bg-surface-container-lowest/50 rounded-t">
                      <input className="w-full bg-transparent border-none text-primary-fixed-dim font-mono py-3 px-4 outline-none focus:ring-0 text-right" type="text" defaultValue="65,000.00" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-primary-fixed-dim to-primary-container text-on-primary font-bold py-3 rounded hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all flex items-center justify-center gap-2">
                    Calculate
                  </button>
                  <button className="p-3 border border-outline-variant/50 text-on-surface-variant rounded hover:text-primary-fixed-dim hover:border-primary-fixed-dim transition-colors" title="Reset">
                    Reset
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-lowest/80 rounded-lg p-6 border border-outline-variant/20 flex flex-col justify-between">
                <div>
                  <h3 className="text-[12px] font-bold text-on-surface-variant uppercase mb-6 flex items-center gap-2">
                    Projected Outcome
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-on-surface-variant text-[14px] mb-1">Total Value</div>
                      <div className="font-heading text-4xl text-on-surface font-semibold tracking-tight">$15,294.11</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
                      <div>
                        <div className="text-on-surface-variant text-[14px] mb-1">Net Profit</div>
                        <div className="font-mono text-[#4ade80]">+$5,294.11</div>
                      </div>
                      <div>
                        <div className="text-on-surface-variant text-[14px] mb-1">ROI</div>
                        <div className="font-mono text-[#4ade80]">+52.94%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8 flex gap-3">
                  <button className="flex-1 border border-primary-fixed-dim/50 text-primary-fixed-dim text-sm py-2 rounded hover:bg-primary-fixed-dim/10 transition-colors flex items-center justify-center gap-2">
                    Save
                  </button>
                  <button className="flex-1 border border-outline-variant/50 text-on-surface-variant text-sm py-2 rounded hover:text-on-surface hover:border-outline-variant transition-colors flex items-center justify-center gap-2">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-xl p-6">
            <h3 className="font-heading text-[18px] font-semibold text-on-surface mb-4">Live Context</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-fixed-dim"></div>
                  <span className="text-[14px] text-on-surface-variant">BTC/USD</span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[14px] text-on-surface">$42,501.20</div>
                  <div className="font-mono text-[12px] text-[#4ade80]">+1.24%</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
                  <span className="text-[14px] text-on-surface-variant">ETH/USD</span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[14px] text-on-surface">$2,240.50</div>
                  <div className="font-mono text-[12px] text-[#f87171]">-0.45%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden relative group cursor-pointer border border-outline-variant/20">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
            <img alt="Abstract digital trading visualization" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6pSsEdNEGVrnXHSLyf-ytrCuR4RTL1t6JMi0eNbujYCd9skYhlDqwqaqQ_iaOl4ZVv6--Ue_E5NLZUjeA94Dt0h0zZY3YiM4if7C_iYsCPd5sXqkpP9CL0WDj1IES0-IMqR-Cu1F6hi9ElCUrhI9oWTXoGrIUu1RcRASxPE1EjKfen3_0ZaBCWjH-ZLIPF2CY241cEJJH45PlxPqia4gNDp-XW8IR7057oVHIvebhjc4OwhZtosH0-88lkoyf0_AAIGE77woEmWSr" />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <span className="font-bold text-[10px] text-primary-fixed-dim uppercase tracking-wider mb-2 block">AI Insight</span>
              <h4 className="font-heading text-[18px] text-on-surface leading-tight">Predictive Modeling for Q4 Crypto Trends</h4>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
