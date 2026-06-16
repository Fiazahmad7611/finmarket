import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import type { MetalData } from "../types";
import { cn } from "../lib/utils";

export function MetalsTable({ data, isLoading }: { data: MetalData[]; isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="animate-pulse flex flex-col gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-16 bg-amber-50 dark:bg-amber-900/10 rounded-lg"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-zinc-500 bg-amber-50/50 dark:bg-amber-900/10 uppercase border-y border-zinc-200 dark:border-zinc-800">
          <tr>
            <th className="px-6 py-4 font-medium">Metal</th>
            <th className="px-6 py-4 font-medium text-right">Price / Ounce</th>
            <th className="px-6 py-4 font-medium text-right hidden sm:table-cell">Price / Tola</th>
            <th className="px-6 py-4 font-medium text-right hidden md:table-cell">Price / Gram</th>
            <th className="px-6 py-4 font-medium text-right">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((metal) => {
            const isPositive = metal.price_change_percentage_24h >= 0;
            return (
              <tr 
                key={metal.id} 
                className="group border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center font-bold text-xs text-amber-700 dark:text-amber-400">
                      {metal.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-zinc-100">{metal.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-mono font-medium text-zinc-900 dark:text-zinc-100">
                  ${metal.current_price_oz.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-6 py-4 text-right font-mono text-zinc-500 hidden sm:table-cell">
                  ${metal.current_price_tola.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-6 py-4 text-right font-mono text-zinc-500 hidden md:table-cell">
                  ${metal.current_price_gram.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={cn(
                    "inline-flex items-center gap-1 font-medium font-mono text-xs px-2 py-1 rounded-md",
                    isPositive 
                      ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" 
                      : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                  )}>
                    {isPositive ? <ArrowUpIcon className="w-3 h-3" /> : <ArrowDownIcon className="w-3 h-3" />}
                    {Math.abs(metal.price_change_percentage_24h).toFixed(2)}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
