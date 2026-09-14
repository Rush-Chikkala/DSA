// Problem
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Examples
// Input: nums = [2, 2, 1] → Output: 1
// Input: nums = [4, 1, 2, 1, 2] → Output: 4
// Input: nums = [1] → Output: 1
// Constraints
// 1 ≤ nums.length ≤ 3 × 104
// -3 × 104 ≤ nums[i] ≤ 3 × 104
// Each element appears twice except one that appears only once.

var singleNumber = function(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i];
        }
    }
};

//TIME o(n) SPACE o(N)

function single_number(array){
    let xor = 0
    for(let ele of array){
        xor = xor ^ ele
    }
    return xor
}

console.log(single_number([2,2,1]))
console.log(single_number([4,1,2,1,2]))
console.log(single_number([2, 3, 5, 2, 3]))

//Time Complexity O(N)
//Space Complecity O(1)