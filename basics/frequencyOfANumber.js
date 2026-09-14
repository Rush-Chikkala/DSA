// function hasFrequency(array, frequency) {
//     const frequencyMap = new Map()

//     for (const ele of array) {
//         frequencyMap.set(
//             ele,
//             (frequencyMap.get(ele) || 0) + 1
//         )
//     }

//     for (const value of frequencyMap.values()) {
//         if (value === frequency) {
//             return true
//         }
//     }

//     return false
// }


function hasFrequency(array, frequency) {
    const frequencyMap = new Map()
    let count = 0
    for (const ele of array) {
        const oldFreq = frequencyMap.get(ele)
        const newFreq = (oldFreq || 0)+1
        frequencyMap.set(
            ele,newFreq
        )
        if(oldFreq && oldFreq === frequency){
            count --
        }
        if(newFreq === frequency){
            count ++
        }

    }
    return count>0
}

console.log(hasFrequency([1,2,3,5,5,3,5],3))
console.log(hasFrequency([1,2,3,5,5,3,5],4))
console.log(hasFrequency([1,2,2,3,4,4,4,4],4))