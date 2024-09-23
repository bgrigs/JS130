// Write a function that acts like the built-in Array.prototype.filter method. For this problem, you only need to emulate the most basic behavior: filtering elements of an array by examining the array values. You don't have to support multiple arguments to the callback function, but feel free to add them if you like. Your function should work like this:


function filter(array, callback) {
  let newArr = [];

  for (let index = 0; index < array.length; index += 1) {
    let value = array[index];
    if (callback(value)) newArr.push(value);
  }

  return newArr; 
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]