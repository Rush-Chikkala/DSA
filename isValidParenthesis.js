// Problem: Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//   1. Open brackets must be closed by the same type of brackets.
//   2. Open brackets must be closed in the correct order.
// Example 1:
//   Input: "()[]{}"
//   Output: true
// Example 2:
//   Input: "(]"
//   Output: false
// Example 3:
//   Input: "([{}])"
//   Output: true
//
function isValidParenthesis(string) {
    const stack = [];

    const map = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    if (string.length % 2 !== 0) return false; // if the length of the string is odd, it cannot be valid

    for (let char of string) {

        // opening bracket
        if (map.hasOwnProperty(char)) {
            stack.push(char);
        } 
        // closing bracket
        else {
            if (stack.length === 0) return false;

            const top = stack.pop();

            if (char !== map[top]) {
                return false;
            }
        }
    }

    return stack.length === 0;//to handle ((( scenario where we have more opening brackets than closing brackets. In that case, the stack will not be empty at the end of the loop, and we should return false.)
}
console.log(isValidParenthesis("(((}))"))

// "()[]{}" → true
// "(]"     → false
// "([{}])" → true
// "([]){}" ->true


//saving closed brackets instead of opening brackets

// const map = {
//     "(": ")",
//     "{": "}",
//     "[": "]"
// };

// function isValidParenthesis(str) {
//     const stack = [];

//     for (const ch of str) {

//         if (map[ch]) {
//             stack.push(map[ch]); // push expected closing bracket
//         } else {
//             if (stack.pop() !== ch) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }