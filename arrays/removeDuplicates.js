// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


// Consider the number of unique elements of nums to be k. To get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important, as well as the size of nums. eturn k.
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output =[0,1,2,3,4]
// function removeDuplicates(array){
//     let lastNumber
//     let count=0
//     for(let i=0 ; i<array.length ;i++){
//         console.log("lastnumber",lastNumber)
//         let temp = lastNumber
//         lastNumber = array[i]
//         if(temp != null && temp == array[i]){
//             console.log(i,array[i])
//             array.splice(i,1)
//             i--
//             count++
//         }
//         console.log(array)
      
//     }
//     return {array,count}
// }


function removeDuplicates(array){
    let lastUniquePosition = 0
    for(let i=1; i<array.length;i++){
        if(array[i]!=array[lastUniquePosition]){
            array[lastUniquePosition+1] = array[i]
            lastUniquePosition++
        }
    }
    return lastUniquePosition+1

}
let array = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(array))
console.log(array)

// O(n) time and o(1) space