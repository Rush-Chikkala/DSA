// 3Sum — Problem Statement

// Given an integer array nums, find all unique triplets [a, b, c] such that:

// a + b + c = 0

// The same value combination should not appear more than once.

// Example
// Input:
// [-1, 0, 1, 2, -1, -4]

// Output:
// [
//     [-1, -1, 2],
//     [-1, 0, 1]
// ]

// The order of the triplets does not matter.

// Your solution should handle:

// [-1, -1, -1, 2]
// → [[-1, -1, 2]]

// [0, 0, 0, 0]
// → [[0, 0, 0]]

// [1, 2, 3]
// → []

// []
// → []

// [0]
// → []

// [0, 0]
// → []




// 1. Sort the array.

// 2. Fix one element using i.

// 3. Use two pointers for the remaining two elements:
//       left = i + 1
//       right = n - 1

// 4. Calculate:
//       nums[i] + nums[left] + nums[right]

// 5. If sum < 0:
//       left++

// 6. If sum > 0:
//       right--

// 7. If sum === 0:
//       store triplet
//       move both pointers
//       skip duplicate values

// 8. Skip duplicate i values.

// 9. Once nums[i] > 0, stop.

function threeSum(array){
    array.sort((a,b)=>a-b)
    let triplets = []
    for(let i=0;i<array.length-2;i++){
        let left = i+1
        let right= array.length-1
        if(array[i]>0){
            break;
        }
        if(i>0 && array[i] == array[i-1]){
            continue;
        }
        
        while(left < right){
            let sum = array[i]+array[left]+array[right]
            if(sum < 0){
                left ++
            }else if(sum > 0){
                right --
            }else{
                triplets.push([array[i],array[left],array[right]])
                left ++
                right --
                while(left <right && array[left] === array[left-1] ){
                  left ++
                }
                while(left <right && array[right] === array[right+1] ){
                 right --
                }
            }
        }
    }
    return triplets

}
console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0,0,-1,-4]))
console.log(threeSum([0,0]))
console.log(threeSum([0,0,1]))



// Complexity
// Time

// Sorting:

// O(n log n)

// Outer loop:

// O(n)

// For every i, two pointers scan at most O(n):

// O(n) × O(n) = O(n²)

// Therefore:

// O(n log n) + O(n²)
// = O(n²)

// Time: O(n²)

// Space

// Ignoring the returned result:
// O(1) extra space

// because we're using only i, left, and right.

// The output itself can require up to O(n²) space in the worst case because there can be many unique triplets.

// Space: O(1) auxiliary space, excluding output.