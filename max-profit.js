// 121. Best Time to Buy and Sell Stock

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
  1 <= prices.length <= 105
  0 <= prices[i] <= 104
*/

const maxProfit = function (prices) {
  let smallestValue = prices[0];
  let largestValue = prices[0];
  let mostProfit = largestValue - smallestValue;

  for (let i = 0; i < prices.length; i++) {
    console.log('🚀 smallestValue', smallestValue);
    console.log('🚀 largestValue', largestValue);
    if (smallestValue > prices[i]) {
      largestValue = prices[i];
      smallestValue = prices[i];
    } else if (largestValue < prices[i]) {
      largestValue = prices[i];
    }

    const currentProfit = largestValue - smallestValue;
    if (currentProfit > mostProfit) {
      console.log('🚀 maxProfit:', mostProfit);
      mostProfit = largestValue - smallestValue;
    }
  }

  // if (smallestValue === largestValue) return 0;

  return mostProfit;
};

// [1, 7, 2, 1, 8] = buy on 1st day, sell on 5th day
// [8, 6] = no transaction
// [2, 3, 7, 1, 2] buy on 1st day, sell on 3rd day
// [2, 6, 1, 4] => 6 - 2 = 4

// console.log(maxProfit([1, 7, 2, 1, 8])); // 7

// console.log(maxProfit([5, 7, 2, 1, 4])); // 3

// console.log(maxProfit([1, 2, 5, 3, 7])); // 6

console.log(maxProfit([4, 7, 1, 3])); // 6
