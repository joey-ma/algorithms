/* gridTraveler

Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n ?

Write a function 'gridTraveler(m, n)` that calculates this. */

let i = 0; // to keep track of number of function calls

// ! grid traveler without memoization

const gridTraveler1 = (m, n) => {
  i += 1;
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  return gridTraveler1(m - 1, n) + gridTraveler1(m, n - 1);
};

// console.log(gridTraveler1(0, 0)); // -> 0€
// console.log(gridTraveler1(1, 0)); // -> 0

// console.log(gridTraveler1(1, 1)); // -> 1
// console.log(gridTraveler1(2, 3)); // -> 3
// console.log(gridTraveler1(3, 3)); // -> 6
// console.log(gridTraveler1(3, 3)); // -> 6, will take 27 function calls

// going above grids (13, 13) becomes extremely expensive for the computational power
// (13, 13) or a couple additional rows may crash your program depending on your specification
// console.log(gridTraveler1(10, 10)); // -> 48620, will take 48620 function calls
console.log(gridTraveler1(13, 13)); // -> 2704156, will take 15392877 function calls

// the tc for this recursive solution is O(2^(m + n))
// 2 ^ (30) vs 2 ^ (26) or (15, 15) vs(13, 13) will take drastically longer than desired
// console.log(gridTraveler1(18, 18)); // ! -> 2333606220 -- will most likely crash your program

// ! grid traveler with memoization

const gridTraveler2 = (m, n, memo = {}) => {
  i += 1;

  const key = `${m},${n}`;

  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
  return memo[key];
};

i = 0;
// console.log(gridTraveler2(0, 0)); // -> 0
// console.log(gridTraveler2(1, 0)); // -> 0

// console.log(gridTraveler2(1, 1)); // -> 1
// console.log(gridTraveler2(2, 3)); // -> 3
// console.log(gridTraveler2(3, 3)); // -> 6
// console.log(gridTraveler2(3, 3)); // -> 6, will take 17 function calls

// going above grids (13, 13) becomes extremely expensive for the computational power
// (13, 13) or a couple additional rows may crash your program depending on your specification
console.log(gridTraveler2(10, 10)); // -> 48620, will take 199 function calls
// console.log(gridTraveler2(13, 13)); // -> 2704156, will take 337 function calls

// the tc for this recursive solution is O(n^(m + n))
// n ^ (30) vs n ^ (26) or(15, 15) vs(13, 13) will take drastically longer than desired
// console.log(gridTraveler2(18, 18)); // -> 2333606220, will take 647 function calls still is much faster than invoking gridTraveler1(10, 10)

// console.log(i);

const gridTraveler3 = (m, n, memo = {}) => {
  // further optimization:
  // the returned value is the same no matter the order of m and n (m,n) && (n,m) have the same outcome for "how many ways to travel"

  i += 1;

  const sortedInput = [m, n].sort((a, b) => a - b);
  const key = sortedInput.join();
  // ! using sortedInput.join("") will have the same correct outcome as well
  // but very different keys! // i.e. key = "33", "23", "13", "03", "12"...
  // console.log(key); // i.e. key = "3,3", "2,3", "1,3", "0,3", "1,2"...

  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] = gridTraveler3(m - 1, n, memo) + gridTraveler3(m, n - 1, memo);
  return memo[key];
};

// i = 0;

// console.log(gridTraveler3(3, 3)); // -> 6, will take 11 function calls, in contrast to 17, and get the same result

// console.log(gridTraveler3(10, 10)); // -> 48620, will take 109 function calls, in contrast to 199, and get the same result
// console.log(gridTraveler3(18, 18)); // -> 2333606220, will take 341 function calls, in contrast to 647, and get the same result
console.log(gridTraveler3(101, 101)); // -> 9.054851465610329e+58, will take 10301 function calls, in contrast to 647, and get the same result

// console.log(i);
