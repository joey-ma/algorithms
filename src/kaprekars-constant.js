/* Have the function KaprekarsConstant(num) take the num parameter
being passed which will be a 4-digit number with at least two distinct digits.
Your program should perform the
following routine on the number: Arrange
the digits in descending order and in
ascending order (adding zeroes to fit it to a
4-digit number), and subtract the smaller
number from the bigger number.

Then repeat the previous step. Performing this
routine will always cause you to reach a
fixed number: 6174. Then performing the
routine on 6174 will always give you 6174
(7641 - 1467 = 6174).

Your program should
return the number of times this routine
must be performed until 6174 is reached.
For example: if num is 3524 your program
should return 3 because of the following
steps: (1) 5432 - 2345 = 3087, (2) 8730 -
0378 = 8352, (3) 8532 - 2358 = 6174.
*/

function KaprekarsConstant(num) {
  function KaprekarsCount(number, finalCount = 0) {
    // base case
    if (number === 6174) return finalCount;

    const paddedNum = number.toString().padStart(4, '0');
    const larger = paddedNum.split('').sort().reverse().join('');
    const smaller = paddedNum.split('').sort().join('');
    const outcome = larger - smaller;

    return KaprekarsCount(outcome, finalCount + 1);
  }
  return KaprekarsCount(num);
}

KaprekarsConstant(7641); // expect 1
KaprekarsConstant(3524); // expect 3
KaprekarsConstant(2111); // expect 5
KaprekarsConstant(9831); // expect 7
