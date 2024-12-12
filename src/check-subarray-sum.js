/*
Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.

An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// ! NOT CLEARED UP YET

/* LeetCode Java Solution

class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        * initialize the hash map with index 0 for sum 0
        Map<Integer, Integer> hashMap = new HashMap<>(Map.of(0, 0));
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            * if the remainder sum % k occurs for the first time
            if (!hashMap.containsKey(sum % k))
                hashMap.put(sum % k, i + 1);
            * if the subarray size is at least two
            else if (hashMap.get(sum % k) < i)
                return true;
        }
        return false;
    }
} */

// tc: o(n^2); sc: o(1); translated directly from Java to JavaScript, did not pass all test cases. (87 / 97 test cases passed.)
const checkSubarraySum2 = function (nums, k) {
  const mapper = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    console.log('mapper:', mapper);
    if (!mapper.has(sum % k)) {
      mapper.set(sum % k, i + 1);
    } else if (mapper.get(sum % k) < i) {
      return true;
    }
  }
  console.log(mapper);
  return false;
};

// checkSubarraySum2([23, 2, 4, 6, 7], 6); // true

// checkSubarraySum2([23, 2, 4, 6, 7], 7); // false, expected: true

const checkSubarraySum = function (nums, k) {
  const mapper = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    console.log('mapper:', mapper);
    if (mapper.has(sum % k)) {
      console.log(sum, k, sum % k);
      if (mapper.get(sum % k) < i) return true; // sum % k == 0 means it is divisible, and less than i means subarray size is greater than 2
    } else {
      mapper.set(sum % k, i + 1);
    }
  }
  console.log(mapper);
  return false;
};

// checkSubarraySum([23, 2, 4, 6, 7], 6); // true

// checkSubarraySum([23, 2, 4, 6, 7], 7); // false, expected: true

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));

// tc: o(n^2); sc: o(1); declarative, imperative, iterative, brute force
/* var checkSubarraySum1 = function(nums, k) {
    if (k === 0) return true; // 0 is always a multiple of k

    let tempSum = 0;
    let i = 0;
    let j = i + 1;

    // iterate through nums
    while (i < nums.length - 1) {
        if (j === i + 1) tempSum = nums[i] + nums[j];
        else tempSum += nums[j]; // add elements in nums to tempSum

        console.log('i', i, 'j', j, nums[j], tempSum);

        // continuously check if tempSum ever equals to a multiple of k
        if (tempSum % k === 0) {
            return true;
        } else {
            if (j === nums.length - 1) {
                i += 1;
                j = i;
            }
            j += 1;
        }
    }

    return false; // aka tempSum never === k
}; */
