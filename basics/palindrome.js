let number = 121

function isPalindrome(number){
    if(number < 0){
        return false
    }
    let rev = 0
    let temp =number
    while(number >0){
        let rem = number %10
        rev = rev * 10 + rem
        number = Math.floor(number/10)
      
    }
    if(rev === temp){return true}
    return false
}
console.log(isPalindrome(121))
console.log(isPalindrome(1))
console.log(isPalindrome(120))
console.log(isPalindrome(-121))
