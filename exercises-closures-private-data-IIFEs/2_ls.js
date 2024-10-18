function myBind(context, func, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);
    return func.apply(context, fullArgs);
  };
}

function addNumbers(a, b) { 
  return a + b;
}

const addFive = myBind(null, addNumbers, 5);

console.log(addFive(10)); // 15