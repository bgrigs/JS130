// Find Missing Numbers
// Write a function that takes a sorted Array of integers as an argument, 
// and returns an array that includes all of the missing integers (in order) between the first and last elements of the argument.

function missing(array) {
  let result = [];
  let start = array[0];
  let end = array[array.length - 1];

  for (let int = start + 1; int < end; int++) {
    if (!array.includes(int)) result.push(int);
  }

  return result;
}


let p = console.log;

p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []