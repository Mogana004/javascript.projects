let person ={
    name : "Mogana",
    Age : 28,
    "1": 1, //invalid identifiers are defined within quotes
    
    habits :["playing" ,"reading"], // array as value 
    car:{
        name:"Audi", //object as value
        model: "A6",

    },
    run :function (){
        console.log("start Running") // function as value
    }


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



//object DESTRUCTURING 
/* to unpack properties from object we use object destructuring */
let {name , Age} =person;
console.log(name);
console.log(Age);


// modifying objet property 
/* Dot notation 
   bracket notation */
person.name ="Abhiii";
console.log(person.name);

person['Age']= "89";
console.log(person['Age']);



console.log(person.habits);
console.log(person.habits[0]);
console.log(person["habits"][1]);


//object as value
console.log(person.car.name);

//function as value testing 
person.run();
