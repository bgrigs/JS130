function makeList() {
  let items = [];

  return {
    add(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + " added!");
      }
    },

    remove(item) {
      let index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(item + " removed!");
      }
    },

    printList(item) {
      items.forEach(item => console.log(item));
    }
  }
}

let list = makeList();

list.add("peas");
list.printList();

list.add("corn");
list.printList();

list.remove("peas");
list.printList();
