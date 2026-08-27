// Problem: Count Pairs with Given Sum
// Given an array of integers and a target value, count the number of pairs of elements in the array that sum to the target.
// Note: Count all pairs, including duplicates.
//
// Example 1:
//   Input: array = [1, 5, 7, -1, 5], target = 6
//   Output: 3
//   Explanation: Pairs are (1, 5), (1, 5), (7, -1)
//
// Example 2:
//   Input: array = [1, 1, 1, 1], target = 2
//   Output: 6
//   Explanation: All combinations of pairs that sum to 2: (1,1) appears 6 times
//
// Example 3:
//   Input: array = [1, 5, 7, -1], target = 6
//   Output: 2
//   Explanation: Pairs are (1, 5) and (7, -1)
//
let array = [1, 5, 7, -1, 5]
// let array = [1,1,1,1]
// let k=2
let k = 6
// function countPairsSumToTargtet(array,target){
//     let seen = new Map()
//     let count =0
//     for(let i=0;i<array.length;i++){
//         let rem = target - array[i]
//         if(seen.has(rem)){
//           count = count+ (seen.get(rem)?seen.get(rem).length:0)
//         }
//         if(seen.has(array[i])){
//             seen.get(array[i]).push(i)
//         }else{
//             seen.set(array[i],[i])
//         }
//     }
//     return count
// }
// console.log(countPairsSumToTargtet(array,k))





function countPairsSumToTargtet2(array,target){
    let seen = new Map()
    let count =0
    for(let i=0;i<array.length;i++){
        let rem = target - array[i]
        if(seen.has(rem)){
          count = count+ (seen.get(rem))
        }
        seen.set(array[i],(seen.get(array[i])||0)+1)
    }
    return count
}
console.log(countPairsSumToTargtet2(array,k))