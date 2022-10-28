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

const mergeTwoLists1 = function (list1, list2) {
  const mergedList = new ListNode(-99);
  let currentNode = mergedList;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      console.log('Here', list1);
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      console.log('Here', list2);
      list2 = list2.next;
    }
    // console.log('mergedList:', mergedList);
    currentNode = currentNode.next;
    // console.log('currentNode:', currentNode);
  }

  if (list1 === null) {
    currentNode.next = list2;
  } else {
    currentNode.next = list1;
  }

  console.log(mergedList.next);
  return mergedList.next;
};

function createLinkedList(acc, curr, i, arr) {
  if (i === 1) return new ListNode(acc, new ListNode(curr));

  if (acc !== null) {
    if (arr[i + 1] === undefined) acc.next.next = new ListNode(curr);
  }
  return acc;
}

const LL1 = [1, 2, 4].reduce(createLinkedList);
const LL2 = [1, 3, 4].reduce(createLinkedList);

console.log(LL1);
console.log(LL2);

mergeTwoLists1(LL1, LL2);
