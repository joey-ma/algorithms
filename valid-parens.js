/* LC 20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type. 

  Example 1:

  Input: s = "()"
  Output: true

  Example 2:

  Input: s = "()[]{}"
  Output: true

  Example 3:

  Input: s = "(]"
  Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'. */

/**
 * @param {string} s
 * @return {boolean}
 */

// approach using object literal

var isValid = function(s) {
    const store = {'(':  ')', '{': '}', '[': ']'}; // 
    const stack = [];

    for (const char of s) {
        const last_closing_bracket = stack[stack.length - 1];
        // store[char] -> implies char === '(' or '{' or '[' -> gets matching closing bracket
        if (store[char]) stack.push(store[char]); // push to stack matching closing bracket

        else if (char === last_closing_bracket) stack.pop();
        
        else return false
    }

    return stack.length === 0;
}

/* Note:
Here, the choice of using a `for...of` loop instead of a traditional `for` loop is based solely on code readability.

The for...of loop is generally slower than the traditional for loop when iterating over an array or other iterable object because it uses a generator and an iterator to access the elements of the iterable. This extra overhead can add up over many iterations, making the for loop faster in some cases.

On the other hand, the for...of loop can be faster than the traditional for loop when iterating over other types of iterable objects that have a large number of elements or where the cost of accessing elements is high. For example, iterating over the values of a Map or Set using a for...of loop is generally faster than using a traditional for loop.

In general, the performance difference between the two types of loops is small and usually not significant enough to make a big difference in most applications. */

// approach using switch statement

var isValid = function(s) {
    const stack = [];
    
    // iterate through s
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{' ) {
            stack.push(char);
            continue;
        }
        
        if (stack.length === 0) return false;
        
        let lastBracket;
        switch (char) {
            case ')': 
                lastBracket = stack.pop();
                if (lastBracket !== '(') return false;
                break;
            case ']': 
                lastBracket = stack.pop();
                if (lastBracket !== '[') return false;
                break;
            case '}': 
                lastBracket = stack.pop();
                if (lastBracket !== '{') return false;
                break;
        }
    }
    
    return (stack.length === 0)
};

/* Note:
A switch statement is O(n), while a hash table lookup (presumably used to find methods in object literals) is (amortized) O(1). 

(Switch statements are O(logN) if the statements can be ordered by frequency.)

But Big-O measures only accurately describe how performance scales over really big inputs. 

Here, it's not surprising that 3 if statements are faster than a hash table lookup. 

For 3-5 cases, if & switch statements are likely faster than a table lookup, but roughly 40 cases will prove that a table lookup will be faster than if & switch statements. */
