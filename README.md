# stock-screener-dashboard
Fully responsive financial dashboard featuring stock search with detailed metrics, real-time currency converter, interactive calculator, and comprehensive market data for forex, commodities, and cryptocurrencies. Includes Indian broker comparison tools.

## 📋 Short Description

A fully responsive web-based financial dashboard featuring **stock search with detailed company metrics**, **real-time currency converter**, **interactive calculator**, and comprehensive market data displays for forex, commodities, and cryptocurrencies. Includes comparison tools for Indian discount brokers with detailed fee structures.

## ✨ Key Features

### 📊 Stock Information System
- Search 6+ major stocks (AAPL, MSFT, AMZN, GOOGL, META, TSLA)
- Detailed company metrics: P/E Ratio, EPS, Market Cap, 52-week high/low
- Comprehensive company descriptions and financial indicators
- Real-time price updates with performance indicators

### 💱 Currency Exchange Tools
- Multi-currency converter (USD, EUR, GBP, INR)
- Real-time conversion calculations
- Clean, intuitive interface
- Support for major world currencies

### 🔢 Financial Calculator
- Built-in calculator for quick computations
- Standard arithmetic operations
- Percentage calculations
- Professional design

### 🌍 Market Data Displays
- **Forex Market**: Major currency pairs with bid/ask prices
- **Commodities**: Gold, Silver, Crude Oil prices and changes
- **Cryptocurrencies**: Bitcoin, Ethereum, BNB, XRP with market caps

### 🏦 Broker Comparison
- Compare 6 Indian discount brokers
- Detailed fee structures (delivery, intraday, AMC)
- Service offerings comparison
- Direct application links

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Framework**: Bootstrap 5.3.2
- **Fonts**: Google Fonts (Poppins, Varela Round)
- **Icons**: Font Awesome
- **Design**: Responsive, Mobile-First approach

## 📁 Project Structure

```
stock-screener/
├── index.html              # Main dashboard page
├── index.css              # Main page styles
├── index.js               # Dashboard functionality
├── StockInfo.html         # Stock search page
├── StockInfo.css          # Stock page styles
├── compare.html           # Broker comparison page
├── compare.css            # Comparison page styles
├── assets/                # Images and icons
│   ├── book.png
│   ├── drawing286.jpg
│   ├── forex.png
│   ├── gold.png
│   ├── crude.png
│   ├── silver.png
│   ├── zerodha.png
│   ├── angelOne.png
│   ├── shoonya.png
│   ├── espresso.png
│   ├── upstox.png
│   └── groww.png
└── README.md              # This file
```

## 💻 Pages Overview

### 1. Main Dashboard (index.html)

**Features:**
- Live date and time display
- Rotating inspirational quotes from financial experts
- Financial news cards
- Currency exchange converter
- Interactive calculator
- Market data sections (Forex, Commodities, Bitcoin)

**Navigation Sections:**
- News
- Exchange
- Forex
- Commodities
- Bitcoin
- Compare (Brokers)

### 2. Stock Information (StockInfo.html)

**Search Functionality:**
```javascript
// Supports these stocks:
- AAPL (Apple Inc.)
- MSFT (Microsoft Corporation)
- AMZN (Amazon.com, Inc.)
- GOOGL (Alphabet Inc.)
- META (Meta Platforms, Inc.)
- TSLA (Tesla, Inc.)
```

**Displayed Metrics:**
- Current Price & 24h Change
- Market Capitalization
- P/E Ratio & EPS
- 52-Week High/Low
- Dividend Yield
- Profit Margin
- Beta
- Revenue/Earnings Growth
- Analyst Target Price

### 3. Broker Comparison (compare.html)

**Featured Brokers:**
1. **Zerodha** - Market leader
2. **Angel One** - Free account opening
3. **Shoonya by Finvasia** - Zero brokerage
4. **Espresso** - Pay only on profit
5. **Upstox** - Technology-focused
6. **Groww** - Beginner-friendly

**Comparison Parameters:**
- Services offered
- Delivery charges
- Intraday charges
- Account opening fees
- Annual Maintenance Charges (AMC)

## 🎨 Design Features

### Responsive Design
```css
/* Mobile-first approach */
@media (max-width: 768px) {
    /* Optimized for mobile */
}

@media (min-width: 769px) and (max-width: 1024px) {
    /* Tablet optimization */
}

@media (min-width: 1025px) {
    /* Desktop layout */
}
```

### Color Scheme
- Primary: `#667eea` (Purple gradient)
- Secondary: `#764ba2` (Deep purple)
- Success: `#28a745` (Green for positive)
- Danger: `#dc3545` (Red for negative)
- Background: Linear gradients and white cards

### Animations
- Fade-in on scroll
- Hover effects on cards
- Smooth transitions
- Interactive buttons

## 📊 Sample Data

### Stock Database Example
```javascript
"AAPL": {
    "Name": "Apple Inc.",
    "Price": "$181.76",
    "MarketCap": "$2.78T",
    "PERatio": "32.42",
    "EPS": "5.61",
    "52WeekHigh": "$198.23",
    "52WeekLow": "$164.57"
}
```

### Currency Conversion Rates
```javascript
const rates = {
    USD: { EUR: 0.85, GBP: 0.73, INR: 82.50 },
    EUR: { USD: 1.18, GBP: 0.86, INR: 97.00 },
    GBP: { USD: 1.37, EUR: 1.16, INR: 112.50 },
    INR: { USD: 0.012, EUR: 0.010, GBP: 0.0089 }
};
```

## 🎯 Key Functionalities

### 1. Real-time Date & Time
```javascript
function updateDateTime() {
    // Updates every second
    // Displays: DAY DD MMM HH:MM:SS AM/PM
}
```

### 2. Currency Converter
```javascript
function convertCurrency(amount, from, to) {
    const rate = rates[from][to];
    return amount * rate;
}
```

### 3. Stock Search
```javascript
function searchStock(symbol) {
    const stockData = stockDatabase[symbol];
    displayStockInfo(stockData);
}
```

### 4. Financial Calculator
```javascript
// Standard calculator operations
// Supports: +, -, *, /, %, AC, Del
```

## 🌟 Highlights

✅ **User Experience**
- Clean, modern interface
- Intuitive navigation
- Fast loading times
- Smooth animations

✅ **Performance**
- Vanilla JavaScript (no heavy frameworks)
- Optimized images
- Minimal HTTP requests
- Efficient DOM manipulation

✅ **Accessibility**
- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

✅ **Mobile Responsiveness**
- Touch-friendly buttons
- Responsive grid layouts
- Hamburger menu
- Mobile-optimized forms

## 🔄 Future Enhancements

- [ ] Integrate real-time API for live stock prices
- [ ] Add user authentication and portfolios
- [ ] Implement advanced charting (Chart.js/D3.js)
- [ ] Add stock comparison features
- [ ] Create watchlist functionality
- [ ] Add technical indicators
- [ ] Implement news API integration
- [ ] Add dark mode toggle

## 👨‍💻 Author

**Prince Kachchhi & Akshay Rudakiya**
- Course: Web Development Project
- University: Institute of Technology, Nirma University
