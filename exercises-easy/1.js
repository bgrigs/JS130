// Find Missing Numbers
// Write a function that takes a sorted Array of integers as an argument, 
// and returns an array that includes all of the missing integers (in order) between the first and last elements of the argument.

function range(start, end) {
  let missingNums = [];
  let nextMissingNum = start + 1;

  while (nextMissingNum !== end) {
    missingNums.push(nextMissingNum);
    nextMissingNum += 1;
  }

  return missingNums;
}

function missing(array) {
  let missingNums = []; 

  for (let idx = 0; idx < array.length - 1; idx++) {
    let currentNum = array[idx];
    let nextNum = currentNum + 1;
    let nextElem = array[idx + 1];

    if (nextNum !== nextElem) {
      missingNums.push(nextNum);
      missingNums = missingNums.concat(range(nextNum, nextElem));
    }
  }

  return missingNums; 
}

let p = console.log;

p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []