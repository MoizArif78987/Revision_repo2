import Person from "./user.js";

let Moiz = new Person("Moiz");
Moiz.PrintNameArrow();
Moiz.PrintName();

function printArgs(){
    console.log(arguments);
}

printArgs("Apple",1,true)


const printArgsArr =(...rest) =>{
    console.log("With rest " + rest);
}

printArgsArr("Apple",1,true)

// const printArgsArrow =() =>{
//     console.log(arguments);
// }

// printArgsArrow("Apple",1,true)

let a='ba';
let b='rk';
[a,b]=[b,a]

console.log(b,a)

let User = {
    firstname :'Moiz',
    lastname:"Arif",
    age:22,
    email:"moizarif100@gmail.com",
    password:"qwertyuiop"
}
const {firstname, age}=User;
console.log(firstname,age)


let array=["Lexus LC-300", "Honda Civic", "Suzuki Mehran"]
const [SUV,Sedan,hatchback]=array;
console.log(SUV,Sedan,hatchback)