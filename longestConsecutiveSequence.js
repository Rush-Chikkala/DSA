// Problem: Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
//
// Example 1:
//   Input: nums = [100, 4, 200, 1, 3, 2]
//   Output: 4
//   Explanation: The longest consecutive sequence is [1, 2, 3, 4]. Therefore its length is 4.
//
// Example 2:
//   Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
//   Output: 9
//   Explanation: The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]
//
// Example 3:
//   Input: nums = [9, 1, 4, 7, 3, 2, 8, 5, 6]
//   Output: 9
//   Explanation: The longest consecutive sequence is [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
function longestConsecutiveSequence(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
