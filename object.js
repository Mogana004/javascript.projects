//Declaring an object 
let person ={
    name : "Mogana",
    Age : 28,
    "1": 1, //invalid identifiers are defined within quotes
};
// Accessing object properties
/* 1) DOT Notation        - only for valid identifiers
   2) Bracket Notation    ->incase of invalid identifiers , then bracket notation can be used 
*/
console.log(person.name); 
console.log(person.Age);

console.log(person["name"]);
console.log(person["Age"]);
console.log(person["1"]); 


//Accessing not existent properties , we get output as undefined 
console.log(person["gender"]);

