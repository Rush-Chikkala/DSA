// Problem Statement:
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is defined as a maximal substring consisting of non-space characters only.

// Example:
// Input: s = “Hello World”
// Output: 5
// The last word is “World” with length 5.

// Input: s = ” fly me to the moon “
// Output: 4
// The last word is “moon” with length 4.

// Input: s = “luffy is still joyboy”
// Output: 6
// The last word is “joyboy” with length 6.

// Constraints:
// 1 ≤ s.length ≤ 104
// s consists of only English letters and spaces ' '
// There will be at least one word in s
// Approach:
// Start from the end of the string and skip any trailing spaces.
// Count the number of characters in the last word until a space or the beginning of the string is reached.
// This ensures we efficiently find the last word without extra space.
// Time and Space Complexity:
// Time Complexity: O(n) — Traverse the string once from the end.
// Space Complexity: O(1) — No extra space used apart from counters.



var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    while (n >= 0 && s[n] === ' ') n--;

    let count = 0;
    while (n >= 0 && s[n] !== ' ') {
        count++;
        n--;
    }

    return count;
};

console.log(lengthOfLastWord("Hello world"))
console.log(lengthOfLastWord("fly me to the moon"))
console.log(lengthOfLastWord("Hello"))
console.log(lengthOfLastWord("H"))
console.log(lengthOfLastWord("Hello workd   "))


//O(N) time and O(1) space