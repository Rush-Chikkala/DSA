let array = [1, 2, 3, 5, 6, 9, 10]
function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (array[mid] == target) {
            return mid
        } else if (mid > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1

}
console.log(binarySearch(array, 4))

console.log(binarySearch(array, 2))

console.log(binarySearch(array, 10))
//o(logn) as we are dividing
