// Divisors
// Write a function that returns an array of all of the divisors of the positive integer passed in as an argument. The return value can be in any sequence you wish, though its easiest to return them in order.

/*
declare a var integer and init to 1
while integer is less than or equal to the given number ,
see if the number is evenly divisible by integer, push integer to the array
add 1 to integer during each iteration 

*/
function divisors(num) {
  let result = [];

  for (let int = 1; int <= num / 2; int += 1) {
    if (num % int === 0) result.push(int);
  }

  result.push(num);
  return result;
}

let p = console.log;

p(divisors(1));          // [1]
p(divisors(7));          // [1, 7]
p(divisors(12));         // [1, 2, 3, 4, 6, 12]
p(divisors(98));         // [1, 2, 7, 14, 49, 98]

// This may take a minute or so to run
p(divisors(9995000429)); // [1, 99961, 99989, 9995000429]