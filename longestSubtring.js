// Problem: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
//   Input: "abcabcbb"
//   Output: 3
//   Explanation: The answer is "abc", with the length of 3.
// Example 2:
//   Input: "bbbbb"
//   Output: 1
//   Explanation: The answer is "b", with the length of 1.
// Example 3:
//   Input: "pwwkew"
//   Output: 3
//   Explanation: The answer is "wke", with the length of 3.
//
function longestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // duplicate found inside window
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }

        map.set(char, right);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestSubstring("abcdafbcbb")); // 6 ("bcda f" → actually "abcdaf")
console.log(longestSubstring("bbbbb")); // 1 ("b")
console.log(longestSubstring("pwwkew")); // 3 ("wke")
//hasdmap technique and sliding window technique
