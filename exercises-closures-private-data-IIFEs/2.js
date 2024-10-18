// fill this out. use concat and apply
function myBind() {

}

function addNumbers(a, b) { 
  return a + b;
}

const addFive = myBind(null, addNumbers, 5);

console.log(addFive(10)); // 15