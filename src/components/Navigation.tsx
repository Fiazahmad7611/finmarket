import { LayoutDashboard, Coins, Flame, Gem, Menu, Briefcase, InfoIcon, SettingsIcon, SearchIcon, MoonIcon } from "lucide-react";
import { cn } from "../lib/utils";

export function Navigation({ activeTab, onTabSelect }: { activeTab: string, onTabSelect: (tab: string) => void }) {
  const mainTabs = [
    { id: "crypto", label: "Crypto" },
    { id: "gold", label: "Gold" },
    { id: "silver", label: "Silver" },
    { id: "insights", label: "AI Insights" },
    { id: "calculators", label: "Calculators" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/20 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-6">
          <a href="#" className="font-heading text-2xl font-bold tracking-tighter text-primary-fixed-dim hidden md:flex items-center gap-2">
            AUREUS AI
          </a>
          
          <div className="hidden lg:flex items-center gap-6 ml-8">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabSelect(tab.id)}
                className={cn(
                  "font-sans text-[16px] transition-all duration-300 active:scale-95",
                  activeTab === tab.id
                    ? "text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1 font-medium"
                    : "text-on-surface-variant hover:text-primary-fixed-dim"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container rounded-full px-3 py-1.5 border border-outline-variant/30">
            <SearchIcon className="text-on-surface-variant w-5 h-5 mr-2" />
            <input 
              className="bg-transparent border-none text-on-surface text-sm focus:ring-0 w-32 placeholder:text-on-surface-variant/50 outline-none" 
              placeholder="Search markets..." 
              type="text" 
            />
          </div>
          
          <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-300 active:scale-95 md:hidden">
            <SearchIcon className="w-6 h-6" />
          </button>
          
          <button 
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-300 active:scale-95 hidden sm:block"
            onClick={() => onTabSelect("settings")}
          >
            <SettingsIcon className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-3 ml-4 border-l border-outline-variant/30 pl-4">
            <button className="text-on-surface hover:text-primary-fixed-dim font-sans transition-colors duration-300">Login</button>
            <button className="bg-gradient-to-r from-primary-fixed-dim to-[#F5DEB3] text-on-primary-fixed px-4 py-2 rounded-lg font-sans font-medium hover:opacity-90 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,215,0,0.2)]">Register</button>
          </div>
          
          <button className="lg:hidden text-on-surface">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
