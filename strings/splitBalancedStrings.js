function splitBalancedStrings(string){
    let count = 0
    let noOfBalanced =0
    for(let char of string){
        if(char == 'R'){
            count++
        }else{
            count--
        }
        if(count == 0){
            noOfBalanced++
        }
    }
    return noOfBalanced

}
console.log(splitBalancedStrings("RLRRLLRLRL"))
console.log(splitBalancedStrings("RLRRLRLRL"))
console.log(splitBalancedStrings("R"))
console.log(splitBalancedStrings("RL"))

// Time: O(n)
// Space: O(1) 
