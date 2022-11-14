/* Write a function that takes in a target sum and an array of numbers as arguments.

The function should return an array containing any combination of elements that added up to exactly the target sum. If there is no combination that adds up to the target sum, then return null.

If there are multiple combinations possible, you may return any single one. */

// tc: o(n*m) or o(n^2); sc: o(m)
const count = { run: 0 };

function howSum(targetSum, numbers) {
  count.run += 1;
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    count.run += 1;
    const remainder = targetSum - num;

    const result = howSum(remainder, numbers);

    if (result !== null) return [...result, num];
  }

  return null;
}

// console.log(howSum(7, [2, 3])); // [3, 2, 2]
// console.log(howSum(7, [5, 3, 4, 7])); // [7] or [3, 4]
// console.log(howSum(7, [2, 4])); // null
// console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2] or [3, 5]
// console.log(howSum(0, [1, 2, 3])); // []
// console.log(howSum(300, [7, 14])); // null, not efficient though: takes too long
// console.log('count.run', count.run); // fn ran 2269806339 times (minus iterations)

// reset counting fn runs
count.run = 0;

// tc: o(n*m^2) or o(n^2); sc: o(m^2)
function howSumMemoized(targetSum, numbers, memo = { }) {
  count.run += 1;
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const result = howSumMemoized(remainder, numbers, memo);

    // console.log('memo:', memo);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
}

console.log(howSumMemoized(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSumMemoized(7, [2, 3])); // [3, 2, 2]
console.log(howSumMemoized(7, [2, 4])); // null
console.log(howSumMemoized(8, [2, 3, 5])); // [2, 2, 2, 2] or [3, 5]
console.log(howSumMemoized(0, [1, 2, 3])); // []
console.log(howSumMemoized(300, [7, 14])); // null, much faster now
console.log('count.run', count.run); // fn ran 87 times (minus iterations)
