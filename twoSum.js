function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [-1, -1];
}

let result = twoSum([1,2,7,11],9)
console.log("resu,t",result)


//hasmap technique 