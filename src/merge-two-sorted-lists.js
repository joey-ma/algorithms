// leetcode 21. Merge Two Sorted Lists

/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = function (list1, list2) {
  // your code here
};

// approach by creating a new linked list
// using list1 and list2 directly (losing reference to their head)

const mergeTwoLists1 = function (list1, list2) {
  const mergedList = new ListNode(); // dummy head
  let currentNode = mergedList; // pointer to the head
  // also can be thought of as tail, and the tail will be continously build out

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    
    currentNode = currentNode.next;
  }

  if (list1) currentNode.next = list1;
  // else currentNode.next = list2; // also works
  if (list2) currentNode.next = list2; // but this makes more sense and is more methodical 

  return mergedList.next;
};

// Test Cases

// create the linked lists for the current file to use
const LL1 = [1, 2, 4].reduce(createLinkedList);
const LL2 = [1, 3, 4].reduce(createLinkedList);

function createLinkedList(acc, curr, i, arr) {
  if (i === 1) return new ListNode(acc, new ListNode(curr));

  if (acc !== null) {
    if (arr[i + 1] === undefined) acc.next.next = new ListNode(curr);
  }
  return acc;
}

console.log(LL1); // [1,2,4]
console.log(LL2); // [1,3,4]

mergeTwoLists1(LL1, LL2); // [1,1,2,3,4,4]
