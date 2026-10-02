function productExceptSelf(nums) {
   let leftProduct =1
   let rightProduct =1
   let result = []
   for(let i=0 ; i<nums.length ;i++){
      result.push(leftProduct)
      leftProduct = leftProduct * nums[i]
   }
   for(let i=nums.length-1 ; i>=0 ;i--){
      result[i]=(result[i] * (rightProduct))
      rightProduct = rightProduct * nums[i]
   }
    
   return result
}
console.log(productExceptSelf([1,2,3,4])) //[ 24, 12, 8, 6 ]
console.log(productExceptSelf([1,2,0,4])) //[ 0, 0, 8, 0 ]

// Time:  O(n)
// Space: O(1) extra

// result is technically O(n), but it's the required output, so we don't count it as extra space.