// function maxSum(array){
//    let maxSum =array[0]
//    let sum = array[0]
//    for(let start=1 ; start<array.length;start++){
//         let newSum = sum +array[start]
//         if(array[start] >newSum){
//             sum = array[start]
//         }else{
//             sum = newSum
//         }
//         maxSum = Math.max(newSum,maxSum)

//    }
//    return maxSum
// }

// let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// console.log(maxSum(array))

function maxSum(array) {
    let sum = array[0]
    let maxSum = array[0]

    for (let i = 1; i < array.length; i++) {
        sum = Math.max(array[i], sum + array[i])
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum
}