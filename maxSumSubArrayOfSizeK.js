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
    let maxSum = 0;
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