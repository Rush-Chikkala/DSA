function mergeSort(arr) {
    const result = [...arr]

    function divide(left, right) {
        if (left >= right) {
            return
        }

        const mid = Math.floor((left + right) / 2)

        divide(left, mid)
        divide(mid + 1, right)

        merge(left, mid, right)
    }

    function merge(left, mid, right) {
        const temp = []

        let i = left
        let j = mid + 1

        while (i <= mid && j <= right) {
            if (result[i] <= result[j]) {
                temp.push(result[i])
                i++
            } else {
                temp.push(result[j])
                j++
            }
        }

        while (i <= mid) {
            temp.push(result[i])
            i++
        }

        while (j <= right) {
            temp.push(result[j])
            j++
        }

        for (let k = 0; k < temp.length; k++) {
            result[left + k] = temp[k]
        }
    }

    divide(0, result.length - 1)

    return result
}






