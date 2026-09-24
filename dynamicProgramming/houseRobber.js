// You are given an array where each element represents the money in a house:

// nums = [2, 3, 2]

// You want to steal the maximum amount of money, but:

// If you rob two adjacent houses, the alarm goes off.

// There is one additional condition:

// The houses are arranged in a circle.

function robLinear(array,start,end){
    let prev1 =0
    let prev2 =0
    for(let i=start ;i<=end;i++){
        let number = array[i]
        let current = Math.max(number+prev2,prev1)
        let temp = prev1
        prev1 = current
        prev2 = temp
    }
    return prev1


}

function robCircular(array){
   if(array.leggth ==1){
    return array[1]
   }
   let sum1= robLinear(array,0,array.length-2)
   let sum2 = robLinear(array,1,array.length-1)
   return Math.max(sum1,sum2)
}

console.log(robCircular([2,7,9,3])) //11

// Complexity

// For each linear pass:

// Time: O(n)
// Space: O(1)

// Two passes are still:

// Time: O(n)
// Space: O(1)