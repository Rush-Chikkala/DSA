function isPowerOf2(number){
    if(number <=0){
        return false
    }
    while(number %2 ==0){
        number= number /2
        // console.log("🚀 ~ isPowerOf2 ~ number:", number)
    }
    return number ==1
}

function isPowerOf2_1(number){
   return number>0 && (number & (number-1)) === 0
}

console.log(isPowerOf2(44))
console.log(isPowerOf2(64))
console.log(isPowerOf2(32))
console.log(isPowerOf2(2))
console.log(isPowerOf2(0))
console.log(isPowerOf2(-1))

console.log(isPowerOf2_1(44))
console.log(isPowerOf2_1(64))
console.log(isPowerOf2_1(32))
console.log(isPowerOf2_1(2))
console.log(isPowerOf2_1(0))
console.log(isPowerOf2_1(-1))

