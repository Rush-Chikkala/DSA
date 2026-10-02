// Problem Statement — Longest Substring With At Most K Distinct Characters
//
// Given a string s and an integer k, find the length of the longest contiguous substring that contains at most k distinct characters.
//
//     Examples
// s = "eceba", k = 2
// Output: 3
// Explanation: "ece" contains 2 distinct characters: e and c.
//     s = "aa", k = 1
// Output: 2
// s = "abcadcacacaca", k = 3
// Output: 11


function longestSubStringWithDistinctK(string, k) {
    let left = 0
    let seenMap = new Map()
    let maxLength = 0

    for (let right = 0; right < string.length; right++) {
        let char = string[right]

        seenMap.set(
            char,
            seenMap.has(char) ? seenMap.get(char) + 1 : 1
        )

        while (seenMap.size > k) {
            let delChar = string[left]
            let count = seenMap.get(delChar)

            if (count === 1) {
                seenMap.delete(delChar)
            } else {
                seenMap.set(delChar, count - 1)
            }

            left++
        }

        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}

console.log(longestSubStringWithDistinctK("eecba", 2))//3


// Time: O(n)
//
// Even though we have a while loop inside the for loop, it is still O(n).
//
//     Why?
//
//     right moves from left → right once: O(n)
// left also only moves left → right, never backward: O(n)
// Therefore total pointer movements are at most about 2n.
//
//     So:
//
// O(n) + O(n) = O(n)
//
// Space: O(k) in the usual analysis, because the map contains at most k + 1 distinct characters while processing the window. If the character set is fixed (e.g. lowercase English letters), this can be considered O(1).