import { useState } from "react";
import { SecurityVerification } from "./components/SecurityVerification";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <SecurityVerification onVerify={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="antialiased min-h-screen flex flex-col bg-background text-on-background">
      {/* TopNavBar (Shared Component) */}
      <nav className="sticky top-0 w-full z-50 bg-surface-container bg-surface-container/80 backdrop-blur-md shadow-md h-16">
        <div className="flex items-center justify-between px-4 lg:px-10 h-full max-w-[1440px] mx-auto">
          <div className="font-heading text-xl md:text-2xl font-bold text-primary-fixed-dim flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            AI Market Rates
          </div>
          {/* Mobile Menu Toggle (Visible only on mobile) */}
          <button className="md:hidden text-primary-fixed-dim p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
          {/* Desktop Nav Links (Hidden on mobile) */}
          <div className="hidden md:flex gap-6 h-full items-center">
            {/* Home is Active */}
            <a className="font-sans text-sm md:text-base h-full flex items-center text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1 cursor-pointer active:scale-95 hover:text-primary-fixed-dim transition-colors duration-200" href="#">Home</a>
            <a className="font-sans text-sm md:text-base h-full flex items-center text-on-surface-variant cursor-pointer active:scale-95 hover:text-primary-fixed-dim transition-colors duration-200" href="#">Crypto</a>
            <a className="font-sans text-sm md:text-base h-full flex items-center text-on-surface-variant cursor-pointer active:scale-95 hover:text-primary-fixed-dim transition-colors duration-200" href="#">Gold</a>
            <a className="font-sans text-sm md:text-base h-full flex items-center text-on-surface-variant cursor-pointer active:scale-95 hover:text-primary-fixed-dim transition-colors duration-200" href="#">Silver</a>
            <a className="font-sans text-sm md:text-base h-full flex items-center text-on-surface-variant cursor-pointer active:scale-95 hover:text-primary-fixed-dim transition-colors duration-200" href="#">AI Insights</a>
            <a className="font-sans text-sm md:text-base h-full flex items-center text-on-surface-variant cursor-pointer active:scale-95 hover:text-primary-fixed-dim transition-colors duration-200" href="#">Calculators</a>
          </div>
          {/* Trailing Icons */}
          <div className="hidden md:flex items-center gap-4 text-primary-fixed-dim">
            <button className="cursor-pointer active:scale-95 hover:text-primary-fixed-dim transition-colors duration-200 p-2">
              <span className="material-symbols-outlined">dark_mode</span>
            </button>
            <button className="cursor-pointer active:scale-95 hover:text-primary-fixed-dim transition-colors duration-200 p-2">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col max-w-[1440px] mx-auto w-full">
        {/* Hero Section (Mobile Condensed) */}
        <section className="relative bg-surface-container-low border-b border-outline-variant pt-8 pb-12 px-4 lg:px-10 overflow-hidden flex-shrink-0">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img alt="Terminal Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGxB3Eh1zvV6hDeA-rpfZ-NGABm4vsi9UU3I4tAfIieDhikavbRGi-Jv-jrFfqBuvK1Ij43gpjoHWY71nnYdse67XLeLiO9kgEy2R-8UvZOnqRJLp5Y49kiTwwNs1iN2GS7OVW1u1mD3GWEBNO6BPoSfRdA5ZFNRCZEYzj9Gf7ciBMc38bj8VXhhYCmPFhmYThiJ30ejUjhuDsyLHVETOHtLtN35cvT0AivwSZqN4udBSPVVWB5v4cvaf0V1Zr9hFfvMWDcwG7wfE"/>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-secondary-container px-3 py-1 rounded-full w-fit">
              <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface">LIVE INTELLIGENCE</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-surface leading-tight tracking-tight">
              Real-time<br/>
              <span className="text-primary-fixed-dim">Market Data</span>
            </h1>
            
            <p className="font-sans text-base text-on-surface-variant max-w-sm">
              AI-driven insights for global commodities and crypto.
            </p>
          </div>
        </section>

        {/* Live Price Ticker */}
        <div className="bg-surface-container-highest border-b border-outline-variant py-3 overflow-hidden flex-shrink-0 ticker-container w-full">
          <div className="flex ticker-track w-[200%]">
            {/* First Set */}
            <div className="flex w-1/2 justify-around items-center px-4">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">BTC</span>
                <span className="font-mono text-sm font-medium text-on-surface tracking-wider">$64,230.50</span>
                <span className="font-mono text-sm font-medium text-[#4ade80] tracking-wider">+2.4%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">ETH</span>
                <span className="font-mono text-sm font-medium text-on-surface tracking-wider">$3,450.12</span>
                <span className="font-mono text-sm font-medium text-[#4ade80] tracking-wider">+1.8%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">XAU</span>
                <span className="font-mono text-sm font-medium text-on-surface tracking-wider">$2,340.80</span>
                <span className="font-mono text-sm font-medium text-[#f87171] tracking-wider">-0.5%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">XAG</span>
                <span className="font-mono text-sm font-medium text-on-surface tracking-wider">$28.45</span>
                <span className="font-mono text-sm font-medium text-[#4ade80] tracking-wider">+0.2%</span>
              </div>
            </div>
            {/* Duplicate Set for smooth loop */}
            <div className="flex w-1/2 justify-around items-center px-4">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">BTC</span>
                <span className="font-mono text-sm font-medium text-on-surface tracking-wider">$64,230.50</span>
                <span className="font-mono text-sm font-medium text-[#4ade80] tracking-wider">+2.4%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">ETH</span>
                <span className="font-mono text-sm font-medium text-on-surface tracking-wider">$3,450.12</span>
                <span className="font-mono text-sm font-medium text-[#4ade80] tracking-wider">+1.8%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">XAU</span>
                <span className="font-mono text-sm font-medium text-on-surface tracking-wider">$2,340.80</span>
                <span className="font-mono text-sm font-medium text-[#f87171] tracking-wider">-0.5%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">XAG</span>
                <span className="font-mono text-sm font-medium text-on-surface tracking-wider">$28.45</span>
                <span className="font-mono text-sm font-medium text-[#4ade80] tracking-wider">+0.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-4 lg:px-10 py-8 flex flex-col md:grid md:grid-cols-2 gap-6 flex-grow">
          {/* Market Sentiment Card */}
          <section className="bg-surface-container rounded-xl p-6 border border-outline-variant shadow-lg flex flex-col md:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed-dim">monitoring</span>
                Market Sentiment
              </h2>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary-fixed-dim bg-primary-container/10 px-2 py-1 rounded">BULLISH</span>
            </div>
            
            {/* Simplified Gauge */}
            <div className="relative w-full h-32 flex items-end justify-center mb-4 overflow-hidden mt-6">
              {/* Gauge Arc */}
              <div className="absolute bottom-0 w-64 h-32 rounded-t-full border-t-[16px] border-l-[16px] border-r-[16px] border-surface-container-high box-border"></div>
              {/* Color Stops (CSS Hack for gradients on arc) */}
              <div className="absolute bottom-0 w-64 h-32 rounded-t-full border-t-[16px] border-l-[16px] border-r-[16px] box-border" style={{ borderColor: "transparent", borderTopColor: "var(--color-primary-fixed-dim)", opacity: 0.5 }}></div>
              {/* Needle */}
              <div className="absolute bottom-0 w-1 h-24 bg-on-surface rounded-full gauge-needle z-10"></div>
              <div className="absolute bottom-[-6px] w-4 h-4 bg-primary-container rounded-full z-20 shadow-[0_0_10px_rgba(233,196,0,0.5)]"></div>
              {/* Labels */}
              <div className="absolute bottom-2 left-4 md:-left-2 lg:left-4 font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">FEAR</div>
              <div className="absolute bottom-2 right-4 md:-right-2 lg:right-4 font-sans text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">GREED</div>
            </div>
            
            <div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-auto">
              <div className="flex flex-col">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant">AI CONFIDENCE SCORE</span>
                <span className="font-mono text-lg font-medium text-on-surface tracking-wider mt-1">78.4 / 100</span>
              </div>
              <button className="p-2 bg-surface-container-high rounded-full border border-outline-variant text-on-surface hover:text-primary-fixed-dim transition-colors group">
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </section>

          {/* Terminal Briefing Newsletter */}
          <section className="bg-surface-container-high rounded-xl p-6 border border-outline-variant relative overflow-hidden flex flex-col md:col-span-1">
            {/* Abstract Accent Graphic */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-fixed-dim/10 rounded-full blur-2xl"></div>
            
            <h3 className="font-heading text-2xl font-bold text-on-surface mb-2 relative z-10">Terminal Briefing</h3>
            <p className="font-sans text-base text-on-surface-variant mb-6 relative z-10">Get AI-curated market intel delivered to your inbox daily.</p>
            
            <form className="flex flex-col gap-4 mt-auto relative z-10">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-lg pl-10 pr-4 py-3 font-sans text-sm focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim transition-all outline-none placeholder:text-on-surface-variant/50" 
                  placeholder="Enter your email" 
                  type="email"
                />
              </div>
              <button 
                className="w-full bg-primary-container text-on-primary-container font-sans text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-primary-fixed transition-colors flex justify-center items-center gap-2" 
                type="button"
              >
                SUBSCRIBE <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </section>
        </div>
      </main>

      {/* Footer (Shared Component) */}
      <footer className="w-full mt-auto bg-surface-container-lowest border-t border-outline-variant py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 lg:px-10 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4 md:col-span-1">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface">© 2024 AI Market Rates. Institutional Intelligence. All rights reserved.</span>
          </div>
          <div className="flex flex-col gap-2">
            <a className="font-sans text-base text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-2">
            <a className="font-sans text-base text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-2">
            <a className="font-sans text-base text-on-surface-variant hover:text-primary transition-colors" href="#">Regulatory Disclosure</a>
            <a className="font-sans text-base text-on-surface-variant hover:text-primary transition-colors mt-2" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
