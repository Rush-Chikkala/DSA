// Problem: Maximum Sum Subarray of Size K (Sliding Window)
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.
//
// Example 1:
//   Input: array = [2, 1, 5, 1, 3, 2], k = 3
//   Output: 9
//   Explanation: Subarray with maximum sum is [5, 1, 3]
//
// Example 2:
//   Input: array = [2, 3, 4, 1, 5], k = 2
//   Output: 7
//   Explanation: Subarray with maximum sum is [3, 4]
//
// Example 3:
//   Input: array = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
//   Output: 39
//   Explanation: Subarray with maximum sum is [4, 2, 10, 23]
//
// function maxSumSubArrayofSizeK(array,k){
//     let max_sum =0
//     let left =0 
//     let sum=0
//     for(let right=0 ; right<array.length; right++){
//          if(right<k){
//              sum = sum+array[right]
            
//          }else{
//              sum = sum+array[right] - array[left]
//              left ++
//          }
//          max_sum = Math.max(sum,max_sum)
//     }
//     return max_sum
// }
// console.log("njj",maxSumSubArrayofSizeK([2,7,5,1,3,2],3))
// arr = [2,1,5,1,3,2]
// k = 3
// [5,1,3] → sum = 9
// 2+1+5 =8
// 8+1-2=7
// right = 2,3,4,5
//above code is correct but we can optimize it by removing the if condition and just check if right is greater than or equal to k-1 then we can calculate the max sum and shrink the window. Below is the optimized code.



function maxSumSubArrayofSizeK(arr, k) {
    let windowSum = 0;
    let maxSum = -Infinity;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        // when window size reaches k
        if (right >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);

            // shrink window
            windowSum -= arr[left];
            left++;
        }
    }

    return maxSum;
}

console.log(maxSumSubArrayofSizeK([2,1,5,1,3,2],3));


// This pattern appears in real backend systems:

// API rate limiting (requests per window)

// log aggregation

// streaming analytics

// rolling metrics (last N events)

// moving averages



function maxSubArray(array,k){ //maxSum =8
    let maxSum =0
    let left =0
    let sum =0
    let maxSumStartIndex =0
    for(let right=0;right<array.length;right++){
       sum = sum+array[right]
       console.log('sum', sum)
       if(right>=k-1){
          if(sum>maxSum){
             maxSumStartIndex = left
          }
          maxSum = Math.max(sum,maxSum)
          console.log('maxSum', maxSum)
          sum = sum-array[left]
          left++
       }
    }
    console.log(maxSumStartIndex)
    return array.slice(maxSumStartIndex,maxSumStartIndex+k)
}

array = [2, 1, 5, 1, 3, 2]
        // 0   1  2  3  4  5     0 to 3   1 to 4 2to 
k = 3
console.log(maxSubArray(array,3))

//returns the actual elements instead of sum 