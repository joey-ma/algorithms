function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

For example:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8
*/

const bstSum = root => {
  if (!root) return 0;
  const leftSum = bstSum(root.left);
  const rightSum = bstSum(root.right);

  return root.value + leftSum + rightSum;
};

let bst1;
bst1 = new BinarySearchTree(4);
bst1.left = new BinarySearchTree(2);
bst1.left.left = new BinarySearchTree(1);
bst1.left.right = new BinarySearchTree(3);
bst1.right = new BinarySearchTree(7);
bst1.right.right = new BinarySearchTree(9);
bst1.right.right.left = new BinarySearchTree(8);

console.log(bstSum(bst1)); // -> 34
