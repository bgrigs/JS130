// Delegate
// Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to. The delegate function should return the same value returned by calling the other object's method.

// Note that this is not the same as using bind. bind returns a new function, whereas delegate maintains the reference.

/*
- write a function called delegate
  - should take at least 2 args
    - 1) the object
    - 2) name of method on the object
    - * if there are more args, pass them as args to the objects' method that it delegates to 
  - function should return the same value returned by calling the other object's method 
  
- do not return a new function. maintain the reference 

*/

// Here's a sample run;
function delegate(obj, method, ...args) {
  return () => obj[method].apply(obj, args);
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'