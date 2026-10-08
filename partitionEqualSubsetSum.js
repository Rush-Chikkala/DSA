
function canMakeTarget(array,target,index,currentSum,map){
    const key = `${index}-${currentSum}`
    if(map.has(key)){
        return map.get(key)
    }

    if(currentSum>target){
        map.set(key,false)
        return false
    }
    if(currentSum === target){
         map.set(key,true)
        return true
    }
    if(index > array.length-1){
         map.set(key,false)
        return false
    }
    const result =
    canMakeTarget(
        array,
        target,
        index + 1,
        currentSum + array[index],
        map
    ) ||
    canMakeTarget(
        array,
        target,
        index + 1,
        currentSum,
        map
    );

    map.set(key, result);
    return result; 
    
}

function partitionEqualSubSetSum(array){
    let sum = calculateSum(array)
    if(sum%2 !=0 ){
        return false
    }
    console.log("🚀 ~ partitionEqualSubSetSum ~ sum:", sum)
    let map = new Map()
    return canMakeTarget(array,sum/2,0,0,map)
}

function calculateSum(array){
    let sum=0
    for(let i=0;i<array.length;i++){
        sum = sum+array[i]
    }
    return sum
}
console.log(partitionEqualSubSetSum([1,2,3,4]))

// index:       0 ... n-1       → n possibilities
// currentSum:  0 ... target    → target possibilities
// Time:  O(n × target)
// Space: O(n × target)