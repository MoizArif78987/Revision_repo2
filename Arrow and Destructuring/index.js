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

const printArgsArrow =() =>{
    console.log(arguments);
}

printArgsArrow("Apple",1,true)

