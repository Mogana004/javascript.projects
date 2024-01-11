 Creating an Array

let myArray = [5, "six", 2, 8.2];
console.log(myArray);  // [5, "six", 2, 8.2]



Accessing an Array Item

let myArray = [5, "six", 2, 8.2];
console.log(myArray[0]);  // 5
console.log(myArray[1]);  // six


Modifying an Array Item
let myArray = [5, "six", 2, 8.2];
myArray[1] = 6;
console.log(myArray);  // [5, 6, 2, 8.2]


Finding Array Length
let myArray = [5, "six", 2, 8.2];
let lengthOfArray = myArray.length;
console.log(lengthOfArray);  // 4



Array Methods
push()
let myArray = [5, "six", 2, 8.2];
myArray.push(true);

console.log(myArray);  // [5, "six", 2, 8.2, true]



 pop()
let myArray = [5, "six", 2, 8.2];
let lastItem = myArray.pop();

console.log(myArray);  // [5, "six", 2]

console.log(lastItem);  // 8.2


