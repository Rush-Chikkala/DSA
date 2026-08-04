function topkFrequentElements(array,k){
    let map = new Map()
    for(let ele of array){
        if(map.has(ele)){
            let frequency = map.get(ele)
                map.set(ele,frequency+1);
        }else{
            map.set(ele,1)
        }
    }
    console.log("map",map)
    console.log(map.entries())
    let sorted =[...map.entries()].sort((a,b)=>b[1]-a[1])
    console.log("sorted",sorted)
    let result =[]
   for(let i=0;i<k;i++){
       result.push(sorted[i][0])
   }
    return result
    
}

let result =topkFrequentElements([5,2,5,1,2,5,1,1],2)
console.log("result",result)

