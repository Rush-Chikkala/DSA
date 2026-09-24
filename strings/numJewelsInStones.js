function numJewelsInStones(jewels,stones){
    const jewelsSet = new Set(jewels)
    let count = 0
    for(let stone of stones){
        if(jewelsSet.has(stone)){
            count ++
        }
    }
    return count
}

console.log(numJewelsInStones("aA","aAAbbbb")) //3
console.log(numJewelsInStones("z","ZZ")) //0