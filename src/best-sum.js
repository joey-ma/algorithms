/*

Write a function "bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.

*/

// m = target sum
// n = numbers.length
// tc: o(n^m * m); sc: o(m*n) || o(m^2); exponential tc, too slow though!
function bestSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombo = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderCombo = bestSum(remainder, numbers);

    if (remainderCombo !== null) {
      const currentCombo = [...remainderCombo, num];

      if (shortestCombo === null || currentCombo.length < shortestCombo.length) shortestCombo = currentCombo;
    }
  }

  return shortestCombo;
}

// m = target sum
// n = numbers.length
// tc: o(n * m^2); sc: o(m*n) || o(m^2); quadratic tc, but much better

function bestSumMemoized(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombo = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderCombo = bestSumMemoized(remainder, numbers, memo);

    if (remainderCombo !== null) {
      const currentCombo = [...remainderCombo, num];

      if (shortestCombo === null || currentCombo.length < shortestCombo.length) {
        shortestCombo = currentCombo;
      }
    }
  }

  memo[targetSum] = shortestCombo;
  console.log(memo);
  return shortestCombo;
}

// console.log(bestSumMemoized(7, [5, 3, 4, 7])); // [3, 4] or [7] -> [7] would be teh shortest array and the solution
// console.log(bestSumMemoized(8, [2, 3, 5])); // [2, 2, 2, 2] or [2, 3, 3], [3, 5] -> [3, 5] would be the shortest array and the solution
// console.log(bestSumMemoized(8, [1, 4, 5])); // [4, 4]
console.log(bestSumMemoized(100, [1, 2, 5, 25])); // [25, 25, 25, 25]

/*

canSum -> can you do it? yes/no -> decision problem

howSum -> how will you do it? -> combinatorial problem (any one combo or all combos)

bestSum -> what is the 'best' way to do it? -> optimization problem
*/
