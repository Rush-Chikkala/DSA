// Problem Statement:
// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Examples:
// Example 1:
// Input:prices = [7, 1, 5, 3, 6, 4]

// Output:5

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

// Example 2:
// Input:prices = [7,6,4,3,1]

// Output:0

// Explanation: Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104
var maxProfit = function(prices) {
      let maxProfit = 0;
      for (let i = 0; i < prices.length; i++) {
          for (let j = i + 1; j < prices.length; j++) {
              if ((prices[j] - prices[i]) > maxProfit) {
                  maxProfit = prices[j] - prices[i];
              }
          }
      }
      return maxProfit;
  };  

//  Time = o(N^2)
// SPACE = o(1)


var maxProfitOptimized = function(array){
    let minBuy = Infinity
    let maxSell = -Infinity
    for(let i=0; i<array.length ; i++){
        if(array[i] < minBuy){
            minBuy = array[i]
        }
        let sell = array[i] - minBuy
        if(sell > maxSell){
            maxSell = sell
        }
    }
    return maxSell != -Infinity ? maxSell:0

}
console.log(maxProfitOptimized([7, 1, 5, 3, 6, 4]))
console.log(maxProfitOptimized([7,6,4,3,1]))

//  Time O(n)
// sPACE o(1)