function reverseString(string){
    let start = 0
    let end = string.length-1
    let array = string.split("")
    console.log(array)
    while(start < end){
        console.log(start)
        let temp = array[end]
        array[end] = array[start]
        array[start] = temp
        start ++
        end --
    }
    return array.join("")
}
console.log(reverseString("rakesh"))