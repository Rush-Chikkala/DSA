
function mergeSort(arr){
    console.log(arr)
    function divide(arr){
        if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    return merge(divide(arr.slice(0,mid)),divide(arr.slice(mid,arr.length)))

    }
    return divide(arr)
    
}
// [2],[4] 

function merge(leftArray,rightArray){
    console.log("🚀 ~ merge ~ rightArray:", rightArray)
    console.log("🚀 ~ merge ~ leftArray:", leftArray)
    let leftPointer = 0
    let rightPointer =0
    let newArray = []
    while(leftPointer < leftArray.length && rightPointer < rightArray.length){
        if(leftArray[leftPointer]< rightArray[rightPointer]){
            newArray.push(leftArray[leftPointer])
            leftPointer++
        }else{
            newArray.push(rightArray[rightPointer])
            rightPointer++
        }
        
    }
    console.log("sdf",newArray)
    if(leftPointer < leftArray.length){
        newArray.push(...leftArray.slice(leftPointer))
    }else if(rightPointer< rightArray.length){
        newArray.push(...rightArray.slice(rightPointer))
    }
    console.log("🚀 ~ merge ~ newArray:", newArray)
    return newArray
    

}
console.log(mergeSort([6,2,4,1,5,3]))
// o(nlogn)
// logn levels as we are dividing and n comparisions at each level
// but here we are using arrays so its overhead of space complexity so will go for index based one


function merge_sort(array){
    function divide(left,right){
        if(left >= right){
            return;
        }
        let mid = Math.floor((left+right)/2)
        return merge(divide(left,mid),divide(mid+1,right))
    }

    function merge(left,mid,right){


    }

}
