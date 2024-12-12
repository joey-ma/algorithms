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

// [1, 7, 2, 1, 8] = buy on 1st day, sell on 5th day
// [8, 6] = no transaction
// [2, 3, 7, 1, 2] buy on 1st day, sell on 3rd day
// [2, 6, 1, 4] => 6 - 2 = 4

// ! brute force
// * tc: o(n^2); sc: o(1); brute force -> has correctness, but lacks efficiency -> Time Limit Exceeded

const maxProfit1 = function (prices) {
  let max = 0;
  // iterate through prices
  for (let i = 0; i < prices.length; i += 1) {
    // compare ith element against every other elements
    for (let j = i + 1; j < prices.length; j += 1) {
      const currentProfit = prices[j] - prices[i]; // temporary
      max = Math.max(currentProfit, max);
    }
  }
  // keeping track of largest difference "other elements" - "ith elements"
  return max;
};

console.log(maxProfit1([1, 7, 2, 1, 8])); // 7
// console.log(maxProfit1([5, 7, 2, 1, 4])); // 3
// console.log(maxProfit1([1, 2, 5, 3, 7])); // 6
// console.log(maxProfit1([4, 7, 1, 3])); // 3

// ! a submission from leetcode with fast runtime (68 ms)
// * tc: o(n); sc: o(1);
// declare max = 0 & minPrice = Infinity
// iterate through prices
// keep track & update the smaller of minPrice or current price (in prices)
// keep track & update the larger of max(Profit) or current profit
// return max
// note: as long as a max price is stored, we can move on and don't need the last min price anymore

const maxProfit2 = function (prices) {
  let max = 0;
  let minPrice = Infinity;

  for (const price of prices) {
    minPrice = Math.min(price, minPrice);
    max = Math.max(max, price - minPrice);
  }
  return max;
};

console.log(maxProfit2([1, 7, 2, 1, 8])); // 7
// console.log(maxProfit2([5, 7, 2, 1, 4])); // 3
// console.log(maxProfit2([1, 2, 5, 3, 7])); // 6
// console.log(maxProfit2([4, 7, 1, 3])); // 3

// ! a submission from leetcode with fast runtime (65 ms)
// * tc: o(n); sc: o(1);
// declare profit = 0 & buy = 1st element of prices
// iterate through prices
// keep track & update the smaller of current price or what's previously a lower buy price
// keep track & update the smaller of current profit or what's previously a higher profit
// return profit

const maxProfit3 = function (prices) {
  let profit = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length && prices.length > 1; i++) {
    buy = prices[i] < buy ? prices[i] : buy;
    profit = (prices[i] - buy) > profit ? prices[i] - buy : profit;
  }

  return profit;
};

console.log(maxProfit3([1, 7, 2, 1, 8])); // 7
// console.log(maxProfit3([5, 7, 2, 1, 4])); // 3
// console.log(maxProfit3([1, 2, 5, 3, 7])); // 6
// console.log(maxProfit3([4, 7, 1, 3])); // 3

const maxProfit4 = function (prices) {
  let lowestPrice = prices[0];
  let highestPrice = prices[0];
  let mostProfit = highestPrice - lowestPrice;

  for (let i = 0; i < prices.length; i++) {
    // console.log(lowestPrice);
    // console.log(highestPrice);
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
      highestPrice = prices[i];
      // we also update the highest price because a higher or highestPrice in the past does not matter anymore
      // we cannot buy today at a lower price and sell at a higher price from yesterday
    }
    if (prices[i] > highestPrice) {
      highestPrice = prices[i];
    }
    // note: the current price cannot be lower than the lowestPrice AND higher than the highestPrice
    // so separate conditional checks work the same way as one else if

    const currentProfit = highestPrice - lowestPrice;

    if (currentProfit > mostProfit) mostProfit = currentProfit;
  }

  return mostProfit;
};

// ! a submission from leetcode with fast runtime (57 ms)
// * tc: o(n); sc: o(1);
console.log(maxProfit4([1, 7, 2, 1, 8])); // 7
// console.log(maxProfit4([5, 7, 2, 1, 4])); // 3
// console.log(maxProfit4([1, 2, 5, 3, 7])); // 6
// console.log(maxProfit4([4, 7, 1, 3])); // 3

const maxProfit5 = function (prices) {
  let minPrice = prices[0]; // aka lowest buy price
  let profit = 0; // aka max profit, largest difference

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    // else mostProfit = Math.max(mostProfit, price - minPrice);
    // ! a simple else will work, but it is theoretically because Math.max is another o(n) & results in the solution being o(n^2), although currently we are comparing only 2 numbers here
    // else mostProfit = mostProfit > price - minPrice ? mostProfit : price - minPrice;
    // * is theoretically better
    if (prices[i] - minPrice > profit) profit = prices[i] - minPrice;
    // this is explicit, clear, and a preferred route
  }
  return profit;
};

console.log(maxProfit5([1, 7, 2, 1, 8])); // 7
// console.log(maxProfit5([5, 7, 2, 1, 4])); // 3
// console.log(maxProfit5([1, 2, 5, 3, 7])); // 6
// console.log(maxProfit5([4, 7, 1, 3])); // 3
