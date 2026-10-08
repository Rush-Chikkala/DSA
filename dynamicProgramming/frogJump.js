function frogJump(array) {
    if (array.length <= 1) return 0;
 
    let prev2 = 0;
    let prev1 = Math.abs(array[1] - array[0]);
 
    for (let i = 2; i < array.length; i++) {
        let temp = prev1;
 
        prev1 = Math.min(
            prev1 + Math.abs(array[i] - array[i - 1]),
            prev2 + Math.abs(array[i] - array[i - 2])
        );
 
        prev2 = temp;
    }
 
    return prev1;
}