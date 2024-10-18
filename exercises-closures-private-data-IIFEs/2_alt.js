// Our earlier implementation of the Function.prototype.bind was simplistic. Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application.

// Alter the myBind function written in the previous exercise to support partial function application of additional arguments to the original function.

function myBind(context, func, ...initialArgs) {
  return function(...remainingArgs) {
    return func.call(context, ...initialArgs, ...remainingArgs);
  }
}

function addNumbers(...args) {
  return args.reduce((accum, elem) => accum += elem, 0);
}

let bound = myBind(null, addNumbers, 2);
console.log(bound(4));
console.log(bound(4, 1));
console.log(bound(4, 10, 100));

let bound2 = myBind(null, addNumbers, 2, 1000);
console.log(bound2(4));
console.log(bound2(4, 1));
console.log(bound2(4, 10, 100));


