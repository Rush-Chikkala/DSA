function reverse(number){
    let copy = number
    number = Math.abs(number)
    let rev = 0 
    while(number>0){
        let rem = number % 10
        rev = rev * 10 + rem
        number = Math.floor(number/10)
    }
    if(rev > 2**(32-1)) return 0
    return copy<0?-rev:rev
}
console.log(reverse(123));
console.log(reverse(-123))
console.log(reverse(1534236469))