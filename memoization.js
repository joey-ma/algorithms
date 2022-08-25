// playing with memoization with the classic Fibonacci algo

let example1, example2, example3;

let i = 0; // to keep track of actual function calls

// ! without memoization
// tc: O(2^n)

const fib1 = (n) => {
  i++;
  if (n <= 2) return 1;
  return fib1(n - 1) + fib1(n - 2);
};

// ? examples

example1 = fib1(3);

console.log(`fib(3) = ${example1} required ${i} function calls`);
// -> fib(6) = 2 required 3 function calls

i = 0; // to keep track of numbers of function calls

example2 = fib1(6);

console.log(`fib(6) = ${example2} required ${i} function calls`);
// -> fib(6) = 8 required 15 function calls

i = 0; // to keep track of numbers of function calls

example3 = fib1(12);

console.log(`fib(12) = ${example3} required ${i} function calls`);
// -> fib(12) = 144 required 287 function calls

// ! with memoization, using an object as a second argument,
// passing that object for all future function calls to use, by reference

let j = 0; // to keep track of numbers of function calls

const fibWithMemo = (n, memo = {}) => {
  j++;
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
  return memo[n];
};

example1 = fibWithMemo(3);

console.log(`fib(3) = ${example1} required ${j} function calls`);
// -> fib(6) = 8 required 9 function calls

j = 0; // to keep track of numbers of function calls

example2 = fibWithMemo(6);

console.log(`fib(6) = ${example2} required ${j} function calls`);
// -> fib(6) = 8 required 21 function calls

j = 0; // to keep track of numbers of function calls

example3 = fibWithMemo(12);

console.log(`fib(12) = ${example2} required ${j} function calls`);
// -> fib(6) = 8 required 21 function calls

// ! with memoization, a different implementation

const memoization = (fn) => {
  const memo = {};
  return fn;
};

let k = 1;

// const fib3 = (n, memo) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   k++;
//   memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
//   return memo[n];
// };

// const memoizedFib3 = memoization(fib3);

// console.log(memoizedFib3);

// console.log("fib = " + memoizedFib3(10) + ", " + k);
// // makes 9 calls
