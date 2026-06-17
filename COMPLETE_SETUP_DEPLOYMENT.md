# 🚀 FinMarket Setup & Deployment Guide - Complete

## ✅ Your Supabase Credentials Configured

```
Project: ikpmqdyhiuzugbbhrvvr
URL: https://ikpmqdyhiuzugbbhrvvr.supabase.co
Anon Key: sb_publishable_ed5OhH94Q5p9hvym4Hj0Jv87NG60
```

---

## 📋 STEP 1: Setup SQL Editor & Database Schema

### Go to Supabase Dashboard

1. **Open** → https://app.supabase.com
2. **Select Project** → ikpmqdyhiuzugbbhrvvr
3. **Navigate** → SQL Editor (left sidebar)
4. **Click** → "New Query"

### Run Database Schema

#### Query 1: Create Tables & Indexes

**Copy & Paste this entire code:**

```sql
-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT CHECK (role IN ('user', 'admin')) DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Cryptocurrencies table
CREATE TABLE IF NOT EXISTS public.cryptocurrencies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  symbol TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price_usd DECIMAL(20, 8),
  price_pkr DECIMAL(20, 8),
  market_cap DECIMAL(30, 2),
  market_cap_rank INTEGER,
  volume_24h DECIMAL(30, 2),
  change_24h DECIMAL(10, 4),
  change_7d DECIMAL(10, 4),
  change_30d DECIMAL(10, 4),
  logo_url TEXT,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Gold prices table
CREATE TABLE IF NOT EXISTS public.gold_prices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  price_usd DECIMAL(20, 8),
  price_pkr DECIMAL(20, 8),
  unit TEXT CHECK (unit IN ('oz', 'gram', 'tola')) DEFAULT 'oz',
  change_24h DECIMAL(10, 4),
  source TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Silver prices table
CREATE TABLE IF NOT EXISTS public.silver_prices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  price_usd DECIMAL(20, 8),
  price_pkr DECIMAL(20, 8),
  unit TEXT CHECK (unit IN ('oz', 'gram', 'tola')) DEFAULT 'oz',
  change_24h DECIMAL(10, 4),
  source TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Market predictions table
CREATE TABLE IF NOT EXISTS public.market_predictions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  asset_type TEXT CHECK (asset_type IN ('crypto', 'gold', 'silver', 'metals')) NOT NULL,
  asset_name TEXT NOT NULL,
  symbol TEXT,
  prediction TEXT NOT NULL,
  confidence_score DECIMAL(5, 2) CHECK (confidence_score >= 0 AND confidence_score <= 100),
  analysis TEXT,
  disclaimer TEXT DEFAULT 'Market Analysis & Educational Information Only',
  risk_level TEXT CHECK (risk_level IN ('low', 'medium', 'high')),
  bullish BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- User watchlist
CREATE TABLE IF NOT EXISTS public.watchlists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  asset_type TEXT CHECK (asset_type IN ('crypto', 'gold', 'silver')) NOT NULL,
  asset_id TEXT NOT NULL,
  asset_name TEXT NOT NULL,
  symbol TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, asset_type, asset_id)
);

-- User portfolio
CREATE TABLE IF NOT EXISTS public.portfolio (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  asset_type TEXT CHECK (asset_type IN ('crypto', 'gold', 'silver')) NOT NULL,
  asset_name TEXT NOT NULL,
  symbol TEXT,
  quantity DECIMAL(20, 8) NOT NULL,
  purchase_price DECIMAL(20, 8),
  current_price DECIMAL(20, 8),
  purchase_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- User transactions
CREATE TABLE IF NOT EXISTS public.transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('buy', 'sell', 'transfer')) NOT NULL,
  amount DECIMAL(20, 8) NOT NULL,
  asset_type TEXT CHECK (asset_type IN ('crypto', 'gold', 'silver')) NOT NULL,
  asset_name TEXT NOT NULL,
  symbol TEXT,
  price_at_transaction DECIMAL(20, 8),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Price alerts
CREATE TABLE IF NOT EXISTS public.price_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  asset_type TEXT CHECK (asset_type IN ('crypto', 'gold', 'silver')) NOT NULL,
  asset_name TEXT NOT NULL,
  symbol TEXT,
  target_price DECIMAL(20, 8) NOT NULL,
  alert_type TEXT CHECK (alert_type IN ('above', 'below')) NOT NULL,
  is_triggered BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_cryptocurrencies_symbol ON public.cryptocurrencies(symbol);
CREATE INDEX IF NOT EXISTS idx_cryptocurrencies_updated_at ON public.cryptocurrencies(updated_at);
CREATE INDEX IF NOT EXISTS idx_gold_prices_updated_at ON public.gold_prices(updated_at);
CREATE INDEX IF NOT EXISTS idx_silver_prices_updated_at ON public.silver_prices(updated_at);
CREATE INDEX IF NOT EXISTS idx_watchlists_user_id ON public.watchlists(user_id);
CREATE INDEX IF NOT EXISTS idx_portfolio_user_id ON public.portfolio(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_price_alerts_user_id ON public.price_alerts(user_id);
CREATE INDEX IF NOT EXISTS idx_market_predictions_asset_type ON public.market_predictions(asset_type);

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.watchlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.price_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cryptocurrencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gold_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.silver_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_predictions ENABLE ROW LEVEL SECURITY;
```

**Click "Run" button** ✓

---

#### Query 2: Add Security Policies

**Create new query and paste:**

```sql
-- RLS Policies

-- Users table policies
CREATE POLICY "Users can view their own profile" 
  ON public.users FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.users FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all users" 
  ON public.users FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Cryptocurrencies table - readable by all, writable by admins only
CREATE POLICY "Anyone can view cryptocurrencies" 
  ON public.cryptocurrencies FOR SELECT 
  USING (true);

CREATE POLICY "Only admins can insert cryptocurrencies" 
  ON public.cryptocurrencies FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can update cryptocurrencies" 
  ON public.cryptocurrencies FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Gold prices - readable by all, writable by admins only
CREATE POLICY "Anyone can view gold prices" 
  ON public.gold_prices FOR SELECT 
  USING (true);

CREATE POLICY "Only admins can manage gold prices" 
  ON public.gold_prices FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can update gold prices" 
  ON public.gold_prices FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Silver prices - readable by all, writable by admins only
CREATE POLICY "Anyone can view silver prices" 
  ON public.silver_prices FOR SELECT 
  USING (true);

CREATE POLICY "Only admins can manage silver prices" 
  ON public.silver_prices FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can update silver prices" 
  ON public.silver_prices FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Market predictions - readable by all, writable by admins
CREATE POLICY "Anyone can view market predictions" 
  ON public.market_predictions FOR SELECT 
  USING (true);

CREATE POLICY "Only admins can manage market predictions" 
  ON public.market_predictions FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Watchlist policies - users can only see and manage their own
CREATE POLICY "Users can view their own watchlist" 
  ON public.watchlists FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add to their own watchlist" 
  ON public.watchlists FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove from their own watchlist" 
  ON public.watchlists FOR DELETE 
  USING (auth.uid() = user_id);

-- Portfolio policies
CREATE POLICY "Users can view their own portfolio" 
  ON public.portfolio FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add to their own portfolio" 
  ON public.portfolio FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own portfolio" 
  ON public.portfolio FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete from their own portfolio" 
  ON public.portfolio FOR DELETE 
  USING (auth.uid() = user_id);

-- Transactions policies
CREATE POLICY "Users can view their own transactions" 
  ON public.transactions FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own transactions" 
  ON public.transactions FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Price alerts policies
CREATE POLICY "Users can view their own price alerts" 
  ON public.price_alerts FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own price alerts" 
  ON public.price_alerts FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own price alerts" 
  ON public.price_alerts FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own price alerts" 
  ON public.price_alerts FOR DELETE 
  USING (auth.uid() = user_id);
```

**Click "Run" button** ✓

---

## ✨ ALL PROJECT FEATURES

### 1. **Cryptocurrency Dashboard** 💰
- Real-time prices for 50+ cryptocurrencies
- Market cap & volume tracking
- 24h, 7d, 30d price changes
- Search & filter functionality
- Add to watchlist
- Live price updates every 5 minutes

### 2. **Gold Price Platform** 🏆
- Live gold prices in USD & PKR
- Unit conversions (oz, gram, tola)
- Historical price tracking
- 24h price changes
- Investment calculator
- Price alerts

### 3. **Silver Price Platform** 💎
- Live silver prices in USD & PKR
- Unit conversions available
- Historical data
- Trend indicators
- Real-time updates

### 4. **AI Market Analysis** 🤖
- Powered by Google Gemini API
- Bullish/Bearish predictions
- Confidence scores (0-100%)
- Risk level assessment (Low/Medium/High)
- Educational insights only
- Professional analysis

### 5. **Trading Calculators** 📊
- **ROI Calculator** - Return on Investment
- **DCA Calculator** - Dollar-Cost Averaging
- **Profit Calculator** - Crypto profits
- **Compound Interest** - Investment growth
- **Risk/Reward** - Position sizing
- **Break-even** - Entry level calculation
- **Percentage Calculator** - Quick math

### 6. **Portfolio Tracker** 📈
- Track all your investments
- Crypto holdings
- Precious metals
- Profit/Loss calculations
- Average buy price
- Current value tracking
- Performance metrics

### 7. **User Watchlists** ⭐
- Create personal watchlists
- Track favorite assets
- Quick access to prices
- Monitor multiple currencies
- Organized by type

### 8. **Price Alerts** 🔔
- Set price alerts (above/below)
- Real-time notifications
- Multiple alerts per asset
- Trigger status tracking
- Customizable thresholds

### 9. **User Authentication** 🔐
- Email/Password signup
- Secure login
- Password reset
- User profiles
- Avatar support
- Admin roles

### 10. **Admin Dashboard** 👨‍💼
- Platform metrics
- User management
- Cryptocurrency management
- Gold price updates
- Silver price updates
- Prediction management
- Content management

### 11. **Design Features** 🎨
- Dark/Light theme toggle
- Responsive design (Mobile/Tablet/Desktop)
- Luxury fintech aesthetic
- Smooth animations
- Gold & silver gradients
- Professional charts
- Icons & UI elements

### 12. **Security Features** 🔒
- Row Level Security (RLS)
- User data isolation
- Admin-only operations
- Encrypted credentials
- Input validation
- HTTPS/TLS ready

### 13. **SEO Optimization** 🌐
- Meta tags
- Open Graph
- Twitter cards
- Sitemap (sitemap.xml)
- Robots.txt
- Schema.org structured data
- Mobile-friendly

### 14. **Pages Included** 📄
- Home Dashboard
- Cryptocurrency View
- Gold View
- Silver View
- AI Insights
- Calculators
- About Page
- Privacy Policy
- Terms of Service
- Disclaimer
- FAQ
- Trust Center
- Contact

---

## 🚀 STEP 2: Test Locally

```bash
# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

✓ You'll see the FinMarket dashboard with all features!

---

## 🌍 STEP 3: Deploy to Vercel & Get Live Link

### Option A: One-Click Deploy (Easiest)

1. **Go to Vercel**: https://vercel.com/dashboard
2. **Click**: "New Project"
3. **Import**: Select your GitHub repo (ahmadfiaz1427/finmarket)
4. **Add Environment Variables**:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://ikpmqdyhiuzugbbhrvvr.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_ed5OhH94Q5p9hvym4Hj0Jv87NG60
   SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
   GEMINI_API_KEY=YOUR_GEMINI_KEY
   ```
5. **Click**: "Deploy"
6. **Wait**: ~2-3 minutes
7. **Get Link**: `https://your-project-name.vercel.app` ✓

### Option B: Manual Deploy

```bash
# Build for production
npm run build

# This creates a 'dist' folder ready to deploy
```

---

## 🎯 Your Live Deployment Link Structure

After deployment, you'll get:

```
https://finmarket-[your-name].vercel.app

Examples:
https://finmarket-ahmad.vercel.app/
https://finmarket-crypto.vercel.app/
https://my-finmarket.vercel.app/
```

---

## 📊 What You'll See Live

**Home Page:**
- Real-time crypto prices
- Gold & silver rates
- Market trends
- Featured assets
- Quick access links

**Crypto Dashboard:**
- 50+ cryptocurrencies
- Search & filter
- Price charts
- Market data
- Add to watchlist

**Gold/Silver Pages:**
- Current prices in USD & PKR
- Conversion calculator
- Historical charts
- Investment tools

**AI Insights:**
- Market analysis
- Bullish/Bearish predictions
- Risk assessment
- Confidence scores

**Calculators:**
- ROI, DCA, Profit
- Compound interest
- Risk calculations
- All in one place

**Portfolio:**
- Your holdings
- Profit/Loss tracking
- Performance metrics

**Admin Panel:**
- Dashboard metrics
- Data management
- User controls

---

## 🔑 Getting Your Service Role Key

Go to Supabase Dashboard:
1. **Project** → ikpmqdyhiuzugbbhrvvr
2. **Settings** → API
3. **Under "Service Role"** → Copy the key
4. Add to `.env.local` and Vercel

---

## 🎮 Get Gemini API Key

1. Go to: https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key
4. Add to `.env.local` and Vercel

---

## 📈 Your Platform Statistics

| Metric | Value |
|--------|-------|
| Cryptocurrencies | 50+ |
| Features | 14 |
| Tables | 9 |
| Security Policies | 20+ |
| Pages | 15+ |
| Calculators | 7 |
| Admin Controls | 6+ |
| Real-time Updates | Yes ✓ |
| Mobile Responsive | Yes ✓ |
| Dark/Light Theme | Yes ✓ |
| SEO Ready | Yes ✓ |

---

## ✅ Deployment Checklist

- [ ] SQL schema executed
- [ ] RLS policies added
- [ ] Gemini API key obtained
- [ ] Service role key obtained
- [ ] Environment variables in Vercel
- [ ] Repository on GitHub
- [ ] Project deployed to Vercel
- [ ] Domain configured (optional)
- [ ] Test all features live

---

## 🎉 Done!

Your **FinMarket** platform is now:
- ✅ Connected to Supabase
- ✅ Running locally
- ✅ Deployed globally
- ✅ Showing all features
- ✅ Live on the internet!

**Your Live Link**: `https://finmarket-[your-project].vercel.app`

**Enjoy your AI-powered financial platform!** 🚀
