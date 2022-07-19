export const LOCAL_STORE_KEY = 'Searched_Stocks';
export const SYMBOL_SEARCH_URL = 'https://finnhub.io/api/v1/search';
export const QUOTE_URL = 'https://finnhub.io/api/v1/quote';
export const SENTIMENT_URL = 'https://finnhub.io/api/v1/stock/insider-sentiment'
export const FINNHUB_TOKEN = 'bu4f8kn48v6uehqi3cqg';
export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

export interface StockInfo {
  symbolInfo: SymbolSearchResponse;
  quoteInfo: QuoteResponse;
}

export interface StockSentiment {
  symbolInfo: SymbolSearchResponse;
  sentimentInfo: SentimentInfo;
}

export interface SentimentInfo {
  data: {
    symbol: string;
    year: number;
    month: number;
    change: number;
    mspr: number;
  }[]
}

export interface QuoteResponse {
  c: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
  dp: number;
}

export interface SymbolSearchResponse {
  count: number;
  result: Array<{
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string;
  }>;
}
