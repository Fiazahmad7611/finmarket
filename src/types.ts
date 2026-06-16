export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

export interface MetalData {
  id: string;
  name: string;
  current_price_oz: number;
  current_price_gram: number;
  current_price_tola: number;
  price_change_percentage_24h: number;
}

export interface Holding {
  id: string;
  assetId: string;
  name: string;
  symbol: string;
  type: 'crypto' | 'metal';
  amount: number;
  avgBuyPrice: number;
}
