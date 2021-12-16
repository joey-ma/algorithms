// 2Sum, twoSum, two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */

// Brute Force / 31.88% / 132 ms / 39.8 MB

var twoSum = function(nums, target) {
    // input: arr, int
    // output: indices of 2 numbers in the array that add up to target
    if ( 2 <= nums.length <= 10**4 && (-10)**9 <= target <= 10**9 ) {
        // iterate through nums
        for (let i = 0; i < nums.length; i++) {
            if ((-10)**9 <= nums[i] <= 10**9) {
                const diff = target - nums[i];
                const j = nums.indexOf(diff, i+1);
                // if target - nums[i] === any of the element in nums
                // return [i, index of element]
                if (j !== -1) return [i, j];
            };
        };
        return;
    };
};

// Easy / Fast / Simple / 52.13% / 106 ms / 41 MB

var twoSum = function(nums, target) {
    // check input
    if(!nums) return []
    
    // create map
    const map = new Map()
    
    // loop through
    for (let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
};

/* Two-pass Hash Table

eg. nums = [3,5,9,12,15], target = 21

const hashTable = {
	3: 0,
	5: 1,
	9: 2,
	12: 3,
	15: 4
}

1. Create a hashTable
2. Iterate nums
	2.1 Find the complement of nums[i] in the hashTable by checking the key of the hashTable object. In this way, the iteration time will be significantly reduced. If found, return [i, found]
3. If not found, return [0,0] */

var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let hashTable = {};
	for(let i = 0; i < len; i++){
		// Add a new obj to the hashTable where key = nums[i] and value = i
		hashTable[nums[i]] = i;
	}
	
    for(let i = 0; i < len; i++) {
        let complement = target - nums[i];
        let found = hashTable[complement]; // Determine whether the complement exist in the hashTable
        if(found !== undefined && found != i) return [i, found];
	}
	return [0,0];
}

/* An even faster solution with less memory consumption - One-pass hash table
Result: 68ms (beats 100%), 16 MB
Thanks for https://leetcode.com/problems/two-sum/discuss/182680/JavaScript-Beats-86 */

var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let map = {};
    for(let i = 0; i < len; i++) {
        let n = target - nums[i];
        let find = map[n];
        if(find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
};
