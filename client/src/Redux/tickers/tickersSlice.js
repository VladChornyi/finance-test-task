import { createSlice } from "@reduxjs/toolkit";

export const tickersSlice = createSlice({
  name: "tickers",
  initialState: { lastTrade: [], currentTrade: [] },
  reducers: {
    getTickers(state, action) {
      return {
        lastTrade: [...state.currentTrade],
        currentTrade: [...action.payload],
      };
    },
  },
});
export const { getTickers } = tickersSlice.actions;
