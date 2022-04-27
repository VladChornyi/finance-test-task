const state = { tickers: { lastTrade: [], currentTrade: [] } };

export const testUseAppSelector = (f) => f(state);
