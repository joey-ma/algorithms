class TrieNode {
    constructor() {
        this.children = {}; // tracks prefix words
        this.count = 0 // tracks how many words pass through this node
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    add(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
        }
    }
    findUniquePrefix(word) {
        let node = this.root;
        let prefix = '';
        for (const char of word) {
            prefix += char;
            node = node.children[char];
            if (node.count === 1) {
                return prefix; // found unique prefix
            }
        }
        return prefix; // the full word is unique
    }
}

// i: array of words
// o: array of unique prefixes
function findShortestUniquePrefixes(words) {
    const trie = new Trie();

    for (const word of words) {
        trie.add(word);
    }

    const output = [];
    for (const word of words) {
        const uniquePrefix = trie.findUniquePrefix(word);
        output.push(uniquePrefix);
    }

    return output; // shortest unique prefixes
}

// example usage
const words = ["dog", "cat", "apple", "apricot", "fish"];
console.log(findShortestUniquePrefixes(words)); 
// output: ["d", "c", "app", "apr", "f"]