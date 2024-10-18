// Delegate
// Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to. The delegate function should return the same value returned by calling the other object's method.

// Note that this is not the same as using bind. bind returns a new function, whereas delegate maintains the reference.

// Here's a sample run;

function delegate(context, func, ...arg) {
    return function() {
      context[func](...arg);
    }
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },

  exclaim: function(greeting, exclamation) {
    console.log(greeting + ' ' + this.name + exclamation);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

let boo = {
  qux: delegate(foo, 'exclaim', 'hi', '!'),
};

baz.qux();   // logs 'hello test';
boo.qux(); // logs 'hi test!;

foo.bar = function() { console.log('changed'); };
foo.exclaim = function() { console.log('changed'); };


baz.qux();          // logs 'changed'
boo.qux();          // logs 'changed'