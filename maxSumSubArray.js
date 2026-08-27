// Problem: Maximum Subarray (Kadane's Algorithm)
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// Example 1:
//   Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//   Output: 6
//   Explanation: [4, -1, 2, 1] has the largest sum = 6
//
// Example 2:
//   Input: nums = [1]
//   Output: 1
//
// Example 3:
//   Input: nums = [5, 4, -1, 7, 8]
//   Output: 23
//   Explanation: [5, 4, -1, 7, 8] has the largest sum = 23
//

// function maxSum(array){
//    let maxSum =array[0]
//    let sum = array[0]
//    for(let start=1 ; start<array.length;start++){
//         let newSum = sum +array[start]
//         if(array[start] >newSum){
//             sum = array[start]
//         }else{
//             sum = newSum
//         }
//         maxSum = Math.max(newSum,maxSum)

//    }
//    return maxSum
// }

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSum(array))

function maxSum(array) {
  let sum = array[0];
  let maxSum = array[0];

  for (let i = 1; i < array.length; i++) {
    sum = Math.max(array[i], sum + array[i]);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

//return subArray not sum

function maxSumElements(array) {
    let sum = array[0];
    let maxSum = array[0];

    let start = 0;
    let maxStart = 0;
    let maxEnd = 0;

    for (let i = 1; i < array.length; i++) {

        if (array[i] > sum + array[i]) {
            sum = array[i];
            start = i;
        } else {
            sum += array[i];
        }

        if (sum > maxSum) {
            maxSum = sum;
            maxStart = start;
            maxEnd = i;
        }
    }

    return array.slice(maxStart, maxEnd + 1);
}
console.log(maxSumElements(array));
