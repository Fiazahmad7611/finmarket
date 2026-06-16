import { useState, useEffect } from "react";
import { SparklesIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function AIInsights({ cryptoData, metalsData }: { cryptoData: any[], metalsData: any[] }) {
  const [insights, setInsights] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cryptoData.length > 0 && metalsData.length > 0 && !insights) {
      generateInsights();
    }
  }, [cryptoData, metalsData]);

  async function generateInsights() {
    setIsLoading(true);
    setError(null);
    try {
      const btc = cryptoData.find(c => c.symbol.toLowerCase() === 'btc');
      const eth = cryptoData.find(c => c.symbol.toLowerCase() === 'eth');
      const gold = metalsData.find(m => m.id === 'gold');
      
      const contextStr = `BTC: $${btc?.current_price} (${btc?.price_change_percentage_24h}%), ETH: $${eth?.current_price} (${eth?.price_change_percentage_24h}%), Gold: $${gold?.current_price_oz}/oz (${gold?.price_change_percentage_24h}%). Based on these numbers, give a 3 bullet summary of the market direction.`;

      const res = await fetch("/api/insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marketContext: contextStr })
      });
      
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch insights");
      }
      
      setInsights(data.insights);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex items-center gap-2 font-bold text-[12px] text-on-surface-variant mb-6 uppercase tracking-widest">
          <span className="hover:text-primary-fixed transition-colors cursor-pointer">Home</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="hover:text-primary-fixed transition-colors cursor-pointer">News</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary-fixed-dim">Macro Analysis</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-primary-fixed-dim/10 border border-primary-fixed-dim/30 px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-fixed-dim shadow-[0_0_8px_rgba(233,196,0,0.8)]"></span>
          <span className="font-bold text-[12px] text-primary-fixed-dim uppercase">Macro Analysis</span>
        </div>
        <h1 className="font-heading text-[32px] md:text-[48px] text-on-background mb-6 max-w-4xl leading-tight">
          Quantum AI Models Predict Institutional Capital Flight into Tier-1 Crypto Assets
        </h1>
        <div className="flex items-center gap-6 text-[16px] text-on-surface-variant pb-6 border-b border-primary-fixed-dim/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">person</span>
            <span>Aureus Intelligence Team</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Oct 24, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
        <img alt="Abstract visual of glowing golden cryptocurrency coins resting on sleek black digital surfaces" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLtnd6EJ450sSOsYT3qhVJ9qilwmF58ptrrNrcvZRauXVSyqqzkt1wrMAB-aDOygMdoRLdqNqYrcs4foik0B5v9Lyk-6uN0Hknz-oUuTfC0tm486mI00pI_7s_qZN8OW_IuF2xipAlxEqYuXHGBdqwjTPYshG1Z_zMSB8gb8M0gsk0stcfeg3TQDAVwUAe0KZowbJd6XQiWk-csj92vxAG-w3nX796UigV0ZQ6bkIhLWb60uIsMx8G4rZzA" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <p className="text-[18px] text-inverse-surface mb-8 leading-relaxed">
            Recent telemetry from Aureus AI's proprietary quantum modeling engines indicates a statistically significant divergence in capital allocation strategies among top-tier institutional funds. As traditional macroeconomic indicators signal sustained volatility, sophisticated algorithmic trading desks are aggressively rebalancing portfolios toward high-liquidity digital assets, treating them as structural hedges rather than speculative ventures.
          </p>

          <div className="glass-panel rounded-xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-outline-variant/30">
            <div>
              <div className="font-bold text-[12px] text-on-surface-variant uppercase mb-1">Aureus AI Sentiment Analysis</div>
              <div className="font-heading text-[24px] text-[#4ade80] flex items-center gap-2">
                <span className="material-symbols-outlined">trending_up</span> Strong Bullish
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="font-bold text-[12px] text-on-surface-variant uppercase mb-1">Confidence Score</div>
                <div className="font-mono text-primary-fixed-dim text-lg">94.2%</div>
              </div>
              <div>
                <div className="font-bold text-[12px] text-on-surface-variant uppercase mb-1">Target Assets</div>
                <div className="text-[16px] text-on-background font-medium">BTC, ETH, SOL</div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 mb-10 border border-outline-variant/30">
            <div className="flex items-center gap-2 mb-4">
              <SparklesIcon className="w-5 h-5 text-primary-fixed-dim" />
              <h3 className="font-heading text-[24px] text-on-surface">Live Gemini Market Assessment</h3>
            </div>
            
            <div className="text-[16px] text-on-surface-variant leading-relaxed min-h-[100px]">
              {isLoading ? (
                <div className="flex flex-col gap-3 animate-pulse pt-2">
                  <div className="h-4 bg-surface-container-high rounded w-full"></div>
                  <div className="h-4 bg-surface-container-high rounded w-5/6"></div>
                  <div className="h-4 bg-surface-container-high rounded w-4/6"></div>
                </div>
              ) : error ? (
                <div className="text-[#f87171]">
                  <p>{error}</p>
                  <button onClick={generateInsights} className="mt-4 text-primary-fixed-dim text-[14px]">Retry Analysis</button>
                </div>
              ) : (
                <div className="prose prose-sm dark:prose-invert prose-yellow max-w-none">
                  <ReactMarkdown>{insights || "Waiting for market data..."}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>

          <h2 className="font-heading text-[24px] text-on-background mt-10 mb-6">The Decoupling of Legacy Correlation</h2>
          <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">
            Historically, Tier-1 digital assets exhibited high beta correlations with risk-on tech equities. However, the latest machine learning models analyzing dark pool liquidity and OTC desk flows reveal a profound structural shift. Institutions are accumulating Bitcoin and Ethereum at unprecedented rates during traditional market drawdowns, suggesting a new paradigm of "digital gold" validation at the institutional level.
          </p>

          <blockquote className="border-l-2 border-primary-fixed-dim pl-6 py-2 my-10 relative">
            <span className="material-symbols-outlined absolute -left-4 -top-4 text-surface-container-highest text-4xl opacity-50">format_quote</span>
            <p className="font-heading text-[24px] md:text-[32px] text-on-surface italic leading-snug">
              "We are witnessing the quietest, most aggressive accumulation phase in the history of the asset class. The smart money isn't just arriving; it's building fortifications."
            </p>
          </blockquote>
        </article>

        <aside className="lg:col-span-4 space-y-8">
          <div className="glass-panel rounded-xl p-5">
            <h3 className="font-bold text-[12px] text-on-surface-variant uppercase mb-4 tracking-wider border-b border-outline-variant/20 pb-2">Live Indices</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-on-background">XAU/USD</span>
                <div className="text-right">
                  <span className="font-mono text-on-surface block text-sm">2,341.80</span>
                  <span className="font-mono text-[11px] text-[#4ade80]">+0.4%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-on-background">ETH/USD</span>
                <div className="text-right">
                  <span className="font-mono text-on-surface block text-sm">3,450.20</span>
                  <span className="font-mono text-[11px] text-[#4ade80]">+2.1%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-on-background">DXY</span>
                <div className="text-right">
                  <span className="font-mono text-on-surface block text-sm">104.20</span>
                  <span className="font-mono text-[11px] text-[#f87171]">-0.1%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden relative p-6 border border-primary-fixed-dim/30">
            <div className="absolute inset-0 bg-surface-container-highest opacity-80 backdrop-blur-md z-0"></div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-fixed-dim/10 rounded-full blur-2xl z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary-fixed-dim">mail</span>
                <h3 className="font-heading text-[24px] text-on-background text-lg">Terminal Briefing</h3>
              </div>
              <p className="text-[13px] text-on-surface-variant mb-4">Institutional-grade market analysis delivered to your inbox daily before market open.</p>
              <form className="space-y-3">
                <div className="relative">
                  <input className="w-full bg-surface-dim/50 border-b border-outline-variant text-on-background text-sm p-3 focus:outline-none focus:border-primary-fixed-dim focus:ring-0 placeholder:text-on-surface-variant/50 transition-colors" placeholder="Institutional Email Address" type="email" />
                </div>
                <button className="w-full bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container text-sm py-3 rounded font-semibold shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] active:scale-95 transition-all" type="button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
