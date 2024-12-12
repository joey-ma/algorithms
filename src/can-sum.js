/* canSum

Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative. */

// canSum, recursive solution
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) return true;
  }

  return false;
};

// canSum, recursive solution memoized
const canSumMemoized = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) return true;
  }

  return false;
};

console.log(canSumMemoized(7, [2, 3])); // true
console.log(canSumMemoized(7, [5, 3, 4, 7])); // true
console.log(canSumMemoized(7, [2, 4])); // false
console.log(canSumMemoized(7, [2, 3, 5])); // true
console.log(canSumMemoized(300, [7, 14])); // false

// todo: canSum, iterative solution... not solved yet
const canSumIterative = (targetSum, numbers) => {
  const obj = {};

  for (const num of numbers) {
    const remainder = targetSum - num;

    if (remainder in obj) return obj[remainder];
    if (remainder === 0) {
      obj[remainder] = true;
      return true;
    }

    if (remainder < 0) {
      obj[remainder] = false;
      return false;
    }

    // return canSumIterative(remainder, numbers);
  }

  return false;
};

console.log(canSumIterative(7, [2, 3])); // true
console.log(canSumIterative(7, [5, 3, 4, 7])); // true
console.log(canSumIterative(7, [2, 4])); // false
console.log(canSumIterative(7, [2, 3, 5])); // true
console.log(canSumIterative(300, [7, 14])); // false
