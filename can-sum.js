/* canSum

Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative. */

const canSum = (targetSum, numbers) => {
  const obj = {};
  if (num === 0) return true;

  numbers.forEach((num) => {
    if (obj[num] !== undefined) return canSum(num, numbers);
    obj[num] = targetSum - num;
  });
};
