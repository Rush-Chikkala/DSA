// Problem Statement:
// Given a binary array nums, return the maximum number of consecutive 1’s in the array.

// Examples
// Example 1:

// Input:nums = [1,1,0,1,1,1]

// Output:3

// Explanation The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:

// Input:nums = [1,0,1,1,0,1]

// Output:2

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
function maxConsecutiveones(array){
    let maxLength = 0
    let length = 0
    for(let ele of array){
        if(ele === 1){
            length ++
        }else{
           maxLength = Math.max(maxLength ,length)
           length = 0
        }
    }
          
    return Math.max(length,maxLength)

}
console.log(maxConsecutiveones([1,1,0,1,1,1]))
console.log(maxConsecutiveones([1,2,0,1,1,2]))
console.log(maxConsecutiveones([1,0,1,1,0,1]))

//Time Complexity O(N)
//Space Complexity O(1)