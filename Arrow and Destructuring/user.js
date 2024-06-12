export default class Person{
    constructor(name)
    {
        this.name=name;
    }
    PrintNameArrow(){
        console.log(`Arrow Function: ${this.name}`)
        setTimeout(()=>{
            console.log(`Arrow Function in timeout: ${this.name}`)
        },100)
    }
    PrintName(){
        console.log(`Function Keyword: ${this.name}`)
        setTimeout(function (){
            console.log(`Function Keyword in timeout: ${this.name}`)
            },100)
    }
}