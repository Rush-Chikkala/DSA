function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr = [2, -6, 4, 8, 1, -9];
let result = countNegativeNumbers(arr);
console.log("Result:", result); // Output: 2