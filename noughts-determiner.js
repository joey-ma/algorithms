/*
Nought Determiner

Have the function NoughtsDeterminer(strArr) take the strArr parameter
being passed which will be an array of size eleven.
The array will take the shape of a Tic-tac-toe board with spaces
strAr[3] and strArr[7] being the separators (<>) between the rows,
and the rest of the spaces will be either *X. "O*, or"* which signifies an empty space.
So for example strArr may be /*X"*O"***$>".."*O****"*O**X°**1.
This is a Tic-tac-toe board with each row separated double arrows ("e").
Your program should output the space in the array by which any player could win by
putting down either an "X' or *O°. In the array above, the output should be
2 because if an "O' is placed in strArr[2] then one of the players wins.
Each board will only have one solution for a win, not multiple wins.
You output should never be 3 or 7 because those are the separator spaces.
*/

function NoughtsDeterminer(strArr) {
  const arr1 = strArr.slice(0, 3);
  const arr2 = strArr.slice(4, 7);
  const arr3 = strArr.slice(8, 11);

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);

  const lines = [
    // check horizontal
    [0, 1, 2],
    [4, 5, 6],
    [8, 9, 10],
    // check vertical
    [0, 4, 8],
    [1, 5, 9],
    [2, 6, 10],
    // check diagonal
    [0, 5, 10],
    [2, 5, 8],
  ];

  const obj = {};

  for (let i = 0; i < strArr.length; i++) {
    if (obj[strArr[i]] === undefined) {
      obj[strArr[i]] = [i];
    } else {
      obj[strArr[i]].push(i);
    }
  }

  console.log(obj);

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(a, b, c);
    let xCount = 0;
    let oCount = 0;
    let xWinningMove = 0;
    let oWinningMove = 0;

    if (obj.X.includes(a)) xCount += 1;
    else xWinningMove = a;
    if (obj.X.includes(b)) xCount += 1;
    else xWinningMove = b;
    if (obj.X.includes(c)) xCount += 1;
    else xWinningMove = c;

    if (obj.O.includes(a)) oCount += 1;
    else oWinningMove = a;
    if (obj.O.includes(b)) oCount += 1;
    else oWinningMove = b;
    if (obj.O.includes(c)) oCount += 1;
    else oWinningMove = a;

    console.log(xCount, oCount);

    if (xCount + oCount === 3) continue;
    if (xCount === 2) return xWinningMove;
    if (oCount === 2) return oWinningMove;
  }
}

console.log(NoughtsDeterminer(['X', 'O', '-', '<>', '-', 'O', '-', '<>', 'O', 'X', '-'])); // expect 2

console.log(NoughtsDeterminer(['X', '-', 'O', '<>', '-', '-', 'O', '<>', '-', '-', 'X'])); // expect 5

console.log(NoughtsDeterminer(['X', 'O', 'X', '<>', '-', 'O', 'O', '<>', 'X', 'X', 'O'])); // expect 4
