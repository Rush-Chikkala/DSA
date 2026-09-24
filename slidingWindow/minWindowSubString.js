// Minimum Window Substring

// Given two strings s and t, find the smallest substring of s that contains all characters of t, including duplicate characters.

// If no such substring exists, return an empty string "".

// You may assume that the answer is unique if one exists.

// Example 1
// s = "ADOBECODEBANC"
// t = "ABC"

// Output:

// "BANC"

function minWindowSubString(s,t){
    let frequecyMap = new Map()
    buildFrquecyMap(t)
    let left=0
    let windowMap = new Map()
    let minStart=0
    let minLength =Infinity
    let matched =0
    for(let right=0 ;right<s.length;right++){
        let ele = s[right]
        if(frequecyMap.has(ele)){
            let count = windowMap.has(ele)?windowMap.get(ele)+1:1
            windowMap.set(ele,count)
            if(frequecyMap.get(ele) >= count ){
                matched++
            }
            while(matched == t.length){
                let length = right - left+1
                if(length < minLength){
                    minStart =left
                    minLength= length
                }
                let leftEle = s[left]
                if(frequecyMap.has(leftEle) && windowMap.get(leftEle) <= frequecyMap.get(leftEle)){
                    matched --
                }
                windowMap.set(leftEle,windowMap.get(leftEle)-1)
                left++
                
            }
        }
    }

    function buildFrquecyMap(t){
        for(let char of t){
            frequecyMap.set(char,frequecyMap.has(char)?frequecyMap.get(char)+1:1)
        }
    }
    return minLength == Infinity ? "" : s.slice(minStart,minStart+minLength)

}

console.log(minWindowSubString("ADOBECODEBANC", "ABC"))
console.log(minWindowSubString("abaac", "aac"))



// 1. Complexity

// Let:

// n = s.length
// m = t.length
// Time: O(n + m)

// At first it may look like O(n²) because you have:

// for (let right = 0; right < s.length; right++) {
//     ...
//     while (matched === t.length) {
//         ...
//         left++;
//     }
// }

// But the while does not run n times for every right.

// right moves only forward:

// 0 → 1 → 2 → 3 → ... → n

// And left also moves only forward:

// 0 → 1 → 2 → 3 → ... → n

// So across the entire algorithm, left can move at most n times and right can move at most n times.

// Therefore:

// right movements = O(n)
// left movements  = O(n)
// building t map = O(m)

// total = O(n + m)
// Space: O(k)

// We have:

// frequencyMap
// windowMap

// where k is the number of distinct characters we're tracking.