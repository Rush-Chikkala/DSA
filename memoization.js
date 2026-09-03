//function remembering its lexical scope even after outer function excetuin completed forms a closure
// function outer(){
//     let a = 10
//     return function inner(){
//          console.log(a)
//          a++
//          console.log(a)
//     }

// }

// const c = outer()
// c()

// const b = outer()
// b()

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function outer(fn) {
  // console.log('fn', fn)
  const cache = new Map();
  return function memo(a, b) {
    const key = `${a} + ${b}`;
    if (cache.has(key)) {
      console.log("inside cache");
      return cache.get(key);
    } else {
      const result = fn(a, b);
      cache.set(key, result);
      return result;
    }
  };
}
const add = outer(addition);
console.log(add(1, 2));
console.log(add(2, 3));
console.log(add(1, 2));

const sub = outer(subtraction);
console.log(sub(1, 2));
console.log(sub(2, 3));
console.log(sub(1, 2));
console.log(sub(5, 2));

