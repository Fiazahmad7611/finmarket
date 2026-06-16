import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import type { CryptoData } from "../types";
import { cn } from "../lib/utils";

export function CryptoTable({ data, isLoading }: { data: CryptoData[]; isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="animate-pulse flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 bg-zinc-100 dark:bg-zinc-800 rounded-lg"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50 uppercase border-y border-zinc-200 dark:border-zinc-800">
          <tr>
            <th className="px-6 py-4 font-medium">Asset</th>
            <th className="px-6 py-4 font-medium text-right">Price (USD)</th>
            <th className="px-6 py-4 font-medium text-right">24h Change</th>
            <th className="px-6 py-4 font-medium text-right hidden sm:table-cell">Market Cap</th>
            <th className="px-6 py-4 font-medium text-right hidden md:table-cell">Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => {
            const isPositive = coin.price_change_percentage_24h >= 0;
            return (
              <tr 
                key={coin.id} 
                className="group border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-xs">
                      {coin.symbol[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-zinc-100">{coin.name}</div>
                      <div className="text-xs text-zinc-500 uppercase">{coin.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-mono font-medium text-zinc-900 dark:text-zinc-100">
                  ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={cn(
                    "inline-flex items-center gap-1 font-medium font-mono text-xs px-2 py-1 rounded-md",
                    isPositive 
                      ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" 
                      : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                  )}>
                    {isPositive ? <ArrowUpIcon className="w-3 h-3" /> : <ArrowDownIcon className="w-3 h-3" />}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-mono text-zinc-500 hidden sm:table-cell">
                  ${coin.market_cap.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right font-mono text-zinc-500 hidden md:table-cell">
                  ${coin.total_volume.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
