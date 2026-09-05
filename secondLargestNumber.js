// const array = [1,4,19,8,19,6] //duplicates
// const array =[10,10,10]
const array = [-5,-2,-10] 

// const sortedArray = array.sort((a,b)=>a-b)
// console.log(array)
// console.log(sortedArray)
// console.log(sortedArray[sortedArray.length-2])
// //O(n log n)


//Optimized approach O(n) time and O(1) space
function secondLargestNumber(array){
    let largest = -Infinity
    let secondLargest = -Infinity
    for(let ele of array){
        if(ele>largest){
            let temp = largest
            largest = ele;
            secondLargest = temp
        }else if(ele>secondLargest && ele<largest ){
            secondLargest = ele
        }
    }
   return secondLargest === -Infinity ? -1 : secondLargest

}
let result = secondLargestNumber(array)
console.log(result)
