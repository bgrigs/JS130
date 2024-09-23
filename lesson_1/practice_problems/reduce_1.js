// Write a function that acts like the built-in Array.prototype.reduce method. For this problem, you only need to emulate the most basic behavior: reducing the elements of an array down to a single value based on the original array values. The result may be a primitive value, an object, or another array. You don't have to include the thisArg argument or support multiple arguments to the callback function, but feel free to add them if you like. Your function should work like this:

let numbers = [1, 2, 3, 4, 5];

function reduce(array, callback, initialVal) {
  let accum = initialVal;
  let index = 0;

  if (accum === undefined) {
    accum = array[0];
    index = 1;
  }
    
  while (index < array.length) {
    let value = array[index];
    accum = callback(accum, value);
    index += 1;
  }

  return accum; 
}

console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number)); // => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, [])); // => ["Curly", "Larry", "Mo"]