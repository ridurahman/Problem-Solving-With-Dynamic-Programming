function buyimumProfit(prices) {
  let buyPrice = prices[0];
  let buyIndex = 0;
  let sellIndex = 0;
  let sellPrice = prices[0];

  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
}

let prices1 = [7,1,5,3,6,4];
let prices2 = [1,2,3,4,5];
let prices3 = [7,6,4,3,1];

console.log(buyimumProfit(prices1));
console.log(buyimumProfit(prices2));
console.log(buyimumProfit(prices3));

// Time Complexity: O(n) where n is the length of the prices array.
// Space Complexity: O(1)
