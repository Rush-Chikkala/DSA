/*Problem Statement:
Write a function secondLargest(arr) that returns the second largest distinct number in an array.

Requirements:
The array must contain at least two elements.
If all elements are equal, return: No second largest found.
If the array has fewer than two elements, return: Array should have at least two numbers.
Examples:
Input: arr = [0, 3, 5, 2, 7, 9] → Output: 7

Input: arr = [4, 4, 4, 4] → Output: No second largest found

Input: arr = [5] → Output: Array should have at least two numbers

Input: arr = [10, 20] → Output: 10

Constraints:
Time Complexity: O(n) — Single pass through the array.

Space Complexity: O(1) — Constant space.*/

// const array = [1,4,19,8,19,6] //duplicates
// const array =[10,10,10]
const array = [-5,-2,-10] 
// const array=[5]




// const sortedArray = array.sort((a,b)=>a-b)
// console.log(array)
// console.log(sortedArray)
// console.log(sortedArray[sortedArray.length-2])
// //O(n log n)


//Optimized approach O(n) time and O(1) space
function secondLargestNumber(array){
    let largest = -Infinity
    let secondLargest = -Infinity
    if(array.length<2){
        return "array length should be >2"
    }
    for(let ele of array){
        if(ele>largest){
            let temp = largest
            largest = ele;
            secondLargest = temp
        }else if(ele>secondLargest && ele<largest ){
            secondLargest = ele
        }
    }
   return secondLargest === -Infinity ? "No second largest found" : secondLargest

}
let result = secondLargestNumber(array)
console.log(result)
