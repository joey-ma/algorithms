/*

1. Flipping the Matrix
Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the n x n submatrix located in the upper-left quadrant of the matrix.

Given the initial configurations for q matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

Example

matrix = [ [1, 2], [3, 4] ]
1 2
3 4

It is 2 x 2 and we want to maximize the top left quadrant, a 1 x 1 matrix. Reverse row 1:

1 2
4 3

And now reverse column 0:

4 2
1 3

The maximal sum is 4.

Function Description

Complete the flippingMatrix function in the editor below.

flippingMatrix has the following parameters:
- int matrix[2n][2n]: a 2-dimensional array of integers

Returns
- int: the maximum sum possible.

Input Format

The first line contains an integer , the number of queries.

The next  sets of lines are in the following format:

The first line of each query contains an integer, .
Each of the next  lines contains  space-separated integers  in row  of the matrix.
Constraints

, where .
Sample Input

STDIN           Function
-----           --------
1               q = 1
2               n = 2
112 42 83 119   matrix = [[112, 42, 83, 119], [56, 125, 56, 49], \
56 125 56 49              [15, 78, 101, 43], [62, 98, 114, 108]]
15 78 101 43
62 98 114 108
Sample Output

414
Explanation

Start out with the following  matrix:

Perform the following operations to maximize the sum of the  submatrix in the upper-left quadrant:

Reverse column  (), resulting in the matrix:
Reverse row  (), resulting in the matrix:
The sum of values in the  submatrix in the upper-left quadrant is .

 */

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
  if (matrix === undefined || matrix.length === 0) return;

  // compare:
  // 1st element to last element in "matching" row
  // top element to bottom element in "matching" column
  // if there's one element: return the largest element in array
  // if there's more than one element in each quadrant array: return the sum all nums in quadrant

  const last = matrix.length - 1;
  const middle = matrix.length / 2; // 0, 2 (x 2) -> 1, 4 (x 4) -> 2, 6 (x 6) -> 3
  let sum1 = 0;
  let sum2 = 0;
  const sum = [];

  for (let i = 0; i < middle; i++) {
    let larger = 0;
    for (let j = 0; j < middle; j++) {
      console.log('matrix[i][j]:', matrix[i][j], 'i', i, 'j', j);
      console.log('matrix[i][last - j]:', matrix[i][last - j], 'i', i, 'last - j', last - j);
      //
      larger = Math.max(matrix[i][j], matrix[i][last - j]);
      //
      sum.push(larger);
    }
    const row = matrix[i];
    if (i + middle < matrix.length) break;
    if (Array.isArray(row)) {
      return flippingMatrix(row);
    }
    sum1 = Math.max(...row);
    sum2 = Math.max(...matrix[middle]);
  }

  return Math.max(sum1, sum2);
}

flippingMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]);

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const q = parseInt(readLine().trim(), 10);

//   for (let qItr = 0; qItr < q; qItr++) {
//     const n = parseInt(readLine().trim(), 10);

//     let matrix = Array(2 * n);

//     for (let i = 0; i < 2 * n; i++) {
//       matrix[i] = readLine()
//         .replace(/\s+$/g, "")
//         .split(" ")
//         .map((matrixTemp) => parseInt(matrixTemp, 10));
//     }

//     const result = flippingMatrix(matrix);

//     ws.write(result + "\n");
//   }

//   ws.end();
// }
