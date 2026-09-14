// Given an integer array, move all 0s to the end while maintaining the relative order of the non-zero elements, in-place.

function moveZeroes(array){
    let slowPointer = 0
    for(let fastPointer =0 ;fastPointer<array.length; fastPointer++){
        if(array[fastPointer] !== 0){
            let temp = array[slowPointer]
            array[slowPointer] = array[fastPointer]
            array[fastPointer] = temp

            slowPointer++
        }
    }

}
let array = [0,1,0,3,12]
moveZeroes(array)
console.log(array)

// TIME O(n)
// Space O(1)