/*
define a function that returns the maximum sum of a subarray of size num.

We are going to add the first three elements in the array starting from index 0 moving to the next element continuously. When we add the next subset, we will move the window by subtracting the start index element and adding the new index element.
*/

function maxSumArr(arr, num) {
  const maxSum = 0;
  let tempSum = 0;
  let i = 0;
  const j = i + 1;
  for (i; i < arr.length; i += 1) {
    tempSum += arr[i];
  }
}

// tc: o(n)
function maxSumArr1(arr, num) {
  let maxSum = 0;
  let window = 0; // tempSum
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    window += arr[i];
  }
  // tempSum = maxSum;
  maxSum = window;
  for (let i = num; i < arr.length; i++) {
    const firstElement = arr[i - num]; // remove one element from left side (1st element) of window 2, 6, 9, 3, 1
    const nextElement = arr[i];
    window = window - firstElement + nextElement; // add one element to window (on the right side) 1, 8, 4, 6, 3
    maxSum = Math.max(window, maxSum); // keep track of the maxSum as the window moves from left to right
  }
  return maxSum;
}

console.log(maxSumArr1([2, 6, 9, 3, 1, 8, 4, 6, 3], 4));
