function wordsContainingCharacter(array,ele){
    let indexes=[]
    for(let i=0; i<array.length;i++){
        for(let j=0;j<array[i].length ;j++){
            if(array[i][j] === ele){
                indexes.push(i)
                break;
            }
        }
    }
    return indexes

}
console.log(wordsContainingCharacter(["leet","code"],"e"))//[0,1]
console.log(wordsContainingCharacter(["abc", "bcd", "aaaa", "cbc"],"a"))//[0,2]

//timeCom O(m*n)
//space O(n)
// "The algorithm uses O(1) auxiliary space, excluding the output array. The output itself requires O(k) space, where k is the number of matching words."