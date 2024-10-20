function forEach(array, callback, context) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(context, array[index], index, array);
  }
}

let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem); // should return a TypeError

forEach(['a', 'b', 'c'], item => console.log(item));
forEach(['a', 'b', 'c'], (value, index, array) => {
  console.log(`After ${value} comes ${array[index + 1]}`)
});

