/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
  const obj = {};
  // track words with freq of appearances in obj
  // sort from most to least frequent strings
  // remove the strings after num k

  words.forEach((word) => (obj[word] === undefined ? obj[word] = 1 : obj[word] += 1));

  const filtered = Object.entries(obj).sort((a, b) => {
    console.log('a:', a, 'b:', b, 'a-b:', a[0].length - b[0].length);
    console.log('a[0].localeCompare(b[0]):', a[0].localeCompare(b[0]));
    if (a[0].charCodeAt(0) - b[0].charCodeAt(0) === 0) return a[0].length - b[0].length;
    if (b[1] - a[1] === 0) return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    return b[1] - a[1];
  });
  filtered.length = k;
  console.log('filtered:', filtered);

  const arr = filtered.map((el) => el[0]);

  return arr;
};

console.log(topKFrequent(['aaa', 'aa', 'a'], 1)); // -> ["a"]

console.log(topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4)); // -> ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2)); // -> ["i","love"]
// Explanation: "i" and "love" are the two most frequent words. Note that "i" comes before "love" due to a lower alphabetical order.
