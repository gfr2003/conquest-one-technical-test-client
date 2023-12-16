export interface IAsset {
  meta: {
    exchangeTimezoneName: string;
    symbol: string;
    instrumentType: string;
    firstTradeDate: number;
    timezone: string;
    range: string;
    regularMarketTime: number;
    dataGranularity: string;
    validRanges: string[];
    regularMarketPrice: number;
    gmtoffset: number;
    chartPreviousClose: number;
    priceHint: number;
    currency: string;
    exchangeName: string;
    currentTradingPeriod: {
      pre: {
        gmtoffset: number;
        timezone: string;
        start: number;
        end: number;
      };
      post: {
        gmtoffset: number;
        timezone: string;
        start: number;
        end: number;
      };
      regular: {
        gmtoffset: number;
        timezone: string;
        start: number;
        end: number;
      };
    };
  };
  name: string;
  indicators: {
    quote: {
      volume: number[];
      high: number[];
      low: number[];
      close: number[];
      open: number[];
    }[];
    adjclose: {
      adjclose: number[];
    }[];
  };
  timestamp: number[];
}
