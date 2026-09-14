function findLargest(arr) {
          let largest = -Infinity;
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
              largest = arr[i];
            }
          }
          return largest;
        }
let arr = [2, -6, 4, 8, 1, -9];
let result = findLargest(arr);
console.log("Result:", result); // Output: 8
      