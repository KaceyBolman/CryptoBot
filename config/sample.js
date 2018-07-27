// What is our config?
let conf = {
  exchange: 'cryptopia',
  market: 'LUX/BTC',

  // Get the poll settings by time gap(ms)
  pollInfo: 8000,
  pollOrders: 8000,
  pollReport: 8000,

  // Get order settings
  adjustSpread: false,
  minWidthPercent: 0.3,
  minWidthPercentIncrement: 0.3,
  orderCountMin: 5,
  orderCountBuy: 2,
  orderCountBuyMin: 2,
  orderCountSell: 2,
  orderCountSellMin: 2,
  orderSize: 0, // ZERO = AUTO USES orderSizeMultiplier * accountBalance
  orderSizeMultiplier: 1, // 0 - 100 % possible values
  orderSizeRandom: 6, // limit to get Random value for orderSize
  saveReport: true, // Saves a report file in ./public/report.json
  aggressive: true, // Calculate the profit/loss aggressively?

  cryptopia: {
    apiKey: '', // You know what this is?
    secret: ''  // If you don't please leave!
  }
}

module.exports = conf
