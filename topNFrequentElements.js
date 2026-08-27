// Problem: Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.
//
// Example 1:
//   Input: nums = [1, 1, 1, 2, 2, 3], k = 2
//   Output: [1, 2]
//
// Example 2:
//   Input: nums = [5, 2, 5, 1, 2, 5, 1, 1], k = 2
//   Output: [5, 1]
//   Explanation: 5 appears 3 times, 1 appears 3 times, 2 appears 2 times
//
// Example 3:
//   Input: nums = [1], k = 1
//   Output: [1]
//
function topkFrequentElements(array,k){
    let map = new Map()
    for(let ele of array){
        if(map.has(ele)){
            let frequency = map.get(ele)
                map.set(ele,frequency+1);
        }else{
            map.set(ele,1)
        }
    }
    console.log("map",map)
    console.log(map.entries())
    let sorted =[...map.entries()].sort((a,b)=>b[1]-a[1])
    console.log("sorted",sorted)
    let result =[]
   for(let i=0;i<k;i++){
       result.push(sorted[i][0])
   }
    return result
    
}

let result =topkFrequentElements([5,2,5,1,2,5,1,1],2)
console.log("result",result)

