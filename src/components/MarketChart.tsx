import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Generate some mock history data to simulate a trend
function generateChartData(startPrice: number, volatility: number) {
  const data = [];
  let price = startPrice;
  const now = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    
    data.push({
      date: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      price: price
    });
    
    price = price * (1 + (Math.random() - 0.45) * volatility);
  }
  return data;
}

const mockChartData = generateChartData(60000, 0.05);

export function MarketChart({ assetName = "Bitcoin", color = "#10b981", data = mockChartData }) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${assetName}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#71717a' }} 
            dy={10}
            minTickGap={30}
          />
          <YAxis 
            domain={['auto', 'auto']} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#71717a' }}
            dx={-10}
            tickFormatter={(val) => `$${val.toLocaleString()}`}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" opacity={0.1} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#fff', fontWeight: 'bold' }}
            formatter={(value: number) => [`$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 'Price']}
            labelStyle={{ color: '#a1a1aa', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke={color} 
            strokeWidth={2}
            fillOpacity={1} 
            fill={`url(#gradient-${assetName})`} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
